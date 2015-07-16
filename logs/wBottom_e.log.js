
function wBottom_e_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsum_r0x_40>0.1*obj.amount_ave_21)//46 0.799 2420/18931
&& obj.netsummax_r0>1.5*obj.amount_ave_21//0 0.795 2551/19702
&& !(obj.netsummin_r0_20<-0.2*obj.amount_ave_21)//0 0.784 3513/25379
&& obj.netsummax_r0_duration>80//0 0.766 6098/31944
&& obj.netsum_r0_below===0.0*obj.amount_ave_21//0 0.736 13362/44160
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.706 33834/82486
&& obj.netsum_r0_above>obj.netsum_r0_below*6//0 0.681 58793/112641
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,5, -0.3, 0.25) 
}
exports.wBottom_e_0 = wBottom_e_0//Sun Mar 22 2015 19:14:39 GMT+0800 (中国标准时间)

function wBottom_e_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsum_r0_below_60>0.05*obj.amount_ave_21)//77 0.798 2613/14057
&& obj.netsummax_r0_10===obj.netsummax_r0_20//19 0.796 2683/14327
&& !(obj.netsummax_r0_40+obj.netsummin_r0x_40>0)//16 0.782 4245/18878
&& obj.netsummax_r0_10===-0.0*obj.amount_ave_21//0 0.768 5213/20546
&& obj.netsummax_r0>2.2*obj.amount_ave_21//0 0.741 11888/36739
&& obj.marketCap < 2500000000//2 0.708 27136/68288
&& obj.netsum_r0_above>obj.netsum_r0_below*6//0 0.681 58793/112641
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,5, -0.3, 0.25) 
}
exports.wBottom_e_0 = wBottom_e_0//Sun Mar 22 2015 22:53:04 GMT+0800 (中国标准时间)

function wBottom_e_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.close_ave_21<obj.close_ave_144//45 0.799 2642/14907
&& !(obj.netsummax_r0_40+obj.netsummin_r0x_40>0)//24 0.792 3168/16149
&& obj.netsummax_r0_10===obj.netsummax_r0_20//14 0.782 3681/17238
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//4 0.762 6578/24154
&& obj.netsummax_r0>2.2*obj.amount_ave_21//0 0.741 11888/36739
&& obj.marketCap < 2500000000//2 0.708 27136/68288
&& obj.netsum_r0_above>obj.netsum_r0_below*6//0 0.681 58793/112641
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,5, -0.3, 0.25) 
}
exports.wBottom_e_0 = wBottom_e_0//Sun Mar 22 2015 23:05:31 GMT+0800 (中国标准时间)

function wBottom_e_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.close_ave_8<obj.close_ave_144//48 0.799 2768/14795
&& !(obj.netsummax_r0_40+obj.netsummin_r0x_40>0)//18 0.794 3065/15689
&& obj.netsummax_r0_10===obj.netsummax_r0_20//14 0.783 3577/16777
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//1 0.763 6396/23507
&& obj.netsummax_r0>2.3*obj.amount_ave_21//1 0.742 11560/35767
&& obj.marketCap < 2500000000//2 0.708 27136/68288
&& obj.netsum_r0_above>obj.netsum_r0_below*6//0 0.681 58793/112641
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,5, -0.3, 0.25) 
}
exports.wBottom_e_0 = wBottom_e_0//Sun Mar 22 2015 23:12:55 GMT+0800 (中国标准时间)
