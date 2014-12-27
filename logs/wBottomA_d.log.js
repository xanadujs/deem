
function wBottomA_d_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsum_r0_below>0.04*obj.amount_ave_21)//3 0.804 9167/22193
&& obj.amount_ave_21<1*obj.amount_ave_8//0 0.771 15478/32208
&& obj.amount_ave_21<1.5*obj.amount//0 0.732 36933/64017
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.690 72197/107154
 && function(m, n) {
            var rightBottom = klineutil.lowIndexOfUpTrend(klineJson, i);
            var middleTop = klineutil.highIndexOfDownTrend(klineJson, rightBottom);
            var leftBottom = klineutil.lowIndexOfUpTrend(klineJson, middleTop);

            var outerHigh = klineutil.highItem(klineJson, leftBottom - m, leftBottom, "high");
            return  klineutil.increase(klineJson[leftBottom].high, outerHigh) > n
        }(30,0.25)
}
exports.wBottomA_d_0 = wBottomA_d_0//Tue Dec 02 2014 22:42:26 GMT+0800 (中国标准时间)

function wBottomA_d_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//128 0.800 9476/22312
&& !(obj.netsum_r0_below>0.0*obj.amount_ave_21)//16 0.797 9881/23375
&& !(obj.netsum_r0_below_60>0.0*obj.amount_ave_21)//7 0.784 12057/26675
&& obj.turnover_ave_8>obj.turnover_ave_21//1 0.765 16762/34443
&& obj.amount_ave_21<1.5*obj.amount//0 0.732 36933/64017
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.690 72197/107154
 && function(m, n) {
            var rightBottom = klineutil.lowIndexOfUpTrend(klineJson, i);
            var middleTop = klineutil.highIndexOfDownTrend(klineJson, rightBottom);
            var leftBottom = klineutil.lowIndexOfUpTrend(klineJson, middleTop);

            var outerHigh = klineutil.highItem(klineJson, leftBottom - m, leftBottom, "high");
            return  klineutil.increase(klineJson[leftBottom].high, outerHigh) > n
        }(30,0.25)
}
exports.wBottomA_d_0 = wBottomA_d_0//Tue Dec 02 2014 22:48:12 GMT+0800 (中国标准时间)

function wBottomA_d_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsum_r0_below>0.04*obj.amount_ave_21)//3 0.808 7213/18144
&& obj.netsummax_r0_5===obj.netsummax_r0_10//29 0.783 10081/23266
&& obj.amount_ave_21<1*obj.amount_ave_8//0 0.768 14241/29570
&& obj.amount_ave_21<1.5*obj.amount//0 0.729 33609/58405
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.690 72197/107154
 && function(m, n) {
            var rightBottom = klineutil.lowIndexOfUpTrend(klineJson, i);
            var middleTop = klineutil.highIndexOfDownTrend(klineJson, rightBottom);
            var leftBottom = klineutil.lowIndexOfUpTrend(klineJson, middleTop);

            var outerHigh = klineutil.highItem(klineJson, leftBottom - m, leftBottom, "high");
            return  klineutil.increase(klineJson[leftBottom].high, outerHigh) > n
        }(30,0.25)
}
exports.wBottomA_d_0 = wBottomA_d_0//Wed Dec 03 2014 06:36:28 GMT+0800 (中国标准时间)

function wBottomA_d_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsum_r0_below>0.04*obj.amount_ave_21)//9 0.806 7862/19213
&& !(obj.netsum_r0_below_60>0.03*obj.amount_ave_21)//13 0.794 9076/21203
&& obj.close_ave_8<obj.close_ave_144//43 0.779 11832/26210
&& obj.amount_ave_21<1*obj.amount_ave_8//0 0.768 14241/29570
&& obj.amount_ave_21<1.5*obj.amount//0 0.729 33609/58405
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.690 72197/107154
 && function(m, n) {
            var rightBottom = klineutil.lowIndexOfUpTrend(klineJson, i);
            var middleTop = klineutil.highIndexOfDownTrend(klineJson, rightBottom);
            var leftBottom = klineutil.lowIndexOfUpTrend(klineJson, middleTop);

            var outerHigh = klineutil.highItem(klineJson, leftBottom - m, leftBottom, "high");
            return  klineutil.increase(klineJson[leftBottom].high, outerHigh) > n
        }(30,0.25)
}
exports.wBottomA_d_0 = wBottomA_d_0//Wed Dec 03 2014 06:40:10 GMT+0800 (中国标准时间)

function wBottomA_d_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsum_r0_below>0.04*obj.amount_ave_21)//8 0.805 7923/19337
&& !(obj.netsum_r0_below_60>0.05*obj.amount_ave_21)//15 0.793 9259/21572
&& obj.close_ave_8<obj.close_ave_144//43 0.779 11832/26210
&& obj.amount_ave_21<1*obj.amount_ave_8//0 0.768 14241/29570
&& obj.amount_ave_21<1.5*obj.amount//0 0.729 33609/58405
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.690 72197/107154
 && function(m, n) {
            var rightBottom = klineutil.lowIndexOfUpTrend(klineJson, i);
            var middleTop = klineutil.highIndexOfDownTrend(klineJson, rightBottom);
            var leftBottom = klineutil.lowIndexOfUpTrend(klineJson, middleTop);

            var outerHigh = klineutil.highItem(klineJson, leftBottom - m, leftBottom, "high");
            return  klineutil.increase(klineJson[leftBottom].high, outerHigh) > n
        }(30,0.25)
}
exports.wBottomA_d_0 = wBottomA_d_0//Wed Dec 03 2014 06:40:57 GMT+0800 (中国标准时间)

