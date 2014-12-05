console.time("run");
/**********************/
var startDate = new Date("01/01/2010");
var endDate = new Date("08/01/2015");
/**********************/
var masterStartTime = new Date();
var childprocessArr = [];

var klineutil = require("../kline/klineutil");
var klineio = require("../kline/klineio").config(startDate, endDate);
var klineformbase = require("../klineformbase");
var cluster = require('cluster');
var childprocess = require('child_process');

var detailedDateResult = {};
var detailedDateResultStart = new Date("01/01/2013");
var detailedDateResultEnd = new Date("01/01/2015");
var detailedDateResultTotalMin = 10000;
//var dateSections = [new Date("01/01/2008"), new Date("01/01/2009")]; 
var dateSections = [new Date("01/01/2008"), new Date("01/01/2009"), new Date("01/01/2010"), new Date("01/01/2011"),
    // new Date("03/01/2011"), new Date("04/01/2011"), new Date("05/01/2011"), new Date("06/01/2011"), 
    // new Date("07/01/2011"), new Date("08/01/2011"), new Date("09/01/2011"), new Date("10/01/2011"), new Date("11/01/2011"), new Date("12/01/2011"), 
    new Date("01/01/2012"),
    new Date("01/01/2013"), new Date("01/01/2014"), new Date("08/01/2014")
];
var MinUnionValid = 10000;
var klineForm = process.argv[2] ? process.argv[2] : "wBottomA_b";
var intersectionKLineForm = "" //moneyFlowInOut";
var unionKLineForm = "" //wBottomA,wBottom,headShoulderBottom,morningStarA,morningStarB,redNGreenRed,greenInRedA";
var klineformanalyser = require("../kline/form/analyser").config({
    startDate: startDate,
    endDate: endDate,
    form: "./form80.js"
});

var klineformbase = require("../klineformbase");
var funcitonio = require("../funcitonio");

klineformanalyser.klineforms[klineForm] = klineformbase[klineForm];

var valideCheckForms = klineformanalyser.kLineFormMethods(klineForm);
// console.log("valideCheckForms", valideCheckForms)
var listLen = process.argv[3] ? Number(process.argv[3]) : 20;

//0.8313 'reversedHammerA,wBottom' ' of ' [ 'hammerA', 'reversedHammerA', 'wBottom
//"wBottom, wBottomA, headShoulderBottom, on8While21UpVolumeHigh, on8While21Up, 
//red3, redGreenRed, greenInRed, redNGreenRed";
//morningStar, sidewaysCompression

var stocksShowLog = []; //["SZ002158", "SH600061"];//["SH600987"];//["SZ002127"];
var showLogDates = [] //["11/14/2011"];

