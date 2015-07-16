
function reversedHammer_1_0(klineJson, i) {
     var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.netsummin_r0x<-0.3*obj.amount_ave_21//106 0.798 2189/11391
&& !(obj.netsummin_r0_40<-0*obj.amount_ave_21)//1 0.798 2195/11398
&& obj.netsummax_r0>1.5*obj.amount_ave_21//0 0.780 3786/18439
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.757 6957/29568
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.735 11310/35356
&& !(obj.netsummin_r0_20<-0*obj.amount_ave_21)//0 0.697 28757/57939
&& obj.marketCap < 4000000000//0 0.650 91408/135263
 && function(a, b, c, d, e) {
                var hidx = klineutil.highItemIndex(klineJson, i-a, i, "close");
                var higherItems = klineutil.higherItemsIndex(klineJson, i-b, i, "close", klineJson[i].low);
                return true
                    && higherItems.length>c 
                    && higherItems.length<d
                    && klineutil.increase(klineJson[i].high, klineJson[hidx].close) > e
            }(55, 20, 0, 15, 5*klineJson[i].amplitude_ave_8)

}
exports.reversedHammer_1_0 = reversedHammer_1_0//Thu Feb 26 2015 22:26:21 GMT+0800 (中国标准时间)

function reversedHammer_1_0(klineJson, i) {
     var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//79 0.799 2279/11567
&& !(obj.netsummin_r0_40<-0.05*obj.amount_ave_21)//4 0.796 2385/12081
&& obj.netsummax_r0>1.5*obj.amount_ave_21//0 0.780 3786/18439
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.757 6957/29568
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.735 11310/35356
&& !(obj.netsummin_r0_20<-0*obj.amount_ave_21)//0 0.697 28757/57939
&& obj.marketCap < 4000000000//0 0.650 91408/135263
 && function(a, b, c, d, e) {
                var hidx = klineutil.highItemIndex(klineJson, i-a, i, "close");
                var higherItems = klineutil.higherItemsIndex(klineJson, i-b, i, "close", klineJson[i].low);
                return true
                    && higherItems.length>c 
                    && higherItems.length<d
                    && klineutil.increase(klineJson[i].high, klineJson[hidx].close) > e
            }(55, 20, 0, 15, 5*klineJson[i].amplitude_ave_8)

}
exports.reversedHammer_1_0 = reversedHammer_1_0//Thu Feb 26 2015 22:27:13 GMT+0800 (中国标准时间)

function reversedHammer_1_0(klineJson, i) {
     var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.netsum_r0_40>-0.1*obj.amount_ave_21//51 0.799 2310/12865
&& obj.close_ave_8<obj.close_ave_233//7 0.793 2804/15519
&& obj.netsummax_r0>1.5*obj.amount_ave_21//0 0.780 3786/18439
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.757 6957/29568
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.735 11310/35356
&& !(obj.netsummin_r0_20<-0*obj.amount_ave_21)//0 0.697 28757/57939
&& obj.marketCap < 4000000000//0 0.650 91408/135263
 && function(a, b, c, d, e) {
                var hidx = klineutil.highItemIndex(klineJson, i-a, i, "close");
                var higherItems = klineutil.higherItemsIndex(klineJson, i-b, i, "close", klineJson[i].low);
                return true
                    && higherItems.length>c 
                    && higherItems.length<d
                    && klineutil.increase(klineJson[i].high, klineJson[hidx].close) > e
            }(55, 20, 0, 15, 5*klineJson[i].amplitude_ave_8)

}
exports.reversedHammer_1_0 = reversedHammer_1_0//Thu Feb 26 2015 22:28:06 GMT+0800 (中国标准时间)

