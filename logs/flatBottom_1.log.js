
function flatBottom_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.netsummax_r0>1.8*obj.amount_ave_21//14 0.799 1390/10591
&& !(obj.netsummin_r0_40<-0.15*obj.amount_ave_21)//0 0.782 2881/18273
&& obj.netsum_r0_below_60===0.0*obj.amount_ave_21//0 0.751 7816/30086
&& !(obj.netsummax_r0_5>0.03*obj.amount_ave_21)//0 0.698 27093/61009
&& obj.amount_ave_21<1.05*obj.amount_ave_8//0 0.663 59245/99495
&& obj.marketCap < 3000000000//0 0.630 125432/178856
 && function (a, b, c, d, e) {
        var td = i-a;
        var inc_ave = klineJson[i].inc_ave_8;
        var hidx = klineutil.highItemIndex(klineJson, td-b, td, "close");
        var higherItems = klineutil.higherItemsIndex(klineJson, td-c, i, "close", klineJson[i].close);
        
        return klineutil.increase(klineJson[i].close, klineJson[hidx].close) > inc_ave*d
            && higherItems.length<e;
    
    }(1,40,13,6,7)

}
exports.flatBottom_1_0 = flatBottom_1_0//Sun Mar 08 2015 12:12:49 GMT+0800 (中国标准时间)

function flatBottom_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.netsum_r0_10<0.05*obj.amount_ave_21//30 0.799 1910/13954
&& obj.amount_ave_21<0.95*obj.amount_ave_8//1 0.791 2352/15245
&& !(obj.netsummin_r0_40<-0.2*obj.amount_ave_21)//2 0.776 3527/20101
&& obj.netsum_r0_below_60===0.0*obj.amount_ave_21//0 0.751 7816/30086
&& !(obj.netsummax_r0_5>0.03*obj.amount_ave_21)//0 0.698 27093/61009
&& obj.amount_ave_21<1.05*obj.amount_ave_8//0 0.663 59245/99495
&& obj.marketCap < 3000000000//0 0.630 125432/178856
 && function (a, b, c, d, e) {
        var td = i-a;
        var inc_ave = klineJson[i].inc_ave_8;
        var hidx = klineutil.highItemIndex(klineJson, td-b, td, "close");
        var higherItems = klineutil.higherItemsIndex(klineJson, td-c, i, "close", klineJson[i].close);
        
        return klineutil.increase(klineJson[i].close, klineJson[hidx].close) > inc_ave*d
            && higherItems.length<e;
    
    }(1,40,13,6,7)

}
exports.flatBottom_1_0 = flatBottom_1_0//Sun Mar 08 2015 12:14:15 GMT+0800 (中国标准时间)

function flatBottom_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//55 0.798 2279/15605
&& obj.amount_ave_21<0.95*obj.amount_ave_8//1 0.793 2463/16565
&& obj.netsum_r0_below===0.0*obj.amount_ave_21//1 0.777 3853/22310
&& obj.netsummax_r0_10===-0.0*obj.amount_ave_21//1 0.732 12028/40255
&& !(obj.netsummax_r0_5>0.03*obj.amount_ave_21)//0 0.698 27093/61009
&& obj.amount_ave_21<1.05*obj.amount_ave_8//0 0.663 59245/99495
&& obj.marketCap < 3000000000//0 0.630 125432/178856
 && function (a, b, c, d, e) {
        var td = i-a;
        var inc_ave = klineJson[i].inc_ave_8;
        var hidx = klineutil.highItemIndex(klineJson, td-b, td, "close");
        var higherItems = klineutil.higherItemsIndex(klineJson, td-c, i, "close", klineJson[i].close);
        
        return klineutil.increase(klineJson[i].close, klineJson[hidx].close) > inc_ave*d
            && higherItems.length<e;
    
    }(1,40,13,6,7)

}
exports.flatBottom_1_0 = flatBottom_1_0//Sun Mar 08 2015 12:45:55 GMT+0800 (中国标准时间)

function flatBottom_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//55 0.798 2280/15606
&& obj.netsummax_r0_10===-0.0*obj.amount_ave_21//3 0.793 2466/16568
&& obj.amount_ave_21<0.95*obj.amount_ave_8//9 0.776 4054/19333
&& obj.netsum_r0_below===0.0*obj.amount_ave_21//0 0.761 5983/25898
&& !(obj.netsum_r0_below>0.0*obj.amount_ave_21)//2 0.732 12000/37572
&& !(obj.netsummax_r0_5>0.03*obj.amount_ave_21)//0 0.698 27093/61009
&& obj.amount_ave_21<1.05*obj.amount_ave_8//0 0.663 59245/99495
&& obj.marketCap < 3000000000//0 0.630 125432/178856
 && function (a, b, c, d, e) {
        var td = i-a;
        var inc_ave = klineJson[i].inc_ave_8;
        var hidx = klineutil.highItemIndex(klineJson, td-b, td, "close");
        var higherItems = klineutil.higherItemsIndex(klineJson, td-c, i, "close", klineJson[i].close);
        
        return klineutil.increase(klineJson[i].close, klineJson[hidx].close) > inc_ave*d
            && higherItems.length<e;
    
    }(1,40,13,6,7)

}
exports.flatBottom_1_0 = flatBottom_1_0//Sun Mar 08 2015 13:07:54 GMT+0800 (中国标准时间)