var stocks = klineio.getAllStockIds();
// stocks = ['SZ300009', 'SZ300365']//['SZ002371', "SZ002158", "SH600061"];
if (cluster.isMaster) {

    var conditionanalyser = require("../kline/form/conditionanalyser");
    var stocksLen = stocks.length;
    // var masterTotal = 0;
    // var masterWins = 0;
    var masterResult = {
        master_total: 0,
        master_win: 0
    };
    var masterValidObj = {};
    var masterSamples = [];
    var masterConditionObj = {
        win: {},
        lose: {}
    };
    var funName;
    var numCPUs = require('os').cpus().length;
    var forkStocks = Math.ceil(stocksLen / numCPUs);

    var workingForkCount = 0;
    for (; workingForkCount < numCPUs; workingForkCount++) {
        if (workingForkCount * forkStocks >= stocksLen) break;
        var worker = cluster.fork({
            startIdx: workingForkCount * forkStocks,
            endIdx: Math.min((workingForkCount + 1) * forkStocks, stocksLen) - 1
        });
        worker.on('message', function() {
            var forkprocess = worker;
            return function(msg) {
                forkprocess.kill();
                onBaseForkMessageHandler(msg);
                workingForkCount--;
                console.log("message------", workingForkCount)
                if (workingForkCount == 0) {
                    if (intersectionKLineForm) funName = klineForm + " && " + intersectionKLineForm;
                    if (unionKLineForm) klineForm + " || " + unionKLineForm;
                    var winPer = masterResult.master_win / masterResult.master_total;
                    console.log(funName, "win:", masterResult.master_win + "/" + masterResult.master_total + "=" + (masterResult.master_win / masterResult.master_total).toFixed(3),
                        "   valid:", masterResult.master_valid + "/" + masterResult.master_total + "=" + (masterResult.master_valid / masterResult.master_total).toFixed(3));
                    console.log("\r\ncondition tune result:");
                    var conditionArr = conditionFilter(masterConditionObj, winPer);
                    conditionArr.sort(function(att1, att2) {
                        return conditionSortFun(att1, att2, masterConditionObj, winPer)
                    });

                    masterSamples.sort(function(s1, s2) {
                        if (s1.stockId > s2.stockId) return -1;
                        else if (s1.stockId < s2.stockId) return 1;
                        else return 0
                    })

                    var maxUnionValid = 0;
                    autoTuneConditions(masterSamples, masterConditionObj, conditionArr, 0, function(conditions) {
                        var conditionStr = "";
                        for (var conditionsIdx = 0; conditionsIdx < conditions.length; conditionsIdx++) {
                            var conditionObj = conditions[conditionsIdx];
                            var cstr = conditionObj.condition;
                            if (conditionsIdx != 0) conditionStr += "\r\n&& ";
                            conditionStr += cstr.replace(/<<<</g, "");

                            conditionStr += "//" + conditionObj.conditionIdx + " " + conditionObj.probability.toFixed(3) + " " + conditionObj.unionvalid + "/" + conditionObj.total;
                        }

                        console.log("");

                        if (conditions[0].unionvalid > MinUnionValid) {
                            MinUnionValid = conditions[0].unionvalid;
                            console.log("***************MinUnionValid = ", MinUnionValid)

                            console.log("autoConditionArr MAX:\r\n", conditionStr);
                            funcitonio.writeFunctionSync(klineForm, conditionStr);
                            console.log("duration:", new Date() - masterStartTime);
                        } else {
                            // console.log("autoConditionArr:\r\n", conditionStr);
                        }

                    })

                }
            }
        }());
        worker.on('exit', function() {
            console.log("exit------", workingForkCount)
        });
    }

} else if (cluster.isWorker) {

    var conditionanalyser = require("../kline/form/conditionanalyser");

    var forkResult = {
        total: 0,
        win: 0
    };
    var forkValidObj = {};
    var forkSamples = [];
    var conditionObj = {
        win: {},
        lose: {}
    };

    var startIdx = parseInt(process.env.startIdx, 10);
    var endIdx = parseInt(process.env.endIdx, 10);

    function processStock(idx) {
        var stockId = stocks[idx];
        var fun = klineForm;
        var showLog = -1 !== stocksShowLog.indexOf(stockId);

        klineio.readKLine(stockId, function(kLineJson) {

            var result = klineformanalyser.traverseForWinning(fun, kLineJson, -0.05, 0.05, 100, {
                passAll: false,
                showLog: showLog,
                showLogDates: showLogDates,
                stockId: stockId,
                union: unionKLineForm,
                intersection: intersectionKLineForm,
                injection: function(stockId, klineJson, idx, mtd) {

                    forkSamples.push({
                        stockId: stockId,
                        index: idx
                    });
                    var unionValid = false;
                    if (!klineformanalyser.unionResult(null, valideCheckForms, klineJson, idx)) {
                        forkValidObj[stockId + "_" + idx] = true;
                        forkResult.valid = forkResult.valid ? forkResult.valid + 1 : 1;
                        unionValid = true;
                    }

                    var iswin = klineJson[idx].winOrLose === "win";
                    // conditionanalyser.scanConditions(klineJson, idx, conditionObj, unionValid, stockId);
                    conditionanalyser.scanConditions(klineJson, idx, conditionObj, function(condition, obj, condObj, boolvalue) {
                        if (undefined === condObj[condition].true_unionvalid) condObj[condition].true_unionvalid = 0;
                        if (undefined === condObj[condition].false_unionvalid) condObj[condition].false_unionvalid = 0;
                        // if (unionValid)
                        // console.log("boolvalue", boolvalue, unionValid, condition, condObj[condition])
                        if (boolvalue) {
                            if (unionValid) condObj[condition].true_unionvalid++;
                        } else {
                            if (unionValid) condObj[condition].false_unionvalid++;
                        }

                    })

                }
            });

            forkResult.total += result.total;
            forkResult.win += result.win;

            if (idx === endIdx) {
                forkResult.fun = fun;
                forkResult.forkSamples = forkSamples;
                forkResult.conditionObj = conditionObj;
                forkResult.forkValidObj = forkValidObj;
                forkResult._idx = endIdx;
                process.send(forkResult);
                //process.exit(0);
            } else {
                processStock(idx + 1);
            }
        });

    }

    processStock(startIdx);

}

