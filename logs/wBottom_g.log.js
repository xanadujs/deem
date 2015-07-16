
function wBottom_g_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsummin_r0_10<-0.05*obj.amount_ave_21)//0 0.799 3259/19779
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.2*obj.amount_ave_21//0 0.776 6309/27692
&& obj.amount_ave_21<1.5*obj.amount//0 0.745 17615/59008
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.709 39748/91109
&& obj.marketCap < 4000000000//0 0.662 118233/187805
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return true
            // klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (25,10, -1.25,0.18) 

}
exports.wBottom_g_0 = wBottom_g_0//Sat Mar 21 2015 23:41:06 GMT+0800 (中国标准时间)

function wBottom_g_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_21<0.7*obj.amount_ave_8)//51 0.799 3516/18960
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.5*obj.amount_ave_21//41 0.790 4127/21510
&& !(obj.netsummin_r0_40<-0.15*obj.amount_ave_21)//1 0.779 5657/27045
&& obj.amount_ave_21<1.5*obj.amount//0 0.745 17615/59008
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.709 39748/91109
&& obj.marketCap < 4000000000//0 0.662 118233/187805
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return true
            // klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (25,10, -1.25,0.18) 

}
exports.wBottom_g_0 = wBottom_g_0//Sat Mar 21 2015 23:44:53 GMT+0800 (中国标准时间)

function wBottom_g_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_21<0.5*obj.amount)//133 0.798 4024/22304
&& obj.close_ave_8<obj.close_ave_144//21 0.795 4180/24307
&& !(obj.netsummin_r0_5<-0.05*obj.amount_ave_21)//2 0.784 5652/27585
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.3*obj.amount_ave_21//2 0.767 8434/34170
&& obj.amount_ave_21<1.5*obj.amount//0 0.745 17615/59008
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.709 39748/91109
&& obj.marketCap < 4000000000//0 0.662 118233/187805
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return true
            // klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (25,10, -1.25,0.18) 

}
exports.wBottom_g_0 = wBottom_g_0//Sat Mar 21 2015 23:48:18 GMT+0800 (中国标准时间)

function wBottom_g_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.netsum_r0_above>0.1*obj.amount_ave_21//54 0.799 4037/19652
&& !(obj.netsum_r0_below>0.04*obj.amount_ave_21)//20 0.791 4604/21215
&& !(obj.netsum_r0_10<-0.02*obj.amount_ave_21)//1 0.778 6249/26057
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.3*obj.amount_ave_21//2 0.752 12311/38467
&& obj.netsummax_r0_10===-0.0*obj.amount_ave_21//1 0.720 29303/73326
&& obj.marketCap < 4000000000//0 0.662 118233/187805
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return true
            // klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (25,10, -1.25,0.18) 

}
exports.wBottom_g_0 = wBottom_g_0//Sun Mar 22 2015 00:56:25 GMT+0800 (中国标准时间)

function wBottom_g_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsummax_r0_20>0.5*obj.amount_ave_21)//109 0.799 4044/19864
&& !(obj.netsummin_r0_5<-0.05*obj.amount_ave_21)//19 0.796 4328/20299
&& obj.netsummax_r0_duration>60//12 0.785 5263/23686
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.3*obj.amount_ave_21//1 0.768 7749/29026
&& obj.netsummax_r0_10===-0.0*obj.amount_ave_21//0 0.730 20300/57347
&& !(obj.netsum_r0_below>0.0*obj.amount_ave_21)//2 0.695 50118/101895
&& obj.marketCap < 4000000000//0 0.662 118233/187805
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return true
            // klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (25,10, -1.25,0.18) 

}
exports.wBottom_g_0 = wBottom_g_0//Sun Mar 22 2015 04:01:00 GMT+0800 (中国标准时间)

function wBottom_g_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.netsum_r0x_40<-0.1*obj.amount_ave_21//83 0.799 4300/20597
&& !(obj.netsummin_r0_5<-0.05*obj.amount_ave_21)//19 0.794 4764/21736
&& obj.netsummax_r0_duration>40//34 0.782 5839/25393
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.3*obj.amount_ave_21//1 0.768 7749/29026
&& obj.netsummax_r0_10===-0.0*obj.amount_ave_21//0 0.730 20300/57347
&& !(obj.netsum_r0_below>0.0*obj.amount_ave_21)//2 0.695 50118/101895
&& obj.marketCap < 4000000000//0 0.662 118233/187805
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return true
            // klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (25,10, -1.25,0.18) 

}
exports.wBottom_g_0 = wBottom_g_0//Sun Mar 22 2015 04:03:09 GMT+0800 (中国标准时间)
