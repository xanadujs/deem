
function wBottomA_a_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.amount_ave_21<1.5*obj.amount_ave_8//0.810 18123/18123
&& !(obj.netsum_r0_below>0.0*obj.amount_ave_21)//0.794 19771/19771
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0.753 32123/32123
 && function(m, n) {
            var rightBottom = klineutil.lowIndexOfUpTrend(klineJson, i);
            var middleTop = klineutil.highIndexOfDownTrend(klineJson, rightBottom);
            var leftBottom = klineutil.lowIndexOfUpTrend(klineJson, middleTop);

            var outerHigh = klineutil.highItem(klineJson, leftBottom - m, leftBottom, "high");
            return klineutil.increase(klineJson[leftBottom].low, klineJson[rightBottom].low) > 0.2 * klineJson[i].amplitude_ave_21
                && klineutil.increase(klineJson[leftBottom].high, outerHigh) > n
        }(30,0.3)
}
exports.wBottomA_a_0 = wBottomA_a_0//Sun Nov 30 2014 01:43:31 GMT+0800 (中国标准时间)

function wBottomA_a_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.amount_ave_21<1.5*obj.amount_ave_8//0.808 18593/18593
&& !(obj.netsum_r0_below>0.02*obj.amount_ave_21)//0.791 20315/20315
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0.753 32123/32123
 && function(m, n) {
            var rightBottom = klineutil.lowIndexOfUpTrend(klineJson, i);
            var middleTop = klineutil.highIndexOfDownTrend(klineJson, rightBottom);
            var leftBottom = klineutil.lowIndexOfUpTrend(klineJson, middleTop);

            var outerHigh = klineutil.highItem(klineJson, leftBottom - m, leftBottom, "high");
            return klineutil.increase(klineJson[leftBottom].low, klineJson[rightBottom].low) > 0.2 * klineJson[i].amplitude_ave_21
                && klineutil.increase(klineJson[leftBottom].high, outerHigh) > n
        }(30,0.3)
}
exports.wBottomA_a_0 = wBottomA_a_0//Sun Nov 30 2014 01:44:13 GMT+0800 (中国标准时间)

function wBottomA_a_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.amount_ave_21<1.5*obj.amount_ave_8//0.804 19028/19028
&& !(obj.netsum_r0_below>0.04*obj.amount_ave_21)//0.788 20811/20811
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0.753 32123/32123
 && function(m, n) {
            var rightBottom = klineutil.lowIndexOfUpTrend(klineJson, i);
            var middleTop = klineutil.highIndexOfDownTrend(klineJson, rightBottom);
            var leftBottom = klineutil.lowIndexOfUpTrend(klineJson, middleTop);

            var outerHigh = klineutil.highItem(klineJson, leftBottom - m, leftBottom, "high");
            return klineutil.increase(klineJson[leftBottom].low, klineJson[rightBottom].low) > 0.2 * klineJson[i].amplitude_ave_21
                && klineutil.increase(klineJson[leftBottom].high, outerHigh) > n
        }(30,0.3)
}
exports.wBottomA_a_0 = wBottomA_a_0//Sun Nov 30 2014 01:44:58 GMT+0800 (中国标准时间)

function wBottomA_a_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.turnover_ave_8>0.8*obj.turnover_ave_21//0.808 19467/19467
&& obj.netsum_r0_above>obj.netsum_r0_below*6//0.783 23829/23829
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0.753 32123/32123
 && function(m, n) {
            var rightBottom = klineutil.lowIndexOfUpTrend(klineJson, i);
            var middleTop = klineutil.highIndexOfDownTrend(klineJson, rightBottom);
            var leftBottom = klineutil.lowIndexOfUpTrend(klineJson, middleTop);

            var outerHigh = klineutil.highItem(klineJson, leftBottom - m, leftBottom, "high");
            return klineutil.increase(klineJson[leftBottom].low, klineJson[rightBottom].low) > 0.2 * klineJson[i].amplitude_ave_21
                && klineutil.increase(klineJson[leftBottom].high, outerHigh) > n
        }(30,0.3)
}
exports.wBottomA_a_0 = wBottomA_a_0//Sun Nov 30 2014 01:45:44 GMT+0800 (中国标准时间)

