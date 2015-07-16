
function wBottom_h_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsummax_r0_20>0.5*obj.amount_ave_21)//45 0.799 2963/14150
&& obj.netsummax_r0x_20>obj.netsummax_r0_20//0 0.792 3335/14771
&& obj.marketCap < 2500000000//0 0.767 7747/28359
&& obj.netsummax_r0>2*obj.amount_ave_21//0 0.732 18522/46093
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.705 38183/82477
&& obj.netsum_r0_above>obj.netsum_r0_below*6//0 0.680 64955/112626
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,5, -0.3, 0.25) 
}
exports.wBottom_h_0 = wBottom_h_0//Tue Mar 10 2015 22:28:35 GMT+0800 (中国标准时间)

function wBottom_h_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsummax_r0_40+obj.netsummin_r0x_40>0)//18 0.798 2988/14466
&& obj.netsummax_r0x_10>obj.netsummax_r0_10//4 0.788 3627/15691
&& obj.marketCap < 2500000000//0 0.767 7747/28359
&& obj.netsummax_r0>2*obj.amount_ave_21//0 0.732 18522/46093
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.705 38183/82477
&& obj.netsum_r0_above>obj.netsum_r0_below*6//0 0.680 64955/112626
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,5, -0.3, 0.25) 
}
exports.wBottom_h_0 = wBottom_h_0//Tue Mar 10 2015 22:29:42 GMT+0800 (中国标准时间)

function wBottom_h_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.netsum_r0_above_60>obj.netsum_r0x_above_60//125 0.798 3032/14138
&& !(obj.netsummax_r0_20>0.5*obj.amount_ave_21)//25 0.795 3155/14542
&& obj.netsummax_r0x_20>0.05*obj.amount_ave_21//19 0.784 4027/16171
&& obj.marketCap < 2500000000//0 0.767 7747/28359
&& obj.netsummax_r0>2*obj.amount_ave_21//0 0.732 18522/46093
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.705 38183/82477
&& obj.netsum_r0_above>obj.netsum_r0_below*6//0 0.680 64955/112626
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,5, -0.3, 0.25) 
}
exports.wBottom_h_0 = wBottom_h_0//Tue Mar 10 2015 22:34:07 GMT+0800 (中国标准时间)

function wBottom_h_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsummax_r0_40+obj.netsummin_r0x_40>0)//51 0.799 3051/14082
&& !(obj.netsummax_r0_20>0.5*obj.amount_ave_21)//35 0.791 3476/14996
&& obj.netsum_r0_below_60>obj.netsum_r0x_below_60//34 0.781 4259/16536
&& obj.marketCap < 2500000000//0 0.767 7747/28359
&& obj.netsummax_r0>2*obj.amount_ave_21//0 0.732 18522/46093
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.705 38183/82477
&& obj.netsum_r0_above>obj.netsum_r0_below*6//0 0.680 64955/112626
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,5, -0.3, 0.25) 
}
exports.wBottom_h_0 = wBottom_h_0//Tue Mar 10 2015 22:36:23 GMT+0800 (中国标准时间)

function wBottom_h_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.netsummax_r0_duration>80//72 0.799 3152/15821
&& !(obj.netsummax_r0_40+obj.netsummin_r0x_40>0)//1 0.794 3448/16850
&& !(obj.r0_ratio>0.05)//32 0.780 4575/18616
&& !(obj.netsummin_r0_40<-0.2*obj.amount_ave_21)//4 0.769 5850/20813
&& obj.netsummax_r0>2*obj.amount_ave_21//0 0.732 18522/46093
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.705 38183/82477
&& obj.netsum_r0_above>obj.netsum_r0_below*6//0 0.680 64955/112626
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,5, -0.3, 0.25) 
}
exports.wBottom_h_0 = wBottom_h_0//Tue Mar 10 2015 23:18:48 GMT+0800 (中国标准时间)

function wBottom_h_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//40 0.799 3244/14642
&& !(obj.netsummax_r0_40+obj.netsummin_r0x_40>0)//19 0.791 3946/16162
&& obj.netsummax_r0x_20>obj.netsummax_r0_20//0 0.781 4719/17541
&& obj.marketCap < 4000000000//0 0.757 11121/34809
&& obj.netsummax_r0>2.2*obj.amount_ave_21//1 0.733 17536/43723
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.705 38183/82477
&& obj.netsum_r0_above>obj.netsum_r0_below*6//0 0.680 64955/112626
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,5, -0.3, 0.25) 
}
exports.wBottom_h_0 = wBottom_h_0//Tue Mar 10 2015 23:23:11 GMT+0800 (中国标准时间)

