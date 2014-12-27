
function wBottom_a_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.marketCap < 5000000000//115 0.800 10145/21843
&& obj.netsum_r0_above>obj.netsum_r0_below*4//19 0.798 10730/22702
&& obj.netsummax_r0_duration>60//33 0.785 13060/25461
&& obj.close_ave_8<obj.close_ave_144//45 0.774 16044/30275
&& obj.netsummax_r0x_20>0.1*obj.amount_ave_21//1 0.764 18418/33435
&& obj.amount_ave_21<1.5*obj.amount//0 0.736 36776/63276
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.699 66572/99001
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (25,10, -1.25,0.18) 
}
exports.wBottom_a_0 = wBottom_a_0//Sat Dec 13 2014 12:26:26 GMT+0800 (中国标准时间)

function wBottom_a_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.netsummax_r0_duration>80//23 0.801 10174/22777
&& obj.amount_ave_21<1.5*obj.amount_ave_8//29 0.790 12283/27290
&& obj.netsummin_r0_5===obj.netsummin_r0_10//20 0.777 15086/30110
&& obj.netsummax_r0x_20>0.05*obj.amount_ave_21//2 0.760 20675/37861
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.715 46796/76274
&& obj.netsum_r0_above>obj.netsum_r0_below*6//1 0.665 113492/150472
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (25,10, -1.25,0.18) 
}
exports.wBottom_a_0 = wBottom_a_0//Sat Dec 13 2014 16:22:05 GMT+0800 (中国标准时间)

function wBottom_a_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.close_ave_8<obj.close_ave_144//93 0.801 10217/22439
&& obj.netsummax_r0_duration>80//34 0.797 10751/23445
&& obj.amount_ave_21<1.5*obj.amount//38 0.787 12927/27982
&& obj.amount_ave_21<1.5*obj.amount_ave_8//26 0.775 16973/34147
&& obj.netsummax_r0x_20>0.05*obj.amount_ave_21//2 0.760 20675/37861
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.715 46796/76274
&& obj.netsum_r0_above>obj.netsum_r0_below*6//1 0.665 113492/150472
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (25,10, -1.25,0.18) 
}
exports.wBottom_a_0 = wBottom_a_0//Sat Dec 13 2014 16:51:49 GMT+0800 (中国标准时间)

function wBottom_a_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsummax_r0_40+obj.netsummin_r0x_40>0)//133 0.800 10487/22703
&& obj.netsummax_r0_duration>80//32 0.797 10953/23491
&& obj.netsummax_r0_10===-0.0*obj.amount_ave_21//44 0.786 13260/28170
&& obj.amount_ave_21<1.5*obj.amount_ave_8//26 0.775 16973/34147
&& obj.netsummax_r0x_20>0.05*obj.amount_ave_21//2 0.760 20675/37861
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.715 46796/76274
&& obj.netsum_r0_above>obj.netsum_r0_below*6//1 0.665 113492/150472
 && function(m, n, p1, p2) {
        var rightBottomIdx = klineutil.lowItemIndex(klineJson, i - n, i, "low");
        var midTopIdx = klineutil.highItemIndex(klineJson, rightBottomIdx - n, rightBottomIdx, "high");
        var leftBottomIdx = klineutil.lowItemIndex(klineJson, midTopIdx - n, midTopIdx, "low");
        var leftTopIdx = klineutil.highItemIndex(klineJson, leftBottomIdx - m, leftBottomIdx, "high");
        return klineutil.increase(klineJson[midTopIdx].high, klineJson[i].close) > p1
            && klineutil.increase(klineJson[midTopIdx].high, klineJson[leftTopIdx].high) > p2
    } (25,10, -1.25,0.18) 
}
exports.wBottom_a_0 = wBottom_a_0//Sat Dec 13 2014 16:56:58 GMT+0800 (中国标准时间)