function stopCheck(per, total, condArr, condIdx) {
    return condIdx === condArr.length - 1 || (per < 0.77 && condIdx > 3) || (per < 0.78 && total < MinUnionValid * 1.2) || (per < 0.77 && total < MinUnionValid * 1.5)
        // || (per<0.7 && total<MinUnionValid*3)
}

function autoTuneConditions(samples, condObj, conditionArr, condidx, callback) {
    // console.log("autoTuneConditions start", condidx)

    var cond = conditionArr[condidx];
    var wincon = condObj.win[cond];
    var losecon = condObj.lose[cond];

    if (wincon === undefined) {
        console.log("wincom undefined", condidx, cond, conditionArr.length)
        return;
    }

    var truewinper = wincon._true / (wincon._true + losecon._true);
    var losewinper = wincon._false / (wincon._false + losecon._false);
    var isTrue = truewinper > losewinper;
    var validper = Math.max(truewinper, losewinper);

    var total_unionvalid = truewinper > losewinper ? (wincon.true_unionvalid + losecon.true_unionvalid) : (wincon.false_unionvalid + losecon.false_unionvalid);

    var total_all = truewinper > losewinper ? (wincon._true + losecon._true) : (wincon._false + losecon._false);
    if (stopCheck(validper, total_unionvalid, conditionArr, condidx)) {
        setImmediate(callback);
        return;
    }

    if (total_unionvalid < 0.8 * MinUnionValid || total_unionvalid < MinUnionValid && validper < 0.805) {
        // autoTuneConditions(samples, condObj, conditionArr, condidx++, callback);
        setImmediate(autoTuneConditions, samples, condObj, conditionArr, ++condidx, callback);
        return;
    };

    if (total_unionvalid < MinUnionValid)
        console.log("*****************", total_unionvalid, MinUnionValid, validper)

    console.log("autoTuneCondition:", condidx, cond, truewinper > losewinper ? "T" : "F",
        Math.max(truewinper, losewinper).toFixed(3), total_unionvalid + "/" + total_all);

    var callbackParam = {
        condition: (isTrue ? cond : "!(" + cond + ")"),
        probability: validper,
        total: total_all,
        unionvalid: total_unionvalid,
        conditionIdx: condidx
    }

    // (isTrue ? cond : "!(" + cond + ")") + "//" + validper.toFixed(3) + " " + total_unionvalid + "/" + total_all;

    if (validper > 0.8) {
        var maxUnionValidConditionIdx = getMaxUnionValidConditionIdx(condObj, conditionArr, condidx);
        console.log("maxUnionValidConditionIdx", condidx, cond, maxUnionValidConditionIdx, conditionArr[maxUnionValidConditionIdx])
        if (condidx != maxUnionValidConditionIdx) {
            setImmediate(autoTuneConditions, samples, condObj, conditionArr, maxUnionValidConditionIdx, callback);
        } else {
            if (total_unionvalid > MinUnionValid) {
                callback([callbackParam])
            }
            setImmediate(callback);

        }
        return;
    }


    var workingForkCount = 0;
    var numCPUs = require('os').cpus().length;
    var messageCount = 0;
    var forkCount = 0;
    var sampleStartIndex = 0;
    var forkSampleLength = Math.floor(samples.length / numCPUs);
    var subCondObj = {
        win: {},
        lose: {}
    };
    var subSamplesObj = {
        subSamples: []
    }
    for (; workingForkCount < numCPUs; workingForkCount++) {
        var fork = childprocess.fork('tuningfork.js');
        fork.on('message', function(msg) {

            messageCount++;

            onForkMessageHandler(msg, subCondObj, subSamplesObj);
            // if (messageCount === numCPUs) {
            //     console.log("one round finished", subSamplesObj.subSamples.length)
            // }
            // childprocessArr.push(fork);
            if (messageCount === numCPUs) {
                var subconditionArr = conditionFilter(subCondObj, validper);
                subconditionArr.sort(function(att1, att2) {
                    return conditionSortFun(att1, att2, subCondObj, validper)
                });
                var subconditionArrIdx = 0;
                autoTuneConditions(subSamplesObj.subSamples, subCondObj, subconditionArr, subconditionArrIdx, function(arr) {
                    if (arr) {
                        arr.push(callbackParam)
                        callback(arr);
                    } else {
                        console.log(">>>>>>>>>>> ", condidx, cond)
                        setImmediate(autoTuneConditions, samples, condObj, conditionArr, ++condidx, callback);
                    }
                });


            }
        });


        var sampleEndIndex = sampleStartIndex + forkSampleLength;
        if (workingForkCount === numCPUs) sampleEndIndex = samples.length;
        var subsamples = samples.slice(sampleStartIndex, sampleEndIndex);
        fork.send({
            samples: subsamples,
            condition: cond,
            isTrue: isTrue,
            validObj: masterValidObj
        })
        sampleStartIndex = sampleEndIndex;
    }

}