function reversedHammer_1_0(klineJson, i) {
     var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.netsummax_r0_duration>80//59 0.798 2338/13272
&& obj.close_ave_8<obj.close_ave_233//5 0.794 2516/14212
&& obj.netsummax_r0>1.8*obj.amount_ave_21//1 0.782 3419/16877
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.757 6957/29568
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.735 11310/35356
&& !(obj.netsummin_r0_20<-0*obj.amount_ave_21)//0 0.697 28757/57939
&& obj.marketCap < 4000000000//0 0.650 91408/135263
 && function(a, b, c, d, e) {
                var hidx = klineutil.highItemIndex(klineJson, i-a, i, "close");
                var higherItems = klineutil.higherItemsIndex(klineJson, i-b, i, "close", klineJson[i].low);
                return true
                    && higherItems.length>c 
                    && higherItems.length<d
                    && klineutil.increase(klineJson[i].high, klineJson[hidx].close) > e
            }(55, 20, 0, 15, 5*klineJson[i].amplitude_ave_8)

}
exports.reversedHammer_1_0 = reversedHammer_1_0//Thu Feb 26 2015 22:30:48 GMT+0800 (中国标准时间)

function reversedHammer_1_0(klineJson, i) {
     var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.netsummax_r0_duration>80//61 0.798 2343/13368
&& obj.close_ave_8<obj.close_ave_233//3 0.794 2556/14607
&& !(obj.close_ave_233<0.98*obj.close)//55 0.784 2885/16102
&& obj.netsummax_r0>obj.amount_ave_21//7 0.774 4582/21451
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.757 6957/29568
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.735 11310/35356
&& !(obj.netsummin_r0_20<-0*obj.amount_ave_21)//0 0.697 28757/57939
&& obj.marketCap < 4000000000//0 0.650 91408/135263
 && function(a, b, c, d, e) {
                var hidx = klineutil.highItemIndex(klineJson, i-a, i, "close");
                var higherItems = klineutil.higherItemsIndex(klineJson, i-b, i, "close", klineJson[i].low);
                return true
                    && higherItems.length>c 
                    && higherItems.length<d
                    && klineutil.increase(klineJson[i].high, klineJson[hidx].close) > e
            }(55, 20, 0, 15, 5*klineJson[i].amplitude_ave_8)

}
exports.reversedHammer_1_0 = reversedHammer_1_0//Thu Feb 26 2015 22:55:58 GMT+0800 (中国标准时间)

function reversedHammer_1_0(klineJson, i) {
     var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsummin_r0_40<-0.2*obj.amount_ave_21)//42 0.799 2344/12594
&& obj.close_ave_8<obj.close_ave_233//5 0.792 2930/15733
&& obj.netsummax_r0>1.5*obj.amount_ave_21//0 0.778 3963/18716
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//1 0.755 7250/29987
&& !(obj.netsummax_r0_5>0.03*obj.amount_ave_21)//1 0.733 11701/35879
&& !(obj.netsummin_r0_20<-0*obj.amount_ave_21)//0 0.697 28757/57939
&& obj.marketCap < 4000000000//0 0.650 91408/135263
 && function(a, b, c, d, e) {
                var hidx = klineutil.highItemIndex(klineJson, i-a, i, "close");
                var higherItems = klineutil.higherItemsIndex(klineJson, i-b, i, "close", klineJson[i].low);
                return true
                    && higherItems.length>c 
                    && higherItems.length<d
                    && klineutil.increase(klineJson[i].high, klineJson[hidx].close) > e
            }(55, 20, 0, 15, 5*klineJson[i].amplitude_ave_8)

}
exports.reversedHammer_1_0 = reversedHammer_1_0//Thu Feb 26 2015 23:44:38 GMT+0800 (中国标准时间)

function reversedHammer_1_0(klineJson, i) {
     var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.close_ave_8<obj.close_ave_233//0 0.798 2451/14063
&& obj.netsummax_r0>obj.amount_ave_21//6 0.782 3384/16792
&& obj.amount_ave_21<1.05*obj.amount_ave_8//0 0.764 5167/23173
&& !(obj.netsummax_r0_5>0.05*obj.amount_ave_21)//2 0.730 12827/37357
&& !(obj.netsummin_r0_20<-0*obj.amount_ave_21)//0 0.697 28757/57939
&& obj.marketCap < 4000000000//0 0.650 91408/135263
 && function(a, b, c, d, e) {
                var hidx = klineutil.highItemIndex(klineJson, i-a, i, "close");
                var higherItems = klineutil.higherItemsIndex(klineJson, i-b, i, "close", klineJson[i].low);
                return true
                    && higherItems.length>c 
                    && higherItems.length<d
                    && klineutil.increase(klineJson[i].high, klineJson[hidx].close) > e
            }(55, 20, 0, 15, 5*klineJson[i].amplitude_ave_8)

}
exports.reversedHammer_1_0 = reversedHammer_1_0//Fri Feb 27 2015 08:27:41 GMT+0800 (中国标准时间)

