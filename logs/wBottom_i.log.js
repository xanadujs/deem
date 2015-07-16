
function wBottom_i_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.amount_ave_21<1.05*obj.amount_ave_8//0 0.804 4869/16939
&& obj.netsummax_r0_duration>80//0 0.766 11433/31942
&& obj.netsum_r0_below===0.0*obj.amount_ave_21//0 0.736 19790/44160
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.705 43676/82478
&& obj.netsum_r0_above>obj.netsum_r0_below*6//0 0.680 70489/112626
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,5, -0.3, 0.25) 

}
exports.wBottom_i_0 = wBottom_i_0//Mon Mar 09 2015 22:39:15 GMT+0800 (中国标准时间)

function wBottom_i_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.netsummax_r0_duration>60//4 0.799 5310/18207
&& obj.amount_ave_21<1.05*obj.amount_ave_8//2 0.772 8892/23284
&& obj.netsum_r0_below===0.0*obj.amount_ave_21//0 0.736 19790/44160
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.705 43676/82478
&& obj.netsum_r0_above>obj.netsum_r0_below*6//0 0.680 70489/112626
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,5, -0.3, 0.25) 

}
exports.wBottom_i_0 = wBottom_i_0//Mon Mar 09 2015 22:43:25 GMT+0800 (中国标准时间)

function wBottom_i_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.netsummax_r0_duration>60//4 0.799 5359/18331
&& obj.netsum_r0_below===0.0*obj.amount_ave_21//0 0.772 8954/23420
&& obj.amount_ave_21<1.05*obj.amount_ave_8//1 0.723 23544/48500
&& obj.netsum_r0_above>obj.netsum_r0_below*6//0 0.680 70489/112626
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,5, -0.3, 0.25) 

}
exports.wBottom_i_0 = wBottom_i_0//Mon Mar 09 2015 23:04:46 GMT+0800 (中国标准时间)

function wBottom_i_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//102 0.798 5534/18653
&& obj.netsum_r0_below===0.0*obj.amount_ave_21//5 0.794 5980/19794
&& obj.netsummax_r0_duration>40//9 0.781 7000/21656
&& obj.netsum_r0_below_60===0.0*obj.amount_ave_21//1 0.763 9974/25282
&& obj.amount_ave_21<1.05*obj.amount_ave_8//1 0.723 23544/48500
&& obj.netsum_r0_above>obj.netsum_r0_below*6//0 0.680 70489/112626
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,5, -0.3, 0.25) 

}
exports.wBottom_i_0 = wBottom_i_0//Mon Mar 09 2015 23:07:20 GMT+0800 (中国标准时间)

function wBottom_i_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//100 0.798 5559/18678
&& obj.netsummax_r0_duration>40//3 0.794 6019/19833
&& obj.netsum_r0_below===0.0*obj.amount_ave_21//0 0.762 11238/26704
&& obj.amount_ave_21<1.05*obj.amount_ave_8//1 0.733 18273/38834
&& !(obj.netsum_r0_below>0.0*obj.amount_ave_21)//1 0.686 57454/92628
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,5, -0.3, 0.25) 

}
exports.wBottom_i_0 = wBottom_i_0//Tue Mar 10 2015 10:34:10 GMT+0800 (中国标准时间)
