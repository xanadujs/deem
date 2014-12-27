var klineutil = require("./kline/klineutil");


function sidewaysCompression_1 (klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    /**/return !function(m, n, k) {
        var hidx = klineutil.highItemIndex(klineJson, i-m, i-1, "close");
        var hval = klineJson[hidx].close;
        
        var lidx = klineutil.lowItemIndex(klineJson, hidx, i, "close");
        var lval = klineJson[lidx].close;

        var plidx = klineutil.lowItemIndex(klineJson, hidx-n, hidx, "close");
        var plval = klineJson[plidx].close;

        var downhpl = klineutil.increase(plval, hval);    
        var downhl = klineutil.increase(lval, hval);
    
        return downhpl>k*downhl;;
    }(30,40,0.6)
}
exports.sidewaysCompression_1 = sidewaysCompression_1;

function morningStarB_1(klineJson, i) {

    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    /**/return function(m, n, k){
            var midhigh = Math.max(klineJson[i-1].open, klineJson[i-1].close);
            var lower = klineutil.lowerItemsIndex(klineJson, i-m, i-2, "low", klineJson[i-2].high);

            return klineutil.increase(midhigh, klineJson[i-2].close) > -klineJson[i].amplitude_ave_8*n
                && lower.length<k
        }(75, 10, 22)
}
exports.morningStarB_1 = morningStarB_1;

function morningStarA_1(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    /**/return function (m, n, k){
            var lower = klineutil.lowerItemsIndex(klineJson, i-k, i-3, "close", klineJson[i].close);
             return i - lower[0]>m && i - lower[0] < n
        }(4, 23, 45)

}
exports.morningStarA_1= morningStarA_1;

function sh600716_201410_1 (klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    /**/return function(a, b, c, d, e){
            // return true;
            var highidx = klineutil.highItemIndex(klineJson, i-a, i, "close");
            if (klineutil.increase(obj.close, klineJson[highidx].close) < b*klineJson[highidx].amplitude_ave_21) 
                return false;
            if (obj.amount_ave_21 > c*klineJson[highidx].amount_ave_21)
                return false;

            var lowerItems = klineutil.lowerItemsIndex(klineJson, highidx-d, highidx, "close", obj.close);
            var fstlowidx = lowerItems.length === 0 ? Math.max(0, highidx-d) : lowerItems[lowerItems.length-1];
            var r0sum = 0, r0xsum = 0;
            for (var j=fstlowidx; j<=i; j++) {
                r0sum += klineJson[j].r0_net;
                r0xsum += (klineJson[j].netamount-klineJson[j].r0_net);
            }
            return r0sum> e*obj.amount_ave_21
        }(50, 5, 1, 120, 0.3)
 }
exports.sh600716_201410_1 = sh600716_201410_1;

function headShoulderBottom_2(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    /**/return function(a, b, c, n) {
            var rightBottom = klineutil.lowIndexOfUpTrend(klineJson, i);
            var rightTop = klineutil.highIndexOfDownTrend(klineJson, rightBottom);
            var middleBottom = klineutil.lowIndexOfUpTrend(klineJson, rightTop);

            var leftTop = klineutil.highIndexOfDownTrend(klineJson, middleBottom);
            var leftBottom = klineutil.lowIndexOfUpTrend(klineJson, leftTop);
            var outerHigh = klineutil.highItem(klineJson, leftBottom - n, leftBottom, "low");

            return klineutil.increase(klineJson[middleBottom].low, klineJson[rightBottom].low) <= a*obj.amplitude_ave_8
                && klineutil.increase(klineJson[leftBottom].high, klineJson[rightTop].high) > b * obj.amplitude_ave_8
                && klineutil.increase(klineJson[leftTop].high, outerHigh) > c * obj.amplitude_ave_8
        } (113, -110.2, 5, 30)
}
exports.headShoulderBottom_2= headShoulderBottom_2;

