
function lowRedsB_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;
    
    return !(obj.netsummin_r0_10>obj.netsummin_r0_20)//0 0.799 1819/14643
&& !(obj.netsummin_r0_5<-0.05*obj.amount_ave_21)//0 0.783 3276/18151
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.2*obj.amount_ave_21//0 0.761 6691/23486
&& obj.netsum_r0_10<0.05*obj.amount_ave_21//0 0.739 12315/38136
&& obj.marketCap < 2000000000//0 0.712 26620/59093
&& obj.amount_ave_21<1.05*obj.amount_ave_8//0 0.687 45115/85999
&& obj.marketCap < 3000000000//0 0.649 102391/157345
 && function (a, b, c) {    
            var higherItems = klineutil.higherItemsIndex(klineJson, i-a, i, "low", klineJson[i].high);
            return i-higherItems[higherItems.length-1] > b && higherItems.length>c;
        }(55, 10, 20)
}
exports.lowRedsB_1_0 = lowRedsB_1_0//Sun Mar 08 2015 13:34:19 GMT+0800 (中国标准时间)

function lowRedsB_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;
    
    return obj.close_ave_8<1.02*obj.close//109 0.798 1828/11378
&& !(obj.turnover_ave_8>1.2*obj.turnover)//11 0.797 1886/11542
&& obj.netsum_r0_20>-0.05*obj.amount_ave_21//1 0.786 2805/16047
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.2*obj.amount_ave_21//0 0.761 6691/23486
&& obj.netsum_r0_10<0.05*obj.amount_ave_21//0 0.739 12315/38136
&& obj.marketCap < 2000000000//0 0.712 26620/59093
&& obj.amount_ave_21<1.05*obj.amount_ave_8//0 0.687 45115/85999
&& obj.marketCap < 3000000000//0 0.649 102391/157345
 && function (a, b, c) {    
            var higherItems = klineutil.higherItemsIndex(klineJson, i-a, i, "low", klineJson[i].high);
            return i-higherItems[higherItems.length-1] > b && higherItems.length>c;
        }(55, 10, 20)
}
exports.lowRedsB_1_0 = lowRedsB_1_0//Sun Mar 08 2015 13:35:08 GMT+0800 (中国标准时间)

function lowRedsB_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;
    
    return !(obj.amount_ave_8<0.5*obj.amount)//48 0.800 1855/14064
&& !(obj.netsummin_r0_20<-0.1*obj.amount_ave_21)//8 0.795 2020/14859
&& obj.netsummin_r0_10===obj.netsummin_r0_20//2 0.778 3962/18171
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.2*obj.amount_ave_21//0 0.761 6691/23486
&& obj.netsum_r0_10<0.05*obj.amount_ave_21//0 0.739 12315/38136
&& obj.marketCap < 2000000000//0 0.712 26620/59093
&& obj.amount_ave_21<1.05*obj.amount_ave_8//0 0.687 45115/85999
&& obj.marketCap < 3000000000//0 0.649 102391/157345
 && function (a, b, c) {    
            var higherItems = klineutil.higherItemsIndex(klineJson, i-a, i, "low", klineJson[i].high);
            return i-higherItems[higherItems.length-1] > b && higherItems.length>c;
        }(55, 10, 20)
}
exports.lowRedsB_1_0 = lowRedsB_1_0//Sun Mar 08 2015 13:35:57 GMT+0800 (中国标准时间)

function lowRedsB_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;
    
    return !(obj.amount_ave_8<0.5*obj.amount)//18 0.799 2356/11968
&& !(obj.turnover_ave_8>1.2*obj.turnover)//14 0.790 2737/12998
&& obj.netsummin_r0_10===obj.netsummin_r0_20//2 0.778 3962/18171
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.2*obj.amount_ave_21//0 0.761 6691/23486
&& obj.netsum_r0_10<0.05*obj.amount_ave_21//0 0.739 12315/38136
&& obj.marketCap < 2000000000//0 0.712 26620/59093
&& obj.amount_ave_21<1.05*obj.amount_ave_8//0 0.687 45115/85999
&& obj.marketCap < 3000000000//0 0.649 102391/157345
 && function (a, b, c) {    
            var higherItems = klineutil.higherItemsIndex(klineJson, i-a, i, "low", klineJson[i].high);
            return i-higherItems[higherItems.length-1] > b && higherItems.length>c;
        }(55, 10, 20)
}
exports.lowRedsB_1_0 = lowRedsB_1_0//Sun Mar 08 2015 13:36:20 GMT+0800 (中国标准时间)

function lowRedsB_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;
    
    return !(obj.amount_ave_8<0.5*obj.amount)//27 0.800 2273/14085
&& !(obj.turnover_ave_21>1.2*obj.turnover)//8 0.794 2470/14988
&& !(obj.netsummin_r0_5<-0.05*obj.amount_ave_21)//0 0.783 3274/18149
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.2*obj.amount_ave_21//0 0.761 6687/23481
&& obj.netsum_r0_10<0.05*obj.amount_ave_21//0 0.739 12315/38136
&& obj.marketCap < 2000000000//0 0.712 26620/59093
&& obj.amount_ave_21<1.05*obj.amount_ave_8//0 0.687 45115/85999
&& obj.marketCap < 3000000000//0 0.649 102391/157345
 && function (a, b, c) {    
            var higherItems = klineutil.higherItemsIndex(klineJson, i-a, i, "low", klineJson[i].high);
            return i-higherItems[higherItems.length-1] > b && higherItems.length>c;
        }(55, 10, 20)
}
exports.lowRedsB_1_0 = lowRedsB_1_0//Sun Mar 08 2015 13:42:23 GMT+0800 (中国标准时间)

function lowRedsB_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;
    
    return !(obj.amount_ave_8<0.5*obj.amount)//18 0.799 2357/11969
&& !(obj.turnover_ave_8>1.2*obj.turnover)//15 0.790 2738/12999
&& !(obj.netsummin_r0_10>obj.netsummin_r0_20)//2 0.778 3958/18166
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.2*obj.amount_ave_21//0 0.761 6687/23481
&& obj.netsum_r0_10<0.05*obj.amount_ave_21//0 0.739 12315/38136
&& obj.marketCap < 2000000000//0 0.712 26620/59093
&& obj.amount_ave_21<1.05*obj.amount_ave_8//0 0.687 45115/85999
&& obj.marketCap < 3000000000//0 0.649 102391/157345
 && function (a, b, c) {    
            var higherItems = klineutil.higherItemsIndex(klineJson, i-a, i, "low", klineJson[i].high);
            return i-higherItems[higherItems.length-1] > b && higherItems.length>c;
        }(55, 10, 20)
}
exports.lowRedsB_1_0 = lowRedsB_1_0//Sun Mar 08 2015 13:43:39 GMT+0800 (中国标准时间)
