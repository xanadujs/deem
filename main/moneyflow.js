console.time("run");
var moneyflowio = require("../../node/stock/moneyflow/io").config();
var mailutil = require("../../node/stock/mailutil");
var klineutil = require("../kline/klineutil");

var startDate = new Date("01/01/2005");
var endDate = new Date("01/01/2015");
var targetDateStr = process.argv[2];

if (!targetDateStr) {
    var today = new Date();
    var _m = 1+today.getMonth();
    var _d = today.getDate();
    var _y = today.getFullYear();

    targetDateStr = (_m>9?_m:"0"+_m) +"/"
        +(_d>9?_d:"0"+_d) +"/"+_y;
}

//targetDateStr = "04/28/2014";
console.log("targetDateStr:"+targetDateStr);     

var klineio = require("../kline/klineio").config(startDate, endDate);
var stocks = klineio.getAllStockIds();
// stocks = ["SZ002212"];//["SH600015"];//
function _f(amount){
    var str = (amount/10000).toFixed(2);
    if (str.indexOf(".")>(amount<0?4:3)) {
        str = str.substring(0,str.indexOf(".")-3)+","+str.substring(str.indexOf(".")-3);
    }
    return str;
}
var emailbody = "";
var counter = 0, losecounter = 0, wincounter = 0;

// stocks = ["SZ002557"]
stocks.forEach(function(stockId) {
    var klineJson= klineio.readKLineSync(stockId);
    var len = klineJson.length;
    var klj;
    var i = len-1;
    for (; i>=0; i--) {
        klj = klineJson[i];
        if(klj.date === targetDateStr) break;
    }
    if (i<0) {
        return;
    }
    var maxr0netsumidx = i-klj.netsummax_r0_duration;
    var duration = klj.netsummax_r0_duration;
    
    var low_index_20 = klineutil.lowItemIndex(klineJson, i-20, i, "low");
    var low_index_40 = klineutil.lowItemIndex(klineJson, i-40, i-5, "low");
    var low_index_60 = klineutil.lowItemIndex(klineJson, i-60, i-5, "low");

    var marketCap = klj.close*klj.volume/(klj.turnover/10000)

    if (undefined === klj.netsum_r0_above) console.log(stockId)
    // var supportArr = getSpports(klineJson, i, 0.1, 0.005);
    // console.log(klj.netsum_r0_above, klj.netsum_r0x_above, klj.amount_ave_21)
    var supportArr = getSpports(klineJson, i, 0.1, 0.005);
    var support0 = Number(supportArr[0].split("@")[0]);
    var support1 = supportArr[1] ? Number(supportArr[1].split("@")[0]) : 0;
    if (duration>60
        && (support0>8|| support1>8)
        // && i-low_index_40 > 10
        // && klineutil.increase(klineJson[low_index_40].low, klj.close) < 2 * klj.amplitude_ave_21
        && (klj.netsummax_r0+klj.netsummax_r0_netsum_r0x>0.1*marketCap//5*klj.amount_ave_21//
        && klj.netsum_r0_above+klj.netsum_r0x_above>0.1*marketCap//5*klj.amount_ave_21//0
        )
        && (klj.netsum_r0_20 > 0 || klj.netsum_r0_40 > 0)

        
        // && klj.netsum_r0_above_60>0.5*klj.amount_ave_21// 0.1*marketCap//
        // && klj.netsum_r0_above > klj.netsum_r0_below//&& klj.netsum_r0_above>0.1*marketCap
        ) {
        counter++;
        // console.log(stockId)
        

        // console.log(stockId)
        // console.log(klj.close, supportArr.toString())

        // console.log(supportArr.toString())
        // console.log(targetDateStr, stockId, "supportArr", supportArr[0]+"/"+priceMap[supportArr[0]], supportArr[1]+"/"+priceMap[supportArr[1]],
        //     "resistance:",resistanceArr[0]+"/"+priceMap[resistanceArr[0]], resistanceArr[1]+"/"+priceMap[resistanceArr[1]])

           emailbody += "<a href='http://vip.stock.finance.sina.com.cn/moneyflow/#!ssfx!"+stockId.toLowerCase()+"'>"
                        +stockId+"</a> "
                        + "<b>"+klineJson[maxr0netsumidx].date+"-"+targetDateStr+"</b> "+klj.winOrLose+"<br>"
                        //+"duration:"+(duration)+" above:"+aboveitems.length+" below:"+belowitems.length
                        //+"<br>"
                        +"amount_ave_21:"+_f(klj.amount_ave_21) + " amount_ave_8:"+_f(klj.amount_ave_8)
                        +"<br>"
                        //+"aboveitems:"+aboveitems.length+ " belowitems:"+belowitems.length+" belowitems_30:"+belowitems_30.length
                        +"<br>"
                        +" netsum_r0_5:"+_f(klj.netsum_r0_5)
                        +" netsum_r0_10:"+_f(klj.netsum_r0_10)
                        +" netsum_r0_20:"+_f(klj.netsum_r0_20) 
                        +" netsum_r0_40:"+_f(klj.netsum_r0_40)
                        +" <br>"
                        +" netsum_r0x_5:"+_f(klj.netsum_r0x_5)
                        +" netsum_r0x_10:"+_f(klj.netsum_r0x_10)
                        +" netsum_r0x_20:"+_f(klj.netsum_r0x_20) 
                        +" netsum_r0x_40:"+_f(klj.netsum_r0x_40) 
                        +" <br>"//+" <br>"
                        +"<font color='#888888' size='2'>"
                        +" netsummax_r0_5:"+_f(klj.netsummax_r0_5)
                        +" netsummax_r0_10:"+_f(klj.netsummax_r0_10)
                        +" netsummax_r0_20:"+_f(klj.netsummax_r0_20)
                        +" netsummax_r0_40:"+_f(klj.netsummax_r0_40)
                        +" <br>"
                        +" netsummax_r0x_5:"+_f(klj.netsummax_r0x_5)
                        +" netsummax_r0x_10:"+_f(klj.netsummax_r0x_10)
                        +" netsummax_r0x_20:"+_f(klj.netsummax_r0x_20)
                        +" netsummax_r0x_40:"+_f(klj.netsummax_r0x_40) 
                        +" <br>"//+" <br>"
                        +" netsummin_r0_5:"+_f(klj.netsummin_r0_5) 
                        +" netsummin_r0_10:"+_f(klj.netsummin_r0_10)
                        +" netsummin_r0_20:"+_f(klj.netsummin_r0_20) 
                        +" netsummin_r0_40:"+_f(klj.netsummin_r0_40) 
                        +" <br>"
                        +" netsummin_r0x_5:"+_f(klj.netsummin_r0x_5) 
                        +" netsummin_r0x_10:"+_f(klj.netsummin_r0x_10)
                        +" netsummin_r0x_20:"+_f(klj.netsummin_r0x_20) 
                        +" netsummin_r0x_40:"+_f(klj.netsummin_r0x_40) 
                        +" <br>"//+" <br>"
                        +"</font>"
                        +" netsum_r0_above:"+_f(klj.netsum_r0_above) 
                        +" netsum_r0_below:"+_f(klj.netsum_r0_below)
                        //+" <br>"
                        +" netsum_r0_above_60:"+_f(klj.netsum_r0_above_60)
                        +" netsum_r0_below_60:"+_f(klj.netsum_r0_below_60)
                        +" <br><b>"
                        +" netsummax_r0:"+_f(klj.netsummax_r0) +" ("+(klj.netsummax_r0/klj.amount_ave_8).toFixed(2)+")"
                        //+" <br>"
                        +"+ netsummax_r0_netsum_r0x:"+_f(klj.netsummax_r0_netsum_r0x)
                        +" = "+_f((klj.netsummax_r0+klj.netsummax_r0_netsum_r0x)) 
                        +" ("+((klj.netsummax_r0+klj.netsummax_r0_netsum_r0x)/klj.amount_ave_8).toFixed(2)+")"
                        +" <br>" 
                        + klj.close+" "+supportArr.toString()
                        +" <br>" 
                        +"marketCap: "+(klj.marketCap/100000000).toFixed(2)
                        +"</b> <br>"
                        +"<img src=\"http://image.sinajs.cn/newchart/daily/n/"
                        +stockId.toLowerCase()+".gif\" width=\"400\" height=\"250\"><br>"             

    }
});
// emailbody="";
console.log("win:", wincounter, (wincounter/counter).toFixed(2), "lose:", losecounter, (losecounter/counter).toFixed(2), "counter:", counter);
if (emailbody!=="") {
//console.log(emailbody);
        mailutil.sendEmail("Flow", "Total:"+counter+"<br>"+emailbody);
}
console.timeEnd("run");


