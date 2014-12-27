var startDate = new Date("01/01/2005");
var endDate = new Date("05/01/2009");

var startNewDate = new Date("12/30/2008");
var startNewEnd = new Date("08/14/2009");

var klineutil = require("../kline/klineutil");
var klineio = require("../kline/klineio").config(startDate, endDate);

var stocks = klineio.getAllStockIds();
// stocks = ["SZ002606"];
var stockcounter = 0;
var inc_5=0, inc_10=0, inc_20=0, inc_30=0;

console.log("#  StockID  Date       A5   A10  A20  A30");
for (var i=0; i<stocks.length; i++) {
    var stockId = stocks[i];
    var kLineJson = klineio.readKLineSync(stockId);

    if (kLineJson.length===0) continue;
    var firstObj = kLineJson[0];
    var date = new Date(firstObj.date);
    if (date<startNewDate || date>startNewEnd) continue;
    var startPrice = firstObj.open;
    stockcounter++;
    var _5 = klineutil.increase(startPrice, kLineJson[4].close);
    inc_5+=_5;
    var _10 = klineutil.increase(startPrice, kLineJson[9].close);
    inc_10+=_10;
    var _20 = klineutil.increase(startPrice, kLineJson[19].close);
    inc_20+=_20;
    var _30 = klineutil.increase(startPrice, kLineJson[29].close);
    inc_30+=_30;
    var cstr = (stockcounter>9?""+stockcounter:"0"+stockcounter)
    console.log(cstr, 
        stockId, firstObj.date, _5.toFixed(2), _10.toFixed(2), _20.toFixed(2), _30.toFixed(2));
}
console.log("Total:", stockcounter);
console.log((inc_5/stockcounter).toFixed(4), (inc_10/stockcounter).toFixed(4), (inc_20/stockcounter).toFixed(4), (inc_30/stockcounter).toFixed(4))
