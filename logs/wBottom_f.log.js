
function wBottom_f_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.netsummax_r0>2.2*obj.amount_ave_21//1 0.799 2396/17920
&& obj.amount_ave_21<1.05*obj.amount_ave_8//0 0.770 6310/35402
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.734 19208/65684
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.680 75452/139967
&& obj.marketCap < 4000000000//0 0.656 129068/200534
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,5, -0.3, 0.2) 
}
exports.wBottom_f_0 = wBottom_f_0//Sun Mar 22 2015 12:19:10 GMT+0800 (中国标准时间)

function wBottom_f_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsummax_r0_20>0.3*obj.amount_ave_21)//90 0.798 2693/20432
&& obj.amount_ave_21<1.05*obj.amount_ave_8//0 0.794 2962/21810
&& obj.netsummax_r0>1.5*obj.amount_ave_21//1 0.755 10037/41301
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.734 19208/65684
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.680 75452/139967
&& obj.marketCap < 4000000000//0 0.656 129068/200534
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,5, -0.3, 0.2) 
}
exports.wBottom_f_0 = wBottom_f_0//Sun Mar 22 2015 12:20:19 GMT+0800 (中国标准时间)

function wBottom_f_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsum_r0x_40>0.1*obj.amount_ave_21)//115 0.798 2791/21343
&& obj.netsummax_r0_duration>80//22 0.796 2955/22011
&& !(obj.netsummin_r0_10>obj.netsummin_r0_20)//0 0.784 4140/26590
&& obj.amount_ave_21<1.05*obj.amount_ave_8//0 0.760 7850/36969
&& !(obj.netsummax_r0_5>0.03*obj.amount_ave_21)//1 0.727 21669/67908
&& obj.netsum_r0_above>obj.netsum_r0_below*6//1 0.706 40589/99774
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.680 75452/139967
&& obj.marketCap < 4000000000//0 0.656 129068/200534
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,5, -0.3, 0.2) 
}
exports.wBottom_f_0 = wBottom_f_0//Sun Mar 22 2015 13:13:58 GMT+0800 (中国标准时间)

function wBottom_f_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.netsummax_r0_duration>60//127 0.799 2798/21684
&& obj.netsummax_r0>obj.amount_ave_21//6 0.797 2934/22489
&& !(obj.netsummin_r0_20<-0.2*obj.amount_ave_21)//3 0.781 4415/28912
&& obj.amount_ave_21<1.05*obj.amount_ave_8//0 0.760 7850/36969
&& !(obj.netsummax_r0_5>0.03*obj.amount_ave_21)//1 0.727 21669/67908
&& obj.netsum_r0_above>obj.netsum_r0_below*6//1 0.706 40589/99774
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.680 75452/139967
&& obj.marketCap < 4000000000//0 0.656 129068/200534
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,5, -0.3, 0.2) 
}
exports.wBottom_f_0 = wBottom_f_0//Sun Mar 22 2015 13:16:50 GMT+0800 (中国标准时间)

function wBottom_f_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.r0_ratio<-0.05)//110 0.798 2891/17480
&& !(obj.netsummax_r0_20>0.5*obj.amount_ave_21)//30 0.797 2979/17719
&& !(obj.netsummin_r0_40<-0.2*obj.amount_ave_21)//0 0.786 3765/19475
&& obj.netsummax_r0>1.5*obj.amount_ave_21//0 0.757 9074/35710
&& obj.netsum_r0_below===0.0*obj.amount_ave_21//2 0.730 18283/56437
&& obj.netsum_r0_above>obj.netsum_r0_below*6//1 0.706 40589/99774
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.680 75452/139967
&& obj.marketCap < 4000000000//0 0.656 129068/200534
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,5, -0.3, 0.2) 
}
exports.wBottom_f_0 = wBottom_f_0//Sun Mar 22 2015 14:06:32 GMT+0800 (中国标准时间)

function wBottom_f_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsummax_r0_20>0.5*obj.amount_ave_21)//45 0.798 3020/22111
&& !(obj.netsummin_r0_10>obj.netsummin_r0_20)//6 0.790 3684/23721
&& obj.amount_ave_21<1.05*obj.amount_ave_8//2 0.768 6133/30563
&& obj.netsum_r0_below===0.0*obj.amount_ave_21//2 0.730 18283/56437
&& obj.netsum_r0_above>obj.netsum_r0_below*6//1 0.706 40589/99774
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.680 75452/139967
&& obj.marketCap < 4000000000//0 0.656 129068/200534
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,5, -0.3, 0.2) 
}
exports.wBottom_f_0 = wBottom_f_0//Sun Mar 22 2015 14:36:45 GMT+0800 (中国标准时间)

function wBottom_f_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsum_r0_below_60>0.03*obj.amount_ave_21)//6 0.799 3037/18843
&& !(obj.netsummin_r0_20<-0.2*obj.amount_ave_21)//6 0.781 4655/22726
&& obj.amount_ave_21<1.05*obj.amount_ave_8//2 0.763 7452/28535
&& obj.netsummax_r0>1.5*obj.amount_ave_21//2 0.732 18923/53129
&& !(obj.netsummax_r0_5>0.03*obj.amount_ave_21)//2 0.707 37625/88146
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.680 75452/139967
&& obj.marketCap < 4000000000//0 0.656 129068/200534
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,5, -0.3, 0.2) 
}
exports.wBottom_f_0 = wBottom_f_0//Sun Mar 22 2015 16:01:45 GMT+0800 (中国标准时间)

function wBottom_f_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsummin_r0x_40>obj.netsummin_r0_40)//149 0.798 3113/18779
&& obj.marketCap < 2500000000//7 0.797 3142/18852
&& !(obj.netsum_r0_below_60>0.0*obj.amount_ave_21)//12 0.780 4849/23129
&& obj.amount_ave_21<1.05*obj.amount_ave_8//2 0.763 7452/28535
&& obj.netsummax_r0>1.5*obj.amount_ave_21//2 0.732 18923/53129
&& !(obj.netsummax_r0_5>0.03*obj.amount_ave_21)//2 0.707 37625/88146
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.680 75452/139967
&& obj.marketCap < 4000000000//0 0.656 129068/200534
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,5, -0.3, 0.2) 
}
exports.wBottom_f_0 = wBottom_f_0//Sun Mar 22 2015 16:03:50 GMT+0800 (中国标准时间)

function wBottom_f_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsummax_r0_20>0.3*obj.amount_ave_21)//100 0.798 3146/18372
&& !(obj.netsum_r0_below_60>0.03*obj.amount_ave_21)//16 0.794 3373/19318
&& obj.marketCap < 2500000000//13 0.780 4835/22874
&& obj.amount_ave_21<1.05*obj.amount_ave_8//2 0.763 7452/28535
&& obj.netsummax_r0>1.5*obj.amount_ave_21//2 0.732 18923/53129
&& !(obj.netsummax_r0_5>0.03*obj.amount_ave_21)//2 0.707 37625/88146
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.680 75452/139967
&& obj.marketCap < 4000000000//0 0.656 129068/200534
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,5, -0.3, 0.2) 
}
exports.wBottom_f_0 = wBottom_f_0//Sun Mar 22 2015 16:05:19 GMT+0800 (中国标准时间)