function getSpports(klineJson, idx, range, unit){
    var priceMap = {};
    var priceArr = [];
    var klj = klineJson[idx];
    var ceil = klj.close;
    var floor=klj.close*(1-range);
    var x = Math.ceil(100*klj.close*unit)/100;

    // console.log("x", x, klj.close)
    var fun = function(price) {
        if (price>ceil || price<floor) return;
        if (priceMap[price]) {
            priceMap[price]++;
        } else {
            priceMap[price] = 1;
            priceArr.push(price);
        }
    }

    for (var j=idx; j>=1 && idx-j<100; j--) {
        var _klj = klineJson[j];
        fun(_klj.close);
        if (_klj.low !== _klj.high) {
            fun(_klj.open);
            fun(_klj.low);
            fun(_klj.high);
        }
    }

    var priceMapNew = {};
    var priceArrNew = [];

    for (var k = ceil; k>=floor+x; k-=0.01) {
        var rangesum = 0;
        k = Math.floor(k*100)/100;
        for (var m = k; m>k-x; m-=0.01) {
            m = Math.floor(m*100)/100;           
            if (priceMap[m]) rangesum += priceMap[m];
        }
        priceMapNew[k] = rangesum;

        var len = priceArrNew.length;
        if (len>0 ) {
            var pre = priceArrNew[len-1];
            if (pre-k<x/2) {
                if (priceMapNew[pre] <= priceMapNew[k]) {
                    priceArrNew.pop();
                    priceArrNew.push(k);
                } 
            } else {
                priceArrNew.push(k);
            }
        } else {
           priceArrNew.push(k); 
        }

        
        

    }

    priceArrNew.sort(function(p1, p2){
        if (priceMapNew[p1] > priceMapNew[p2]) return -1;
        else if(priceMapNew[p1] < priceMapNew[p2]) return 1;
        return 0;
    })
    

    // console.log("priceArr", priceArrNew.toString())
    // console.log("priceMap", JSON.stringify(priceMapNew));
    
    var supportArr = priceArrNew.slice(0,5);

    supportArr.sort(function(p1, p2) {
        var d1 = klj.close-p1;
        var d2 = klj.close-p2;
        if(d1>d2) return 1;
        else if (d1<d2) return -1;
        return 0;
    })
    for (var s=0;s<supportArr.length;s++) {
        var p = supportArr[s];
        supportArr[s] = priceMapNew[p]+"@"+p;
        // console.log(p, priceMapNew[p])
    }
    
    return supportArr;
}