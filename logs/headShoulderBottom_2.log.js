
function headShoulderBottom_2_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.4*obj.amount_ave_21//6 0.802 2505/10378
&& !(obj.close_ave_144<1.05*obj.close)//0 0.786 3492/14006
&& obj.netsummax_r0x_20>obj.netsummax_r0_20//0 0.763 6126/20969
&& obj.netsummax_r0>1.5*obj.amount_ave_21//0 0.732 14647/39824
&& !(obj.netsum_r0_below>0.0*obj.amount_ave_21)//0 0.702 32627/71964
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.671 69573/122779
&& obj.marketCap < 4000000000//0 0.649 102329/158806
 && function(a, b, c, n) {
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
exports.headShoulderBottom_2_0 = headShoulderBottom_2_0//Mon Mar 09 2015 21:49:06 GMT+0800 (中国标准时间)

function headShoulderBottom_2_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.4*obj.amount_ave_21//3 0.799 2602/10570
&& !(obj.close_ave_144<1.05*obj.close)//0 0.783 3696/14442
&& obj.netsummax_r0x_10>obj.netsummax_r0_10//1 0.759 6421/21565
&& obj.netsummax_r0>1.5*obj.amount_ave_21//0 0.732 14647/39824
&& !(obj.netsum_r0_below>0.0*obj.amount_ave_21)//0 0.702 32627/71964
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.671 69573/122779
&& obj.marketCap < 4000000000//0 0.649 102329/158806
 && function(a, b, c, n) {
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
exports.headShoulderBottom_2_0 = headShoulderBottom_2_0//Mon Mar 09 2015 21:52:16 GMT+0800 (中国标准时间)

function headShoulderBottom_2_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsum_r0x_80>0.1*obj.amount_ave_21)//79 0.800 2644/10878
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.5*obj.amount_ave_21//30 0.795 2808/11577
&& !(obj.netsummin_r0_40<-0.2*obj.amount_ave_21)//3 0.783 3669/14650
&& !(obj.close_ave_144<1.05*obj.close)//3 0.751 8866/27312
&& obj.netsummax_r0>1.5*obj.amount_ave_21//0 0.732 14647/39824
&& !(obj.netsum_r0_below>0.0*obj.amount_ave_21)//0 0.702 32627/71964
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.671 69573/122779
&& obj.marketCap < 4000000000//0 0.649 102329/158806
 && function(a, b, c, n) {
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
exports.headShoulderBottom_2_0 = headShoulderBottom_2_0//Mon Mar 09 2015 21:58:59 GMT+0800 (中国标准时间)

function headShoulderBottom_2_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsum_r0x_80>0.1*obj.amount_ave_21)//72 0.799 2861/12775
&& !(obj.netsummax_r0_20>0.5*obj.amount_ave_21)//41 0.793 3021/13556
&& !(obj.netsummin_r0_40<-0.2*obj.amount_ave_21)//3 0.783 3669/14650
&& !(obj.close_ave_144<1.05*obj.close)//3 0.751 8866/27312
&& obj.netsummax_r0>1.5*obj.amount_ave_21//0 0.732 14647/39824
&& !(obj.netsum_r0_below>0.0*obj.amount_ave_21)//0 0.702 32627/71964
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.671 69573/122779
&& obj.marketCap < 4000000000//0 0.649 102329/158806
 && function(a, b, c, n) {
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
exports.headShoulderBottom_2_0 = headShoulderBottom_2_0//Mon Mar 09 2015 21:59:19 GMT+0800 (中国标准时间)

function headShoulderBottom_2_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsum_r0x_80>0.1*obj.amount_ave_21)//95 0.799 3002/13183
&& !(obj.netsummax_r0_20>0.5*obj.amount_ave_21)//29 0.796 3208/14098
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.5*obj.amount_ave_21//23 0.785 3769/15033
&& obj.netsummin_r0_10===obj.netsummin_r0_20//8 0.772 5096/19432
&& !(obj.close_ave_144<1.05*obj.close)//3 0.751 8866/27312
&& obj.netsummax_r0>1.5*obj.amount_ave_21//0 0.732 14647/39824
&& !(obj.netsum_r0_below>0.0*obj.amount_ave_21)//0 0.702 32627/71964
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.671 69573/122779
&& obj.marketCap < 4000000000//0 0.649 102329/158806
 && function(a, b, c, n) {
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
exports.headShoulderBottom_2_0 = headShoulderBottom_2_0//Mon Mar 09 2015 22:02:00 GMT+0800 (中国标准时间)