function reversedHammer_1_0(klineJson, i) {
     var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.close_ave_8<obj.close_ave_233//1 0.799 2587/11518
&& !(obj.close_ave_8<obj.close_ave_21)//2 0.779 3733/14116
&& obj.netsummax_r0>1.5*obj.amount_ave_21//2 0.753 7265/23323
&& !(obj.netsummax_r0_5>0.05*obj.amount_ave_21)//2 0.730 12827/37357
&& !(obj.netsummin_r0_20<-0*obj.amount_ave_21)//0 0.697 28757/57939
&& obj.marketCap < 4000000000//0 0.650 91408/135263
 && function(a, b, c, d, e) {
                var hidx = klineutil.highItemIndex(klineJson, i-a, i, "close");
                var higherItems = klineutil.higherItemsIndex(klineJson, i-b, i, "close", klineJson[i].low);
                return true
                    && higherItems.length>c 
                    && higherItems.length<d
                    && klineutil.increase(klineJson[i].high, klineJson[hidx].close) > e
            }(55, 20, 0, 15, 5*klineJson[i].amplitude_ave_8)

}
exports.reversedHammer_1_0 = reversedHammer_1_0//Fri Feb 27 2015 09:09:47 GMT+0800 (中国标准时间)

function reversedHammer_1_0(klineJson, i) {
     var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.close_ave_8<1.02*obj.close//108 0.798 2636/11439
&& obj.close_ave_8<obj.close_ave_233//1 0.797 2727/11730
&& !(obj.close_ave_8<obj.close_ave_21)//2 0.776 3963/14422
&& obj.netsummax_r0>1.5*obj.amount_ave_21//2 0.751 7601/23741
&& obj.netsum_r0_5<0.05*obj.amount_ave_21//3 0.728 13362/38000
&& !(obj.netsummin_r0_20<-0*obj.amount_ave_21)//0 0.697 28757/57939
&& obj.marketCap < 4000000000//0 0.650 91408/135263
 && function(a, b, c, d, e) {
                var hidx = klineutil.highItemIndex(klineJson, i-a, i, "close");
                var higherItems = klineutil.higherItemsIndex(klineJson, i-b, i, "close", klineJson[i].low);
                return true
                    && higherItems.length>c 
                    && higherItems.length<d
                    && klineutil.increase(klineJson[i].high, klineJson[hidx].close) > e
            }(55, 20, 0, 15, 5*klineJson[i].amplitude_ave_8)

}
exports.reversedHammer_1_0 = reversedHammer_1_0//Fri Feb 27 2015 09:56:04 GMT+0800 (中国标准时间)

function reversedHammer_1_0(klineJson, i) {
     var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//98 0.799 2720/12672
&& obj.marketCap < 2500000000//39 0.796 2820/13229
&& !(obj.netsummax_r0_10>0.05*obj.amount_ave_21)//16 0.785 3565/14839
&& obj.netsummax_r0>1.5*obj.amount_ave_21//1 0.769 5329/18478
&& !(obj.netsummin_r0_40<-0.15*obj.amount_ave_21)//2 0.745 9633/29590
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.716 22131/55448
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//1 0.689 34612/69960
&& obj.marketCap < 4000000000//0 0.650 91408/135263
 && function(a, b, c, d, e) {
                var hidx = klineutil.highItemIndex(klineJson, i-a, i, "close");
                var higherItems = klineutil.higherItemsIndex(klineJson, i-b, i, "close", klineJson[i].low);
                return true
                    && higherItems.length>c 
                    && higherItems.length<d
                    && klineutil.increase(klineJson[i].high, klineJson[hidx].close) > e
            }(55, 20, 0, 15, 5*klineJson[i].amplitude_ave_8)

}
exports.reversedHammer_1_0 = reversedHammer_1_0//Fri Feb 27 2015 10:38:11 GMT+0800 (中国标准时间)