function wBottomA_d_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//130 0.800 9053/21236
&& !(obj.netsum_r0_below>0.0*obj.amount_ave_21)//24 0.797 9401/22176
&& !(obj.netsum_r0_below_60>0.0*obj.amount_ave_21)//25 0.786 10908/24698
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.5*obj.amount_ave_21//31 0.773 14464/31233
&& obj.close_ave_8<obj.close_ave_233//13 0.760 19559/40442
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//14 0.745 25605/49804
&& obj.amount_ave_21<1.5*obj.amount//0 0.729 33609/58405
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.690 72197/107154
 && function(m, n) {
            var rightBottom = klineutil.lowIndexOfUpTrend(klineJson, i);
            var middleTop = klineutil.highIndexOfDownTrend(klineJson, rightBottom);
            var leftBottom = klineutil.lowIndexOfUpTrend(klineJson, middleTop);

            var outerHigh = klineutil.highItem(klineJson, leftBottom - m, leftBottom, "high");
            return  klineutil.increase(klineJson[leftBottom].high, outerHigh) > n
        }(30,0.25)
}
exports.wBottomA_d_0 = wBottomA_d_0//Wed Dec 03 2014 17:53:07 GMT+0800 (中国标准时间)

function wBottomA_d_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//130 0.800 9097/21328
&& !(obj.netsum_r0_below>0.02*obj.amount_ave_21)//25 0.797 9446/22272
&& !(obj.netsum_r0_below_60>0.0*obj.amount_ave_21)//25 0.786 10908/24698
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.5*obj.amount_ave_21//31 0.773 14464/31233
&& obj.close_ave_8<obj.close_ave_233//13 0.760 19559/40442
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//14 0.745 25605/49804
&& obj.amount_ave_21<1.5*obj.amount//0 0.729 33609/58405
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.690 72197/107154
 && function(m, n) {
            var rightBottom = klineutil.lowIndexOfUpTrend(klineJson, i);
            var middleTop = klineutil.highIndexOfDownTrend(klineJson, rightBottom);
            var leftBottom = klineutil.lowIndexOfUpTrend(klineJson, middleTop);

            var outerHigh = klineutil.highItem(klineJson, leftBottom - m, leftBottom, "high");
            return  klineutil.increase(klineJson[leftBottom].high, outerHigh) > n
        }(30,0.25)
}
exports.wBottomA_d_0 = wBottomA_d_0//Wed Dec 03 2014 17:53:49 GMT+0800 (中国标准时间)

function wBottomA_d_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsum_r0_below>0.04*obj.amount_ave_21)//3 0.804 9167/22193
&& obj.amount_ave_21<1*obj.amount_ave_8//0 0.771 15478/32208
&& obj.amount_ave_21<1.5*obj.amount//0 0.732 36933/64017
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.690 72197/107154
 && function(m, n) {
            var rightBottom = klineutil.lowIndexOfUpTrend(klineJson, i);
            var middleTop = klineutil.highIndexOfDownTrend(klineJson, rightBottom);
            var leftBottom = klineutil.lowIndexOfUpTrend(klineJson, middleTop);

            var outerHigh = klineutil.highItem(klineJson, leftBottom - m, leftBottom, "high");
            return  klineutil.increase(klineJson[leftBottom].high, outerHigh) > n
        }(30,0.25)
}
exports.wBottomA_d_0 = wBottomA_d_0//Wed Dec 03 2014 21:34:15 GMT+0800 (中国标准时间)

function wBottomA_d_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//128 0.800 9476/22311
&& !(obj.netsum_r0_below>0.0*obj.amount_ave_21)//16 0.797 9881/23374
&& !(obj.netsum_r0_below_60>0.0*obj.amount_ave_21)//7 0.784 12057/26675
&& obj.turnover_ave_8>obj.turnover_ave_21//1 0.765 16762/34443
&& obj.amount_ave_21<1.5*obj.amount//0 0.732 36933/64017
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.690 72197/107154
 && function(m, n) {
            var rightBottom = klineutil.lowIndexOfUpTrend(klineJson, i);
            var middleTop = klineutil.highIndexOfDownTrend(klineJson, rightBottom);
            var leftBottom = klineutil.lowIndexOfUpTrend(klineJson, middleTop);

            var outerHigh = klineutil.highItem(klineJson, leftBottom - m, leftBottom, "high");
            return  klineutil.increase(klineJson[leftBottom].high, outerHigh) > n
        }(30,0.25)
}
exports.wBottomA_d_0 = wBottomA_d_0//Wed Dec 03 2014 21:40:14 GMT+0800 (中国标准时间)