function wBottomA_a_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.turnover_ave_8>0.8*obj.turnover_ave_21//0.805 19722/19722
&& obj.netsum_r0_above>obj.netsum_r0_below*5//0.781 24179/24179
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0.753 32123/32123
 && function(m, n) {
            var rightBottom = klineutil.lowIndexOfUpTrend(klineJson, i);
            var middleTop = klineutil.highIndexOfDownTrend(klineJson, rightBottom);
            var leftBottom = klineutil.lowIndexOfUpTrend(klineJson, middleTop);

            var outerHigh = klineutil.highItem(klineJson, leftBottom - m, leftBottom, "high");
            return klineutil.increase(klineJson[leftBottom].low, klineJson[rightBottom].low) > 0.2 * klineJson[i].amplitude_ave_21
                && klineutil.increase(klineJson[leftBottom].high, outerHigh) > n
        }(30,0.3)
}
exports.wBottomA_a_0 = wBottomA_a_0//Sun Nov 30 2014 08:12:27 GMT+0800 (中国标准时间)

function wBottomA_a_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.turnover_ave_8>0.8*obj.turnover_ave_21//0.804 20059/20059
&& obj.netsum_r0_above>obj.netsum_r0_below*4//0.779 24612/24612
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0.753 32123/32123
 && function(m, n) {
            var rightBottom = klineutil.lowIndexOfUpTrend(klineJson, i);
            var middleTop = klineutil.highIndexOfDownTrend(klineJson, rightBottom);
            var leftBottom = klineutil.lowIndexOfUpTrend(klineJson, middleTop);

            var outerHigh = klineutil.highItem(klineJson, leftBottom - m, leftBottom, "high");
            return klineutil.increase(klineJson[leftBottom].low, klineJson[rightBottom].low) > 0.2 * klineJson[i].amplitude_ave_21
                && klineutil.increase(klineJson[leftBottom].high, outerHigh) > n
        }(30,0.3)
}
exports.wBottomA_a_0 = wBottomA_a_0//Sun Nov 30 2014 08:13:42 GMT+0800 (中国标准时间)

function wBottomA_b_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.netsum_r0_below>-0.02*obj.amount_ave_21//0.800 16818/24936
&& obj.netsummax_r0_5===obj.netsummax_r0_10//0.797 17481/26096
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0.784 21856/32383
&& !(obj.netsummin_r0_20<-0*obj.amount_ave_21)//0.762 30210/40737
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0.701 78249/98309
 && function(m, n) {
            var rightBottom = klineutil.lowIndexOfUpTrend(klineJson, i);
            var middleTop = klineutil.highIndexOfDownTrend(klineJson, rightBottom);
            var leftBottom = klineutil.lowIndexOfUpTrend(klineJson, middleTop);

            var outerHigh = klineutil.highItem(klineJson, leftBottom - m, leftBottom, "high");
            return klineutil.increase(klineJson[leftBottom].high, outerHigh) > n
        }(40,0.3)
}
exports.wBottomA_b_0 = wBottomA_b_0//Sun Nov 30 2014 11:51:13 GMT+0800 (中国标准时间)

function wBottomA_b_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.netsum_r0_below>-0.02*obj.amount_ave_21//0.800 16820/24941
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0.797 17481/26096
&& obj.netsummax_r0_10===-0.0*obj.amount_ave_21//0.773 24490/33105
&& !(obj.netsummin_r0_20<-0*obj.amount_ave_21)//0.762 30210/40737
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0.701 78249/98309
 && function(m, n) {
            var rightBottom = klineutil.lowIndexOfUpTrend(klineJson, i);
            var middleTop = klineutil.highIndexOfDownTrend(klineJson, rightBottom);
            var leftBottom = klineutil.lowIndexOfUpTrend(klineJson, middleTop);

            var outerHigh = klineutil.highItem(klineJson, leftBottom - m, leftBottom, "high");
            return klineutil.increase(klineJson[leftBottom].high, outerHigh) > n
        }(40,0.3)
}
exports.wBottomA_b_0 = wBottomA_b_0//Sun Nov 30 2014 12:54:45 GMT+0800 (中国标准时间)

function wBottomA_c_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.netsummin_r0x_40<-0.2*obj.amount_ave_21//0.800 10095/19306
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0.800 10112/19335
&& !(obj.netsummax_r0_40+obj.netsummin_r0x_40>0)//0.787 13356/22579
&& obj.netsummax_r0>1.5*obj.amount_ave_21//0.770 15587/25228
&& !(obj.netsummin_r0_20<-0.1*obj.amount_ave_21)//0.747 21723/35615
&& obj.netsum_r0_above>obj.netsum_r0_below*6//0.708 42471/61454
 && function(m, n) {
            var rightBottom = klineutil.lowIndexOfUpTrend(klineJson, i);
            var middleTop = klineutil.highIndexOfDownTrend(klineJson, rightBottom);
            var leftBottom = klineutil.lowIndexOfUpTrend(klineJson, middleTop);

            var outerHigh = klineutil.highItem(klineJson, leftBottom - m, leftBottom, "high");
            return klineutil.increase(klineJson[leftBottom].high, outerHigh) > n
                && klineutil.increase(klineJson[leftBottom].low, klineJson[rightBottom].low) > -0.8 * klineJson[i].amplitude_ave_21
        }(30,0.32)
}
exports.wBottomA_c_0 = wBottomA_c_0//Sun Nov 30 2014 15:30:54 GMT+0800 (中国标准时间)

