var startDate = new Date("01/01/2010");
var endDate = new Date("08/01/2015");

var klineio = require("../kline/klineio").config(startDate, endDate);
var conditionanalyser = require("../kline/form/conditionanalyser");

process.on('message', function(m) {
    // console.log('CHILD got message:', m.condition, m.samples.length);
    var subCondObj = {
        win: {},
        lose: {}
    };

   var subsamples = samplesOfCondition(m.samples, m.condition, m.isTrue, m.validObj, subCondObj);
   process.send({
        subSamples: subsamples,
        subCondObj: subCondObj
    });
   process.exit(0);
});



function samplesOfCondition(samples, cond, isTrue, validObj, subCondObj) {
    
    var subsamples = [];
    var wincount = 0;
    var lastStockId;
    for (var smpidx = 0; smpidx < samples.length; smpidx++) {
        // if (smpidx%1000===0) console.log(samples[smpidx].stockId, smpidx, samples.length, new Date())
        var sid = samples[smpidx].stockId;
        var kLineJson;
        if (lastStockId != sid) {
            kLineJson = klineio.readKLineSync(sid);
            lastStockId = sid;
            // console.log(sid)
        }

        var stkidx = samples[smpidx]['index'];
        var obj = kLineJson[stkidx];

        var _cond = cond.replace(/<<<</g, "").replace(/ /g, "")
        var _eval = eval(_cond);
        if (isTrue ? _eval : !_eval) {
            if (obj.winOrLose === "win") wincount++;
            subsamples.push({
                stockId: sid,
                index: stkidx
            })
            var unionValid = false;
            if (validObj[sid + "_" + stkidx] === true) unionValid = true;
            
            conditionanalyser.scanConditions(kLineJson, stkidx, subCondObj, function(condition, obj, _condObj, boolvalue) {
                if (undefined === _condObj[condition].true_unionvalid) _condObj[condition].true_unionvalid = 0;
                if (undefined === _condObj[condition].false_unionvalid) _condObj[condition].false_unionvalid = 0;
                if (boolvalue) {
                    if (unionValid) _condObj[condition].true_unionvalid++;
                } else {
                    if (unionValid) _condObj[condition].false_unionvalid++;
                }

            });
            
        }

    }

    return subsamples;
}

// function autoTuneCondition(samples, conditionArr, condObj) {
//     for (var cdtidx = 0; cdtidx < conditionArr.length; cdtidx++) {
//         var cond = conditionArr[cdtidx];
//         var wincon = condObj.win[cond];
//         var losecon = condObj.lose[cond];
//         if (wincon === undefined) continue;
//         var truewinper = wincon._true / (wincon._true + losecon._true);
//         var losewinper = wincon._false / (wincon._false + losecon._false);
//         var isTrue = truewinper > losewinper;
//         var validper = Math.max(truewinper, losewinper);

//         var total_unionvalid = truewinper > losewinper ? (wincon.true_unionvalid + losecon.true_unionvalid) : (wincon.false_unionvalid + losecon.false_unionvalid);

//         var total_all = truewinper > losewinper ? (wincon._true + losecon._true) : (wincon._false + losecon._false);

//         if (total_unionvalid < 1000) continue;

//         console.log("autoTuneCondition:", cond, truewinper > losewinper ? "T" : "F",
//             Math.max(truewinper, losewinper).toFixed(3), total_unionvalid + "/" + total_all);

//         // if (validper > 0.8) return [(isTrue ? cond : "!(" + cond + ")") + "//" + validper.toFixed(3) + " " + total_unionvalid + "/" + total_all];

//         var subCondObj = {
//             win: {},
//             lose: {}
//         };
//         var subsamples = [];
//         var wincount = 0;
//         var lastStockId;
//         var testcount = 0;
//         for (var smpidx = 0; smpidx < samples.length; smpidx++) {
//             // if (smpidx%1000===0) console.log(samples[smpidx].stockId, smpidx, samples.length, new Date())
//             var sid = samples[smpidx].stockId;
//             var kLineJson;
//             if (lastStockId != sid) {
//                 kLineJson = klineio.readKLineSync(sid);
//                 lastStockId = sid;
//                 // console.log(sid)
//             }

