
function hammer_1_0(klineJson, i) {
     var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.netsummax_r0>obj.amount_ave_21//1 0.799 1059/11528
&& obj.netsum_r0_below_60===0.0*obj.amount_ave_21//0 0.787 1728/16114
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.2*obj.amount_ave_21//0 0.766 4180/22072
&& !(obj.netsummin_r0_20<-0*obj.amount_ave_21)//0 0.744 8489/37817
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.709 24742/65666
&& obj.amount_ave_21<1.05*obj.amount_ave_8//0 0.654 82751/132716
&& obj.marketCap < 3000000000//0 0.616 177476/243927
 && function(a, b, c, d) {

            var linehigh = klineJson[i].high - Math.max(klineJson[i].close, klineJson[i].open);
            var linelow = Math.min(klineJson[i].close, klineJson[i].open) - klineJson[i].low;
            var entity = Math.abs(klineJson[i].close - klineJson[i].open);
            var inc_ave = klineJson[i].inc_ave_8;
            var hidx = klineutil.highItemIndex(klineJson, i-a, i, "close");
            var higherItems = klineutil.higherItemsIndex(klineJson, i-b, i, "close", klineJson[i].low);
            
            return higherItems.length<c
                        && klineutil.increase(klineJson[i].open, klineJson[hidx].close) > d * klineJson[i].amplitude_ave_8
            
        }(55, 12, 11, 4)
}
exports.hammer_1_0 = hammer_1_0//Sun Mar 01 2015 12:18:27 GMT+0800 (中国标准时间)

function hammer_1_0(klineJson, i) {
     var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//3 0.801 1148/13392
&& obj.netsum_r0_below===0.0*obj.amount_ave_21//1 0.794 1263/14187
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.2*obj.amount_ave_21//0 0.766 4180/22072
&& !(obj.netsummin_r0_20<-0*obj.amount_ave_21)//0 0.744 8489/37817
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.709 24742/65666
&& obj.amount_ave_21<1.05*obj.amount_ave_8//0 0.654 82751/132716
&& obj.marketCap < 3000000000//0 0.616 177476/243927
 && function(a, b, c, d) {

            var linehigh = klineJson[i].high - Math.max(klineJson[i].close, klineJson[i].open);
            var linelow = Math.min(klineJson[i].close, klineJson[i].open) - klineJson[i].low;
            var entity = Math.abs(klineJson[i].close - klineJson[i].open);
            var inc_ave = klineJson[i].inc_ave_8;
            var hidx = klineutil.highItemIndex(klineJson, i-a, i, "close");
            var higherItems = klineutil.higherItemsIndex(klineJson, i-b, i, "close", klineJson[i].low);
            
            return higherItems.length<c
                        && klineutil.increase(klineJson[i].open, klineJson[hidx].close) > d * klineJson[i].amplitude_ave_8
            
        }(55, 12, 11, 4)
}
exports.hammer_1_0 = hammer_1_0//Sun Mar 01 2015 12:19:21 GMT+0800 (中国标准时间)

function hammer_1_0(klineJson, i) {
     var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.netsummax_r0_duration>80//54 0.798 1372/10553
&& obj.netsummax_r0>1.5*obj.amount_ave_21//0 0.795 1473/11347
&& obj.close_ave_8<obj.close_ave_233//6 0.778 2956/18263
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.2*obj.amount_ave_21//0 0.766 4180/22072
&& !(obj.netsummin_r0_20<-0*obj.amount_ave_21)//0 0.744 8489/37817
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.709 24742/65666
&& obj.amount_ave_21<1.05*obj.amount_ave_8//0 0.654 82751/132716
&& obj.marketCap < 3000000000//0 0.616 177476/243927
 && function(a, b, c, d) {

            var linehigh = klineJson[i].high - Math.max(klineJson[i].close, klineJson[i].open);
            var linelow = Math.min(klineJson[i].close, klineJson[i].open) - klineJson[i].low;
            var entity = Math.abs(klineJson[i].close - klineJson[i].open);
            var inc_ave = klineJson[i].inc_ave_8;
            var hidx = klineutil.highItemIndex(klineJson, i-a, i, "close");
            var higherItems = klineutil.higherItemsIndex(klineJson, i-b, i, "close", klineJson[i].low);
            
            return higherItems.length<c
                        && klineutil.increase(klineJson[i].open, klineJson[hidx].close) > d * klineJson[i].amplitude_ave_8
            
        }(55, 12, 11, 4)
}
exports.hammer_1_0 = hammer_1_0//Sun Mar 01 2015 12:23:48 GMT+0800 (中国标准时间)

