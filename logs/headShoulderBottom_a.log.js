
function headShoulderBottom_a_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.close_ave_144<1.05*obj.close)//0 0.800 5128/14899
&& obj.netsummax_r0>obj.amount_ave_21//3 0.770 9190/23100
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.746 15259/33571
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.709 25638/45305
&& obj.marketCap < 4000000000//1 0.665 57720/81266
 &&  function(a, b, c, n) {
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
exports.headShoulderBottom_a_0 = headShoulderBottom_a_0//Wed Dec 24 2014 19:50:47 GMT+0800 (中国标准时间)

function headShoulderBottom_a_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.close_ave_144<1.05*obj.close)//0 0.800 5128/14899
&& obj.netsummax_r0>obj.amount_ave_21//3 0.770 9190/23100
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.746 15259/33571
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.709 25638/45305
&& obj.marketCap < 4000000000//1 0.665 57720/81266
 &&  function(a, b, c, n) {
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
exports.headShoulderBottom_a_0 = headShoulderBottom_a_0//Wed Dec 24 2014 22:17:50 GMT+0800 (中国标准时间)

function headShoulderBottom_a_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.close_ave_144<1.05*obj.close)//0 0.800 5128/14899
&& obj.netsummax_r0>obj.amount_ave_21//3 0.770 9190/23100
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.746 15259/33571
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.709 25638/45305
&& obj.marketCap < 4000000000//1 0.665 57720/81266
 &&  function(a, b, c, n) {
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
exports.headShoulderBottom_a_0 = headShoulderBottom_a_0//Wed Dec 24 2014 22:33:41 GMT+0800 (中国标准时间)

function headShoulderBottom_a_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.marketCap < 5000000000//117 0.798 5005/14664
&& !(obj.close_ave_144<0.98*obj.close)//36 0.792 5525/15479
&& obj.netsummax_r0>obj.amount_ave_21//0 0.778 7586/20313
&& obj.netsummin_r0_5===obj.netsummin_r0_10//4 0.756 12399/29067
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.733 18386/37686
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.694 30691/51471
 &&  function(a, b, c, n) {
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
exports.headShoulderBottom_a_0 = headShoulderBottom_a_0//Wed Dec 24 2014 23:01:56 GMT+0800 (中国标准时间)

function headShoulderBottom_a_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.marketCap < 5000000000//117 0.798 5004/14660
&& !(obj.close_ave_144<0.98*obj.close)//36 0.792 5524/15475
&& obj.netsummax_r0>obj.amount_ave_21//0 0.778 7586/20313
&& obj.netsummin_r0_5===obj.netsummin_r0_10//5 0.756 12398/29067
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.733 18385/37686
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.694 30693/51474
 &&  function(a, b, c, n) {
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
exports.headShoulderBottom_a_0 = headShoulderBottom_a_0//Thu Dec 25 2014 13:22:22 GMT+0800 (中国标准时间)

function headShoulderBottom_a_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.close_ave_144<1.05*obj.close)//0 0.800 5124/14894
&& obj.netsummax_r0>obj.amount_ave_21//3 0.770 9190/23100
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.746 15257/33570
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.709 25640/45308
&& obj.marketCap < 4000000000//1 0.665 57722/81269
 &&  function(a, b, c, n) {
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
exports.headShoulderBottom_a_0 = headShoulderBottom_a_0//Thu Dec 25 2014 13:50:55 GMT+0800 (中国标准时间)

function headShoulderBottom_a_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsum_r0x_80>obj.netsum_r0_80)//165 0.799 5336/13592
&& !(obj.netsummax_r0_20>0.3*obj.amount_ave_21)//73 0.797 5390/13747
&& obj.netsummin_r0_5===obj.netsummin_r0_10//32 0.787 6527/15841
&& !(obj.close_ave_144<1.05*obj.close)//1 0.773 9218/19858
&& obj.netsummax_r0>1.5*obj.amount_ave_21//5 0.747 14237/28627
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//3 0.721 23156/42935
&& obj.netsum_r0_above>obj.netsum_r0_below*6//4 0.694 33894/55223
&& obj.marketCap < 4000000000//1 0.665 57722/81269
 &&  function(a, b, c, n) {
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
exports.headShoulderBottom_a_0 = headShoulderBottom_a_0//Thu Dec 25 2014 14:37:24 GMT+0800 (中国标准时间)
