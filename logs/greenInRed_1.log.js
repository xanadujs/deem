
function greenInRed_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.netsum_r0x_40<-0.1*obj.amount_ave_21//21 0.799 1028/2898
&& !(obj.amount_ave_8<0.5*obj.amount)//0 0.792 1182/3163
&& obj.amount_ave_21<1.05*obj.amount_ave_8//4 0.775 1347/3488
&& klineutil.increase(obj.open, obj.close)>0.7*obj.amplitude_ave_8//1 0.757 2009/4571
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.2*obj.amount_ave_21//0 0.731 3028/6391
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//2 0.683 7923/13836
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.650 15051/21366
 && function(a, b, c, d, e){
            var lowerItems = klineutil.lowerItemsIndex(klineJson, i-a, i, "close", klineJson[i].low);
            return  klineutil.increase(klineJson[i].open, klineJson[i].close) > d//0.5*obj.amplitude_ave_8 //d
                && klineutil.increase(klineJson[i-1].open, klineJson[i-1].close) < e
                && lowerItems.length > b && lowerItems.length < c;
        }(120, 0, 45, 0.02, 0)

}
exports.greenInRed_1_0 = greenInRed_1_0//Sun Mar 08 2015 14:38:55 GMT+0800 (中国标准时间)

function greenInRed_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.close_ave_21<1.05*obj.close//53 0.799 1173/2896
&& klineutil.increase(obj.open, obj.close)>0.9*obj.amplitude_ave_8//0 0.795 1215/2957
&& !(obj.amount_ave_8<0.5*obj.amount)//3 0.760 2252/4975
&& klineutil.increase(obj.open, obj.close)>0.7*obj.amplitude_ave_8//1 0.744 2545/5490
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.3*obj.amount_ave_21//1 0.717 3848/7769
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//2 0.683 7923/13836
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.650 15051/21366
 && function(a, b, c, d, e){
            var lowerItems = klineutil.lowerItemsIndex(klineJson, i-a, i, "close", klineJson[i].low);
            return  klineutil.increase(klineJson[i].open, klineJson[i].close) > d//0.5*obj.amplitude_ave_8 //d
                && klineutil.increase(klineJson[i-1].open, klineJson[i-1].close) < e
                && lowerItems.length > b && lowerItems.length < c;
        }(120, 0, 45, 0.02, 0)

}
exports.greenInRed_1_0 = greenInRed_1_0//Sun Mar 08 2015 14:40:57 GMT+0800 (中国标准时间)