function onForkMessageHandler(msg, subCondObj, subSamplesObj) {
    subSamplesObj.subSamples = subSamplesObj.subSamples.concat(msg.subSamples);
    var msgobj = msg.subCondObj;
    var mergeObj = function(mobj, obj) {
        for (var key in mobj) {
            if (!obj[key]) {
                obj[key] = {
                    "_true": 0,
                    "_false": 0,
                    true_unionvalid: 0,
                    false_unionvalid: 0
                };
            }
            obj[key]._true += mobj[key]._true;
            obj[key]._false += mobj[key]._false;
            obj[key].true_unionvalid += mobj[key].true_unionvalid;
            obj[key].false_unionvalid += mobj[key].false_unionvalid;
        }
    }
    mergeObj(msgobj.win, subCondObj.win);
    mergeObj(msgobj.lose, subCondObj.lose);
}

function conditionFilter(conditionObj, per) {
    var conditionArr = [];
    for (var att in conditionObj.win) {
        var wincon = conditionObj.win[att];
        var losecon = conditionObj.lose[att];
        var truewinper = wincon._true / (wincon._true + losecon._true);
        var falsewinper = wincon._false / (wincon._false + losecon._false);
        if (truewinper >= falsewinper && (truewinper > 0.8 || truewinper - per > 0.01) && wincon.true_unionvalid + losecon.true_unionvalid > 800) {
            conditionArr.push(att);
        } else if (truewinper < falsewinper && (falsewinper > 0.8 || falsewinper - per > 0.01) && wincon.false_unionvalid + losecon.false_unionvalid > 800) {
            conditionArr.push(att);
        }
    }
    return conditionArr;
}

function dateToString(date) {
    var mth = date.getMonth() + 1;
    return (mth > 9 ? mth : "0" + mth) + "/" + date.getDate() + "/" + date.getFullYear();
}