function wBottomA_c_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.netsummin_r0_20<0.1*obj.amount_ave_21//0.800 10560/19510
&& obj.marketCap < 4000000000//0.798 11199/20149
&& !(obj.netsummax_r0_40+obj.netsummin_r0x_40>0)//0.787 13356/22579
&& obj.netsummax_r0>1.5*obj.amount_ave_21//0.770 15587/25228
&& !(obj.netsummin_r0_20<-0.1*obj.amount_ave_21)//0.747 21723/35615
&& obj.netsum_r0_above>obj.netsum_r0_below*6//0.708 42471/61454
 && function(m, n) {
            var rightBottom = klineutil.lowIndexOfUpTrend(klineJson, i);
            var middleTop = klineutil.highIndexOfDownTrend(klineJson, rightBottom);
            var leftBottom = klineutil.lowIndexOfUpTrend(klineJson, middleTop);

            var outerHigh = klineutil.highItem(klineJson, leftBottom - m, leftBottom, "high");
            return klineutil.increase(klineJson[leftBottom].high, outerHigh) > n
                && klineutil.increase(klineJson[leftBottom].low, klineJson[rightBottom].low) > -0.8 * klineJson[i].amplitude_ave_21
        }(30,0.32)
}
exports.wBottomA_c_0 = wBottomA_c_0//Sun Nov 30 2014 15:31:30 GMT+0800 (中国标准时间)

function wBottomA_c_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.close_ave_8<obj.close_ave_144//0.800 11219/19263
&& obj.close_ave_8<obj.close_ave_233//0.797 11612/19901
&& !(obj.netsummax_r0_40+obj.netsummin_r0x_40>0)//0.787 13356/22579
&& obj.netsummax_r0>1.5*obj.amount_ave_21//0.770 15587/25228
&& !(obj.netsummin_r0_20<-0.1*obj.amount_ave_21)//0.747 21723/35615
&& obj.netsum_r0_above>obj.netsum_r0_below*6//0.708 42471/61454
 && function(m, n) {
            var rightBottom = klineutil.lowIndexOfUpTrend(klineJson, i);
            var middleTop = klineutil.highIndexOfDownTrend(klineJson, rightBottom);
            var leftBottom = klineutil.lowIndexOfUpTrend(klineJson, middleTop);

            var outerHigh = klineutil.highItem(klineJson, leftBottom - m, leftBottom, "high");
            return klineutil.increase(klineJson[leftBottom].high, outerHigh) > n
                && klineutil.increase(klineJson[leftBottom].low, klineJson[rightBottom].low) > -0.8 * klineJson[i].amplitude_ave_21
        }(30,0.32)
}
exports.wBottomA_c_0 = wBottomA_c_0//Sun Nov 30 2014 15:32:06 GMT+0800 (中国标准时间)

function wBottomA_c_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.netsummin_r0x_40<-0.2*obj.amount_ave_21//197 0.800 10095/19306
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//31 0.800 10112/19335
&& !(obj.netsummax_r0_40+obj.netsummin_r0x_40>0)//2 0.787 13356/22579
&& obj.netsummax_r0>1.5*obj.amount_ave_21//2 0.770 15587/25228
&& !(obj.netsummin_r0_20<-0.1*obj.amount_ave_21)//0 0.747 21723/35615
&& obj.netsum_r0_above>obj.netsum_r0_below*6//0 0.708 42471/61454
 && function(m, n) {
            var rightBottom = klineutil.lowIndexOfUpTrend(klineJson, i);
            var middleTop = klineutil.highIndexOfDownTrend(klineJson, rightBottom);
            var leftBottom = klineutil.lowIndexOfUpTrend(klineJson, middleTop);

            var outerHigh = klineutil.highItem(klineJson, leftBottom - m, leftBottom, "high");
            return klineutil.increase(klineJson[leftBottom].high, outerHigh) > n
                && klineutil.increase(klineJson[leftBottom].low, klineJson[rightBottom].low) > -0.8 * klineJson[i].amplitude_ave_21
        }(30,0.32)
}
exports.wBottomA_c_0 = wBottomA_c_0//Sun Nov 30 2014 21:49:57 GMT+0800 (中国标准时间)