function headShoulderBottom_a(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    /**/return  function(a, b, c, n) {
            var rightBottom = klineutil.lowIndexOfUpTrend(klineJson, i);
            var rightTop = klineutil.highIndexOfDownTrend(klineJson, rightBottom);
            var middleBottom = klineutil.lowIndexOfUpTrend(klineJson, rightTop);

            var leftTop = klineutil.highIndexOfDownTrend(klineJson, middleBottom);
            var leftBottom = klineutil.lowIndexOfUpTrend(klineJson, leftTop);
            var outerHigh = klineutil.highItem(klineJson, leftBottom - n, leftBottom, "low");

            return klineutil.increase(klineJson[middleBottom].low, klineJson[rightBottom].low) <= a*obj.amplitude_ave_8
                && klineutil.increase(klineJson[leftBottom].high, klineJson[rightTop].high) > b * obj.amplitude_ave_8
                && klineutil.increase(klineJson[leftTop].high, outerHigh) > c * obj.amplitude_ave_8
        } (3, -0.2, 6, 30)

}

exports.headShoulderBottom_a = headShoulderBottom_a;

function wBottom_i(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    /**/return function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,5, -0.3, 0.25) 

}
exports.wBottom_i = wBottom_i;

function wBottom_h(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    /**/return function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,5, -0.3, 0.25) 
}
exports.wBottom_h = wBottom_h;

function wBottom_g(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    /**/return function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return true
            // klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (25,10, -1.25,0.18) 

}
exports.wBottom_g = wBottom_g;

function wBottom_f(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    /**/return function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,5, -0.3, 0.2) 
}
exports.wBottom_f = wBottom_f;

function wBottom_e(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    /**/return function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,5, -0.3, 0.25) 
}
exports.wBottom_e = wBottom_e;

function wBottom_d(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    /**/return function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,10, -1.25, 0.25) 
}
exports.wBottom_d = wBottom_d;


function wBottom_c(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    /**/return function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,10, -1.25, 0.2) 
}
exports.wBottom_c = wBottom_c;

function wBottom_b(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    /**/return function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,10, -1.25, 0.2) 
}
exports.wBottom_b = wBottom_b;

function wBottom_a(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    /**/return function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (25,10, -1.25,0.18) 
}
exports.wBottom_a = wBottom_a;

function wBottomA_g(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    /**/return function(m, n) {
            var rightBottom = klineutil.lowIndexOfUpTrend(klineJson, i);
            var middleTop = klineutil.highIndexOfDownTrend(klineJson, rightBottom);
            var leftBottom = klineutil.lowIndexOfUpTrend(klineJson, middleTop);

            var outerHigh = klineutil.highItem(klineJson, leftBottom - m, leftBottom, "high");
            return klineutil.increase(klineJson[leftBottom].low, klineJson[rightBottom].low) > 0.2 * klineJson[i].amplitude_ave_21
                && klineutil.increase(klineJson[leftBottom].high, outerHigh) > n
        }(30,0.34)
}
exports.wBottomA_g = wBottomA_g

function wBottomA_f(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    /**/return function(m, n) {
            var rightBottom = klineutil.lowIndexOfUpTrend(klineJson, i);
            var middleTop = klineutil.highIndexOfDownTrend(klineJson, rightBottom);
            var leftBottom = klineutil.lowIndexOfUpTrend(klineJson, middleTop);

            var outerHigh = klineutil.highItem(klineJson, leftBottom - m, leftBottom, "high");
            return klineutil.increase(klineJson[leftBottom].low, klineJson[rightBottom].low) > 0.2 * klineJson[i].amplitude_ave_21
                && klineutil.increase(klineJson[leftBottom].high, outerHigh) > n
        }(30,0.3)
}
exports.wBottomA_f = wBottomA_f;

function wBottomA_e(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    /**/return function(m, n) {
            var rightBottom = klineutil.lowIndexOfUpTrend(klineJson, i);
            var middleTop = klineutil.highIndexOfDownTrend(klineJson, rightBottom);
            var leftBottom = klineutil.lowIndexOfUpTrend(klineJson, middleTop);

            var outerHigh = klineutil.highItem(klineJson, leftBottom - m, leftBottom, "high");
            return klineutil.increase(klineJson[leftBottom].high, outerHigh) > n* klineJson[leftBottom].amplitude_ave_21
        }(25,6)
}
exports.wBottomA_e = wBottomA_e;