function wBottom_h_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.netsummax_r0_duration>80//74 0.798 3322/13169
&& !(obj.amount_ave_21<0.5*obj.amount)//5 0.793 3634/14082
&& obj.netsummax_r0x_20>0.1*obj.amount_ave_21//10 0.778 5061/17104
&& obj.marketCap < 4000000000//0 0.757 11121/34809
&& obj.netsummax_r0>2.2*obj.amount_ave_21//1 0.733 17536/43723
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.705 38183/82477
&& obj.netsum_r0_above>obj.netsum_r0_below*6//0 0.680 64955/112626
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,5, -0.3, 0.25) 
}
exports.wBottom_h_0 = wBottom_h_0//Tue Mar 10 2015 23:32:46 GMT+0800 (中国标准时间)

function wBottom_h_1(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.799 2021/18955
&& !(obj.netsummin_r0_20<-0.2*obj.amount_ave_21)//0 0.784 3750/25379
&& obj.netsummax_r0_duration>80//0 0.766 6425/31944
&& obj.netsum_r0_below===0.0*obj.amount_ave_21//0 0.736 13784/44160
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.706 34890/82486
&& obj.netsum_r0_above>obj.netsum_r0_below*6//0 0.681 61673/112641
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,5, -0.3, 0.25) 
}
exports.wBottom_h_1 = wBottom_h_1//Sat Mar 21 2015 21:08:56 GMT+0800 (中国标准时间)

function wBottom_h_1(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.netsummax_r0>1.5*obj.amount_ave_21//6 0.801 2065/16810
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//1 0.788 2925/22166
&& obj.netsummax_r0_duration>80//0 0.766 6425/31944
&& obj.netsum_r0_below===0.0*obj.amount_ave_21//0 0.736 13784/44160
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.706 34890/82486
&& obj.netsum_r0_above>obj.netsum_r0_below*6//0 0.681 61673/112641
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,5, -0.3, 0.25) 
}
exports.wBottom_h_1 = wBottom_h_1//Sat Mar 21 2015 21:09:31 GMT+0800 (中国标准时间)

function wBottom_h_1(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsummax_r0_40+obj.netsummin_r0x_40>0)//34 0.799 2071/17559
&& !(obj.netsummax_r0_10>0.1*obj.amount_ave_21)//8 0.795 2208/18122
&& !(obj.netsum_r0_10<-0.02*obj.amount_ave_21)//4 0.783 3290/23205
&& obj.netsummax_r0_duration>80//0 0.766 6425/31944
&& obj.netsum_r0_below===0.0*obj.amount_ave_21//0 0.736 13784/44160
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.706 34890/82486
&& obj.netsum_r0_above>obj.netsum_r0_below*6//0 0.681 61673/112641
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,5, -0.3, 0.25) 
}
exports.wBottom_h_1 = wBottom_h_1//Sat Mar 21 2015 21:11:48 GMT+0800 (中国标准时间)

function wBottom_h_1(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsummax_r0_40+obj.netsummin_r0x_40>0)//38 0.799 2097/18231
&& !(obj.netsummax_r0_5>0.05*obj.amount_ave_21)//10 0.795 2248/18860
&& !(obj.netsum_r0_10<-0.02*obj.amount_ave_21)//4 0.783 3290/23205
&& obj.netsummax_r0_duration>80//0 0.766 6425/31944
&& obj.netsum_r0_below===0.0*obj.amount_ave_21//0 0.736 13784/44160
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.706 34890/82486
&& obj.netsum_r0_above>obj.netsum_r0_below*6//0 0.681 61673/112641
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,5, -0.3, 0.25) 
}
exports.wBottom_h_1 = wBottom_h_1//Sat Mar 21 2015 21:12:20 GMT+0800 (中国标准时间)