function wBottomA_c_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.netsummin_r0_20<0.1*obj.amount_ave_21//140 0.800 10560/19510
&& obj.marketCap < 4000000000//38 0.798 11199/20149
&& !(obj.netsummax_r0_40+obj.netsummin_r0x_40>0)//2 0.787 13356/22579
&& obj.netsummax_r0>1.5*obj.amount_ave_21//2 0.770 15587/25228
&& !(obj.netsummin_r0_20<-0.1*obj.amount_ave_21)//0 0.747 21723/35615
&& obj.netsum_r0_above>obj.netsum_r0_below*6//0 0.708 42471/61454
 && function(m, n) {
            var rightBottom = klineutil.lowIndexOfUpTrend(klineJson, i);
            var middleTop = klineutil.highIndexOfDownTrend(klineJson, rightBottom);
            var leftBottom = klineutil.lowIndexOfUpTrend(klineJson, middleTop);

            var outerHigh = klineutil.highItem(klineJson, leftBottom - m, leftBottom, "high");
            return klineutil.increase(klineJson[leftBottom].high, outerHigh) > n
                && klineutil.increase(klineJson[leftBottom].low, klineJson[rightBottom].low) > -0.8 * klineJson[i].amplitude_ave_21
        }(30,0.32)
}
exports.wBottomA_c_0 = wBottomA_c_0//Sun Nov 30 2014 21:50:35 GMT+0800 (中国标准时间)

function wBottomA_c_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.close_ave_8<obj.close_ave_144//113 0.800 11219/19263
&& obj.close_ave_8<obj.close_ave_233//40 0.797 11612/19901
&& !(obj.netsummax_r0_40+obj.netsummin_r0x_40>0)//2 0.787 13356/22579
&& obj.netsummax_r0>1.5*obj.amount_ave_21//2 0.770 15587/25228
&& !(obj.netsummin_r0_20<-0.1*obj.amount_ave_21)//0 0.747 21723/35615
&& obj.netsum_r0_above>obj.netsum_r0_below*6//0 0.708 42471/61454
 && function(m, n) {
            var rightBottom = klineutil.lowIndexOfUpTrend(klineJson, i);
            var middleTop = klineutil.highIndexOfDownTrend(klineJson, rightBottom);
            var leftBottom = klineutil.lowIndexOfUpTrend(klineJson, middleTop);

            var outerHigh = klineutil.highItem(klineJson, leftBottom - m, leftBottom, "high");
            return klineutil.increase(klineJson[leftBottom].high, outerHigh) > n
                && klineutil.increase(klineJson[leftBottom].low, klineJson[rightBottom].low) > -0.8 * klineJson[i].amplitude_ave_21
        }(30,0.32)
}
exports.wBottomA_c_0 = wBottomA_c_0//Sun Nov 30 2014 21:51:13 GMT+0800 (中国标准时间)

function wBottomA_c_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsummin_r0x_40>obj.netsummin_r0_40)//162 0.800 11746/21271
&& !(obj.netsummax_r0_40+obj.netsummin_r0x_40>0)//17 0.799 11826/21352
&& obj.amount_ave_21<1.5*obj.amount_ave_8//43 0.785 13524/23451
&& obj.close_ave_8<obj.close_ave_233//44 0.775 15280/25217
&& obj.netsummax_r0>obj.amount_ave_21//13 0.764 17577/28655
&& !(obj.netsummin_r0_20<-0.1*obj.amount_ave_21)//0 0.747 21723/35615
&& obj.netsum_r0_above>obj.netsum_r0_below*6//0 0.708 42471/61454
 && function(m, n) {
            var rightBottom = klineutil.lowIndexOfUpTrend(klineJson, i);
            var middleTop = klineutil.highIndexOfDownTrend(klineJson, rightBottom);
            var leftBottom = klineutil.lowIndexOfUpTrend(klineJson, middleTop);

            var outerHigh = klineutil.highItem(klineJson, leftBottom - m, leftBottom, "high");
            return klineutil.increase(klineJson[leftBottom].high, outerHigh) > n
                && klineutil.increase(klineJson[leftBottom].low, klineJson[rightBottom].low) > -0.8 * klineJson[i].amplitude_ave_21
        }(30,0.32)
}
exports.wBottomA_c_0 = wBottomA_c_0//Sun Nov 30 2014 23:07:35 GMT+0800 (中国标准时间)

function wBottomA_d_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsum_r0_below>0.04*obj.amount_ave_21)//8 0.805 9040/21934
&& !(obj.netsum_r0_below_60>0.03*obj.amount_ave_21)//9 0.791 11136/25087
&& obj.amount_ave_21<1*obj.amount_ave_8//0 0.771 15477/32207
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
exports.wBottomA_d_0 = wBottomA_d_0//Mon Dec 01 2014 06:56:41 GMT+0800 (中国标准时间)
