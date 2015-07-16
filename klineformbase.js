var klineutil = require("./kline/klineutil");

function sz002424_201401_1(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    /**/return function(a, b, c, d, e, f, g) {
            //return true;
            var n = i;
            for (; i-n<a; n--) {
                if (klineutil.increase(klineJson[i].amount_ave_8, klineJson[n].amount_ave_8)>b)
                    break;
            }

            if (i-n>=a) return false;

            var lidx = klineutil.lowItemIndex(klineJson, n-c, i, "close");
            var hidx = klineutil.highItemIndex(klineJson, n-d, n, "close");
            var re = true
                && n-lidx<e
                && klineutil.increase(klineJson[i].close, klineJson[n].close)>f*0.03//klineJson[i].amplitude_ave_8
                && klineutil.increase(klineJson[n].close, klineJson[hidx].close)>g*0.03//klineJson[n].amplitude_ave_8
               
            return re;
        }(60, 0.5, 30, 60, 10, 2.5, 0)
 }
exports.sz002424_201401_1 = sz002424_201401_1;

function bullPulsing_1(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    /**/return function(a, b, c, d, e, f) {
            // return true
            var n=i;
            var biginc = 0;
            for (; n>1; n--) {
                var inc_ave = klineJson[n].inc_ave_21;
                if (klineutil.increase(klineJson[n].open, klineJson[n].close) > 0.01*a//inc_ave*a
                    ) {
                    biginc = klineutil.increase(klineJson[n].open, klineJson[n].close);
                    break;
                } 
            }
            for (var j=n+1; j<=i; j++) {
                var inc_ave = klineJson[n-1].inc_ave_8;
                if (klineutil.increase(klineJson[n].close, klineJson[j].close) < b*inc_ave
                    )
                    return false;
            }

            var lowerItems = klineutil.lowerItemsIndex(klineJson, n-c, n, "close", klineJson[n].open);
            var higherItems = klineutil.higherItemsIndex(klineJson, n-d, n, "low", klineJson[n].close);
            return n-lowerItems[0] <e //&& n-higherItems[higherItems.length-1] > f;
        }(2, -0.8, 65, 20, 50, 5) //(1.5, -1.5, 65, 20, 50, 5)
        
}
exports.bullPulsing_1 = bullPulsing_1;

function smallRedsAndGreensA_1(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    /**/return function(a, b, c, d, e, f, g, h) {
       //     return true
        var n=i;
        for (; n>1; n--) {
            var inc_ave = klineJson[n].inc_ave_21;
            if (Math.abs(klineutil.increase(klineJson[n].open, klineJson[n].close)) > inc_ave*a) {
                break;
            } 
        }

        return true
            && i-n>= b
            //&& klineutil.increase(klineJson[i-c].close_ave_8, klineJson[i].close_ave_8) > d//-klineJson[i].inc_ave_8*0.8
            && function () {    
            var lowerItems = klineutil.lowerItemsIndex(klineJson, i-e, i, "high", klineJson[i].low);
            var lidx = klineutil.lowItem(klineJson, i-f, i, "low");
            return true
                && i-lowerItems[0] <g 
                && klineutil.increase(lidx, klineJson[i].close) > klineJson[i].inc_ave_8*h
        }()
    }(3, 5, 4, 0, 80, 100, 40, 4)
}
exports.smallRedsAndGreensA_1 = smallRedsAndGreensA_1;

function lowRedsB_1(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;
    
    /**/return function (a, b, c) {    
            var higherItems = klineutil.higherItemsIndex(klineJson, i-a, i, "low", klineJson[i].high);
            return i-higherItems[higherItems.length-1] > b && higherItems.length>c;
        }(55, 10, 20)
}
exports.lowRedsB_1 = lowRedsB_1;

function flatBottom_1(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    /**/return function (a, b, c, d, e) {
        var td = i-a;
        var inc_ave = klineJson[i].inc_ave_8;
        var hidx = klineutil.highItemIndex(klineJson, td-b, td, "close");
        var higherItems = klineutil.higherItemsIndex(klineJson, td-c, i, "close", klineJson[i].close);
        
        return klineutil.increase(klineJson[i].close, klineJson[hidx].close) > inc_ave*d
            && higherItems.length<e;
    
    }(1,40,13,6,7)

}
exports.flatBottom_1 = flatBottom_1;

function hammer_1(klineJson, i) {
     var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    /**/return function(a, b, c, d) {

            var linehigh = klineJson[i].high - Math.max(klineJson[i].close, klineJson[i].open);
            var linelow = Math.min(klineJson[i].close, klineJson[i].open) - klineJson[i].low;
            var entity = Math.abs(klineJson[i].close - klineJson[i].open);
            var inc_ave = klineJson[i].inc_ave_8;
            var hidx = klineutil.highItemIndex(klineJson, i-a, i, "close");
            var higherItems = klineutil.higherItemsIndex(klineJson, i-b, i, "close", klineJson[i].low);
            
            return higherItems.length<c
                        && klineutil.increase(klineJson[i].open, klineJson[hidx].close) > d * klineJson[i].amplitude_ave_8
            
        }(55, 12, 11, 4)
}
exports.hammer_1 = hammer_1;

function reversedHammer_1(klineJson, i) {
     var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    /**/return function(a, b, c, d, e) {
                var hidx = klineutil.highItemIndex(klineJson, i-a, i, "close");
                var higherItems = klineutil.higherItemsIndex(klineJson, i-b, i, "close", klineJson[i].low);
                return true
                    && higherItems.length>c 
                    && higherItems.length<d
                    && klineutil.increase(klineJson[i].high, klineJson[hidx].close) > e
            }(55, 20, 0, 15, 5*klineJson[i].amplitude_ave_8)

}
exports.reversedHammer_1 = reversedHammer_1;

function greenInRed_1 (klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    /**/return function(a, b, c, d, e){
            var lowerItems = klineutil.lowerItemsIndex(klineJson, i-a, i, "close", klineJson[i].low);
            return  klineutil.increase(klineJson[i].open, klineJson[i].close) > d//0.5*obj.amplitude_ave_8 //d
                && klineutil.increase(klineJson[i-1].open, klineJson[i-1].close) < e
                && lowerItems.length > b && lowerItems.length < c;
        }(120, 0, 45, 0.02, 0)

}
exports.greenInRed_1 = greenInRed_1;

function redNGreenRed_1 (klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    /**/return function(a, b, c, d, e){
            var top = klineutil.highIndexOfDownTrend(klineJson, i-1);            
            
            if (klineutil.increase(klineJson[top].high, obj.close) > -obj.amplitude_ave_8 * a //-inc_ave*3.5 
                && klineutil.increase(klineJson[top].high, obj.close) <  obj.amplitude_ave_8*b) {
                var lowerItems = klineutil.lowerItemsIndex(klineJson, top-c, top-1, "low", klineJson[top-1].high);
                return lowerItems.length >d && lowerItems.length <e;
            }
             return false;
        } (2, 1, 120, 6, 27) 
}
exports.redNGreenRed_1 = redNGreenRed_1;

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

/********************************************************************/
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