function wBottom_h_1(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.r0_ratio>0.1)//61 0.799 2140/16202
&& !(obj.netsummin_r0_20<-0.2*obj.amount_ave_21)//9 0.796 2249/16547
&& obj.netsummax_r0>2.2*obj.amount_ave_21//5 0.782 3666/20041
&& obj.netsummax_r0_duration>80//0 0.766 6425/31944
&& obj.netsum_r0_below===0.0*obj.amount_ave_21//0 0.736 13784/44160
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.706 34890/82486
&& obj.netsum_r0_above>obj.netsum_r0_below*6//0 0.681 61673/112641
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,5, -0.3, 0.25) 
}
exports.wBottom_h_1 = wBottom_h_1//Sat Mar 21 2015 21:13:55 GMT+0800 (中国标准时间)

function wBottom_h_1(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.netsum_r0x_40<-0.1*obj.amount_ave_21//41 0.798 2344/14138
&& !(obj.netsummax_r0_10>0.05*obj.amount_ave_21)//14 0.793 2525/14865
&& obj.netsummax_r0>2.2*obj.amount_ave_21//5 0.782 3666/20041
&& obj.netsummax_r0_duration>80//0 0.766 6425/31944
&& obj.netsum_r0_below===0.0*obj.amount_ave_21//0 0.736 13784/44160
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.706 34890/82486
&& obj.netsum_r0_above>obj.netsum_r0_below*6//0 0.681 61673/112641
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,5, -0.3, 0.25) 
}
exports.wBottom_h_1 = wBottom_h_1//Sat Mar 21 2015 21:14:21 GMT+0800 (中国标准时间)

function wBottom_h_1(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsummax_r0_40+obj.netsummin_r0x_40>0)//33 0.799 2405/13796
&& !(obj.netsummax_r0_20>0.1*obj.amount_ave_21)//15 0.793 2612/14446
&& obj.netsummax_r0>2.2*obj.amount_ave_21//5 0.782 3666/20041
&& obj.netsummax_r0_duration>80//0 0.766 6425/31944
&& obj.netsum_r0_below===0.0*obj.amount_ave_21//0 0.736 13784/44160
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.706 34890/82486
&& obj.netsum_r0_above>obj.netsum_r0_below*6//0 0.681 61673/112641
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,5, -0.3, 0.25) 
}
exports.wBottom_h_1 = wBottom_h_1//Sat Mar 21 2015 21:14:49 GMT+0800 (中国标准时间)

function wBottom_h_1(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsummax_r0_40+obj.netsummin_r0x_40>0)//36 0.799 2452/15381
&& !(obj.netsummax_r0_5>0.03*obj.amount_ave_21)//16 0.792 2680/16153
&& obj.netsummax_r0>2.2*obj.amount_ave_21//5 0.782 3666/20041
&& obj.netsummax_r0_duration>80//0 0.766 6425/31944
&& obj.netsum_r0_below===0.0*obj.amount_ave_21//0 0.736 13784/44160
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.706 34890/82486
&& obj.netsum_r0_above>obj.netsum_r0_below*6//0 0.681 61673/112641
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,5, -0.3, 0.25) 
}
exports.wBottom_h_1 = wBottom_h_1//Sat Mar 21 2015 21:15:16 GMT+0800 (中国标准时间)

function wBottom_h_1(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsummax_r0_40+obj.netsummin_r0x_40>0)//25 0.798 2591/17358
&& !(obj.netsummax_r0_10>0.05*obj.amount_ave_21)//0 0.790 2882/18342
&& obj.netsummax_r0>2*obj.amount_ave_21//0 0.767 5653/28359
&& obj.marketCap < 2500000000//1 0.736 13638/49475
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.706 34890/82486
&& obj.netsum_r0_above>obj.netsum_r0_below*6//0 0.681 61673/112641
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,5, -0.3, 0.25) 
}
exports.wBottom_h_1 = wBottom_h_1//Sat Mar 21 2015 21:47:54 GMT+0800 (中国标准时间)

function wBottom_h_1(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsummax_r0_40+obj.netsummin_r0x_40>0)//26 0.798 2593/17360
&& obj.marketCap < 2500000000//5 0.790 2882/18342
&& !(obj.netsummax_r0_10>0.05*obj.amount_ave_21)//3 0.777 4276/22472
&& obj.netsummax_r0>2*obj.amount_ave_21//2 0.756 8428/36639
&& obj.marketCap < 4000000000//2 0.727 19913/63138
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.706 34890/82486
&& obj.netsum_r0_above>obj.netsum_r0_below*6//0 0.681 61673/112641
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (30,5, -0.3, 0.25) 
}
exports.wBottom_h_1 = wBottom_h_1//Sat Mar 21 2015 23:06:53 GMT+0800 (中国标准时间)
