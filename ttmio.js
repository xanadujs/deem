var fs = require("fs");
var ajaxRequest = require('request');

var ttmUrl = //"http://qt.gtimg.cn/&q=";
    "http://webstock.quote.hermes.hexun.com/a/quotelist?code=#&column=PE,code";

var step = 90;
var ttmMap = {}
var stocks = getAllStockIds();
//stocks = ["SH600000"];
function config() {
    return this;
}

function getAllStockIds(match) {
    var klinefiles = fs.readdirSync("../datasource/klines_base/");
    var stockIds = [];
    klinefiles.forEach(function(fileName) {
        if (match === undefined || fileName.indexOf(match) >= 0) {
            stockIds.push(fileName.substring(0, fileName.indexOf(".")));
        }
    });
    return stockIds;
}

function updateTTMData(startIndex, callback) {
    var len = stocks.length;
    if (startIndex >= len) {
        callback();
        return;
    }

    console.log("updateTTMData...", startIndex)

    var counter = 0;
    var stockString = "";
    var stockIdMap = {};
    for (var i = startIndex; i < len && i - startIndex < step; i++) {
        var stockId = stocks[i];
        stockIdMap[stockId.substr(2,6)] = stockId;
        if (stockId.indexOf("SH")===0) {
           stockId = stockId.replace("SH", "sse"); 
        } else {
            stockId = stockId.replace("SZ", "szse"); 
        }
        stockString += stockId;
        stockString += ",";
    }
    console.log(stockString)
    ajaxRequest(ttmUrl.replace("#", stockString),
        function(error, response, body) {
            if (!error && response.statusCode == 200) {
               // '({"Data":[[[2398,"002557"],[20247,"600495"]]]});'.match(/((\d)+,"(\d)+")/g)
               var PEs = body.match(/((\d)+,"(\d)+")/g);
                //var lines = body.split("\n");
                if (PEs===null) console.log(body)
                //console.log("===", lines.length)
                for (var j = 0; j < PEs.length; j++) {
                    var peid = PEs[j].replace(/\"/g, "").split(",");
                    ttmMap[stockIdMap[peid[1]]] = Number(peid[0])/100;

                    if (stockIdMap[peid[1]]==="SH600495") console.log("SH600495", peid[0])
                }

                if (startIndex+step>=len) {
                    // console.log(ttmMap)
                    writeTTMSync(ttmMap);
                    callback(ttmMap)
                } else {
                  updateTTMData(startIndex+step, callback)
                }
            } else {
                console.log("error", error)
                    //updateMoneyFlowData(startIndex, callback);
            }

        });
}


function writeTTMSync(jsonData) {
    fs.writeFileSync("../datasource/ttm.json", JSON.stringify(jsonData));
}


function readTTMSync() {
    
  var content = fs.readFileSync("../datasource/ttm.json","utf8");
  content = content.toUpperCase();
  var json = JSON.parse(content);
  return json;

}



exports.config = config;
exports.updateTTMData = updateTTMData;
exports.readTTMSync = readTTMSync;