//             var stkidx = samples[smpidx]['index'];
//             var obj = kLineJson[stkidx];

//             var _cond = cond.replace(/<<<</g, "").replace(/ /g, "")
//             var _eval = eval(_cond);
//             if (isTrue ? _eval : !_eval) {
//                 testcount++;
//                 if (obj.winOrLose === "win") wincount++;
//                 subsamples.push({
//                     stockId: sid,
//                     index: stkidx
//                 })
//                 var unionValid = false;
//                 if (masterValidObj[sid + "_" + stkidx] === true) unionValid = true;

//                 conditionanalyser.scanConditions(kLineJson, stkidx, subCondObj, function(condition, obj, _condObj, boolvalue) {
//                     if (undefined === _condObj[condition].true_unionvalid) _condObj[condition].true_unionvalid = 0;
//                     if (undefined === _condObj[condition].false_unionvalid) _condObj[condition].false_unionvalid = 0;
//                     if (boolvalue) {
//                         if (unionValid) _condObj[condition].true_unionvalid++;
//                     } else {
//                         if (unionValid) _condObj[condition].false_unionvalid++;
//                     }

//                 });

//             }

//         }
//         // console.log("subsamples:", subsamples.length, samples.length)

//         var subconditionArr = conditionFilter(subCondObj, wincount / subsamples.length);
//         // console.log("wincount/samples.length", wincount/subsamples.length, wincount, subsamples.length)

//         subconditionArr.sort(function(att1, att2) {
//             return conditionSortFun(att1, att2, subCondObj, wincount / subsamples.length)
//         });
//         var subcond = subconditionArr[0];
//         var subwincon = subCondObj.win[subcond];
//         var sublosecon = subCondObj.lose[subcond];

//         if (subwincon === undefined) break;

//         var subtruewinper = subwincon._true / (subwincon._true + sublosecon._true);
//         var sublosewinper = subwincon._false / (subwincon._false + sublosecon._false);

//         var subper = Math.max(subtruewinper, sublosewinper);

//         var count_unionvalid = subtruewinper > sublosewinper ? (subwincon.true_unionvalid + sublosecon.true_unionvalid) : (subwincon.false_unionvalid + sublosecon.false_unionvalid);

//         var count_all = subtruewinper > sublosewinper ? (subwincon._true + sublosecon._true) : (subwincon._false + sublosecon._false);

//         // console.log("subsamples:", subcond, subper, subtruewinper > sublosewinper ? "T" : "F", count_all, count_unionvalid);
//         // console.log("------------------")

//         var condarr = autoTuneCondition(subsamples, subconditionArr, subCondObj)
//         if (condarr != null) {
//             return [(isTrue ? cond : "!(" + cond + ")") + "//" + validper.toFixed(3) + " " + total_unionvalid + "/" + total_all].concat(condarr);
//         }

//     }

// }

function conditionFilter(conditionObj, per) {
    var conditionArr = [];
    for (var att in conditionObj.win) {
        var wincon = conditionObj.win[att];
        var losecon = conditionObj.lose[att];

        var truewinper = wincon._true / (wincon._true + losecon._true);
        var falsewinper = wincon._false / (wincon._false + losecon._false);
        // console.log(att, wincon, losecon, truewinper, falsewinper)
        if (truewinper >= falsewinper && truewinper - per > 0.01 && wincon.true_unionvalid + losecon.true_unionvalid > 800) {

            conditionArr.push(att);
        } else if (truewinper < falsewinper && falsewinper - per > 0.01 && wincon.false_unionvalid + losecon.false_unionvalid > 800) {
            conditionArr.push(att);
        }
    }
    return conditionArr;
}

function dateToString(date) {
    var mth = date.getMonth() + 1;
    return (mth > 9 ? mth : "0" + mth) + "/" + date.getDate() + "/" + date.getFullYear();
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