function getMaxUnionValidConditionIdx(conditionObj, conditionArr, currentIdx) {
    var maxUnionValid = 0;
    var maxUnionValidConditionIdx = 0;
    var i = currentIdx;
    for (; i < conditionArr.length; i++) {
        var att = conditionArr[i];
        var wincon = conditionObj.win[att];
        var losecon = conditionObj.lose[att];

        var truewinper = wincon._true / (wincon._true + losecon._true);
        var falsewinper = wincon._false / (wincon._false + losecon._false);
        var unionvalid = truewinper > falsewinper ? (wincon.true_unionvalid + losecon.true_unionvalid) : (wincon.false_unionvalid + losecon.false_unionvalid);
        var per = Math.max(truewinper, falsewinper);
        if (per > 0.8 && unionvalid > maxUnionValid) {
            maxUnionValid = unionvalid;
            maxUnionValidConditionIdx = i;
            // console.log(i, per, maxUnionValid, conditionArr[i])
        }

    }

    return maxUnionValidConditionIdx;
}

function conditionSortFun(att1, att2, conditionObj, winPer) {
    var wincon1 = conditionObj.win[att1];
    var losecon1 = conditionObj.lose[att1];
    var per1 = 0;

    if (wincon1) {
        var truewinper1 = wincon1._true / (wincon1._true + losecon1._true);
        var falsewinper1 = wincon1._false / (wincon1._false + losecon1._false);
        var unionvalid1 = truewinper1 > falsewinper1 ? (wincon1.true_unionvalid + losecon1.true_unionvalid) : (wincon1.false_unionvalid + losecon1.false_unionvalid);
        var perdiff = Math.max(truewinper1, falsewinper1) - winPer;
        per1 = unionvalid1 * perdiff;
    } else {
        console.log(att1, wincon1, losecon1)
    }

    var wincon2 = conditionObj.win[att2];
    var losecon2 = conditionObj.lose[att2];
    var per2 = 0;
    if (wincon2) {
        var truewinper2 = wincon2._true / (wincon2._true + losecon2._true);
        var falsewinper2 = wincon2._false / (wincon2._false + losecon2._false);
        var unionvalid2 = truewinper2 > falsewinper2 ? (wincon2.true_unionvalid + losecon2.true_unionvalid) : (wincon2.false_unionvalid + losecon2.false_unionvalid);
        var perdiff = Math.max(truewinper2, falsewinper2) - winPer;

        per2 = unionvalid2 * perdiff;
    } else {
        console.log(att2, wincon2, losecon2)
    }

    if (per1 > per2) return -1;
    if (per1 < per2) return 1;
    return 0;
}

function onBaseForkMessageHandler(msg) {
    funName = msg.fun;
    var conditionObj = msg.conditionObj;
    var forkValidObj = msg.forkValidObj;
    masterSamples = masterSamples.concat(msg.forkSamples);

    delete msg.forkValidObj;
    delete msg.conditionObj;
    delete msg.fun;

    for (var att in msg) {
        masterResult["master_" + att] = masterResult["master_" + att] ? masterResult["master_" + att] + msg[att] : msg[att];
    }

    for (var att in forkValidObj) {
        masterValidObj[att] = true;
    }

    for (var att in conditionObj.win) {
        if (!masterConditionObj.win[att]) masterConditionObj.win[att] = {
            "_true": 0,
            "_false": 0,
            true_unionvalid: 0,
            false_unionvalid: 0
        };
        masterConditionObj.win[att]._true += conditionObj.win[att]._true;
        masterConditionObj.win[att]._false += conditionObj.win[att]._false;

        masterConditionObj.win[att].true_unionvalid += conditionObj.win[att].true_unionvalid;
        masterConditionObj.win[att].false_unionvalid += conditionObj.win[att].false_unionvalid;
    }
    for (var att in conditionObj.lose) {
        if (!masterConditionObj.lose[att]) masterConditionObj.lose[att] = {
            "_true": 0,
            "_false": 0,
            true_unionvalid: 0,
            false_unionvalid: 0
        };
        masterConditionObj.lose[att]._true += conditionObj.lose[att]._true;
        masterConditionObj.lose[att]._false += conditionObj.lose[att]._false;

        masterConditionObj.lose[att].true_unionvalid += conditionObj.lose[att].true_unionvalid;
        masterConditionObj.lose[att].false_unionvalid += conditionObj.lose[att].false_unionvalid;
    }
}