function wBottomA_d(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    /**/return function(m, n) {
            var rightBottom = klineutil.lowIndexOfUpTrend(klineJson, i);
            var middleTop = klineutil.highIndexOfDownTrend(klineJson, rightBottom);
            var leftBottom = klineutil.lowIndexOfUpTrend(klineJson, middleTop);

            var outerHigh = klineutil.highItem(klineJson, leftBottom - m, leftBottom, "high");
            return  klineutil.increase(klineJson[leftBottom].high, outerHigh) > n
        }(30,0.25)
}
exports.wBottomA_d = wBottomA_d;

function wBottomA_c(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    /**/return function(m, n) {
            var rightBottom = klineutil.lowIndexOfUpTrend(klineJson, i);
            var middleTop = klineutil.highIndexOfDownTrend(klineJson, rightBottom);
            var leftBottom = klineutil.lowIndexOfUpTrend(klineJson, middleTop);

            var outerHigh = klineutil.highItem(klineJson, leftBottom - m, leftBottom, "high");
            return klineutil.increase(klineJson[leftBottom].high, outerHigh) > n
                && klineutil.increase(klineJson[leftBottom].low, klineJson[rightBottom].low) > -0.8 * klineJson[i].amplitude_ave_21
        }(30,0.32)
}
exports.wBottomA_c = wBottomA_c;

function wBottomA_b(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    /**/return function(m, n) {
            var rightBottom = klineutil.lowIndexOfUpTrend(klineJson, i);
            var middleTop = klineutil.highIndexOfDownTrend(klineJson, rightBottom);
            var leftBottom = klineutil.lowIndexOfUpTrend(klineJson, middleTop);

            var outerHigh = klineutil.highItem(klineJson, leftBottom - m, leftBottom, "high");
            return klineutil.increase(klineJson[leftBottom].high, outerHigh) > n
        }(40,0.3)
}
exports.wBottomA_b = wBottomA_b;

function wBottomA_a(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    /**/return function(m, n) {
            var rightBottom = klineutil.lowIndexOfUpTrend(klineJson, i);
            var middleTop = klineutil.highIndexOfDownTrend(klineJson, rightBottom);
            var leftBottom = klineutil.lowIndexOfUpTrend(klineJson, middleTop);

            var outerHigh = klineutil.highItem(klineJson, leftBottom - m, leftBottom, "high");
            return klineutil.increase(klineJson[leftBottom].low, klineJson[rightBottom].low) > 0.2 * klineJson[i].amplitude_ave_21
                && klineutil.increase(klineJson[leftBottom].high, outerHigh) > n
        }(30,0.3)
}

function sh600716_201410_a (klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return function(a, b, c, d, e){
            // return true;
            var highidx = klineutil.highItemIndex(klineJson, i-a, i, "close");
            if (klineutil.increase(obj.close, klineJson[highidx].close) < b*klineJson[highidx].amplitude_ave_21) 
                return false;
            if (obj.amount_ave_21 > c*klineJson[highidx].amount_ave_21)
                return false;

            var lowerItems = klineutil.lowerItemsIndex(klineJson, highidx-d, highidx, "close", obj.close);
            var fstlowidx = lowerItems.length === 0 ? Math.max(0, highidx-d) : lowerItems[lowerItems.length-1];
            var r0sum = 0, r0xsum = 0;
            for (var j=fstlowidx; j<=i; j++) {
                r0sum += klineJson[j].r0_net;
                r0xsum += (klineJson[j].netamount-klineJson[j].r0_net);
            }

            return r0sum> e*obj.amount_ave_21
                
        }(50, 5, 1, 120, 0.3)
 }   
exports.wBottomA_a = wBottomA_a;