function hammer_1_0(klineJson, i) {
     var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.amount_ave_8<1.5*obj.amount//8 0.799 1442/11368
&& obj.netsummax_r0>obj.amount_ave_21//3 0.790 1868/13225
&& obj.close_ave_8<obj.close_ave_233//6 0.778 2956/18263
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.2*obj.amount_ave_21//0 0.766 4180/22072
&& !(obj.netsummin_r0_20<-0*obj.amount_ave_21)//0 0.744 8489/37817
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.709 24742/65666
&& obj.amount_ave_21<1.05*obj.amount_ave_8//0 0.654 82751/132716
&& obj.marketCap < 3000000000//0 0.616 177476/243927
 && function(a, b, c, d) {

            var linehigh = klineJson[i].high - Math.max(klineJson[i].close, klineJson[i].open);
            var linelow = Math.min(klineJson[i].close, klineJson[i].open) - klineJson[i].low;
            var entity = Math.abs(klineJson[i].close - klineJson[i].open);
            var inc_ave = klineJson[i].inc_ave_8;
            var hidx = klineutil.highItemIndex(klineJson, i-a, i, "close");
            var higherItems = klineutil.higherItemsIndex(klineJson, i-b, i, "close", klineJson[i].low);
            
            return higherItems.length<c
                        && klineutil.increase(klineJson[i].open, klineJson[hidx].close) > d * klineJson[i].amplitude_ave_8
            
        }(55, 12, 11, 4)
}
exports.hammer_1_0 = hammer_1_0//Sun Mar 01 2015 12:24:40 GMT+0800 (中国标准时间)

function hammer_1_0(klineJson, i) {
     var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//2 0.799 1613/10806
&& !(obj.turnover_ave_21>1.2*obj.turnover)//13 0.790 1805/11627
&& !(obj.netsummin_r0_40<-0*obj.amount_ave_21)//8 0.780 2526/14323
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.2*obj.amount_ave_21//0 0.766 4180/22072
&& !(obj.netsummin_r0_20<-0*obj.amount_ave_21)//0 0.744 8489/37817
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.709 24742/65666
&& obj.amount_ave_21<1.05*obj.amount_ave_8//0 0.654 82751/132716
&& obj.marketCap < 3000000000//0 0.616 177476/243927
 && function(a, b, c, d) {

            var linehigh = klineJson[i].high - Math.max(klineJson[i].close, klineJson[i].open);
            var linelow = Math.min(klineJson[i].close, klineJson[i].open) - klineJson[i].low;
            var entity = Math.abs(klineJson[i].close - klineJson[i].open);
            var inc_ave = klineJson[i].inc_ave_8;
            var hidx = klineutil.highItemIndex(klineJson, i-a, i, "close");
            var higherItems = klineutil.higherItemsIndex(klineJson, i-b, i, "close", klineJson[i].low);
            
            return higherItems.length<c
                        && klineutil.increase(klineJson[i].open, klineJson[hidx].close) > d * klineJson[i].amplitude_ave_8
            
        }(55, 12, 11, 4)
}
exports.hammer_1_0 = hammer_1_0//Sun Mar 01 2015 12:32:25 GMT+0800 (中国标准时间)

function hammer_1_0(klineJson, i) {
     var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//7 0.799 1665/10199
&& obj.amount_ave_8<1.5*obj.amount//2 0.791 1834/10892
&& !(obj.netsummin_r0_40<-0.05*obj.amount_ave_21)//1 0.777 2462/12886
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.1*obj.amount_ave_21//2 0.756 5044/22133
&& !(obj.netsummin_r0_10<-0.05*obj.amount_ave_21)//3 0.731 12671/46572
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.709 24742/65666
&& obj.amount_ave_21<1.05*obj.amount_ave_8//0 0.654 82751/132716
&& obj.marketCap < 3000000000//0 0.616 177476/243927
 && function(a, b, c, d) {

            var linehigh = klineJson[i].high - Math.max(klineJson[i].close, klineJson[i].open);
            var linelow = Math.min(klineJson[i].close, klineJson[i].open) - klineJson[i].low;
            var entity = Math.abs(klineJson[i].close - klineJson[i].open);
            var inc_ave = klineJson[i].inc_ave_8;
            var hidx = klineutil.highItemIndex(klineJson, i-a, i, "close");
            var higherItems = klineutil.higherItemsIndex(klineJson, i-b, i, "close", klineJson[i].low);
            
            return higherItems.length<c
                        && klineutil.increase(klineJson[i].open, klineJson[hidx].close) > d * klineJson[i].amplitude_ave_8
            
        }(55, 12, 11, 4)
}
exports.hammer_1_0 = hammer_1_0//Sun Mar 01 2015 16:52:35 GMT+0800 (中国标准时间)
