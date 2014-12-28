
function sidewaysCompression_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//100 0.800 5170/19251
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.4*obj.amount_ave_21//5 0.794 5601/20462
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//6 0.778 8208/28694
&& obj.amount_ave_21<1*obj.amount_ave_8//0 0.756 15365/37706
&& obj.netsummin_r0_20===-0*obj.amount_ave_21//0 0.707 49514/84448
&& obj.marketCap < 2000000000//0 0.663 136519/183981
 && !function(m, n, k) {
        var hidx = klineutil.highItemIndex(klineJson, i-m, i-1, "close");
        var hval = klineJson[hidx].close;
        
        var lidx = klineutil.lowItemIndex(klineJson, hidx, i, "close");
        var lval = klineJson[lidx].close;

        var plidx = klineutil.lowItemIndex(klineJson, hidx-n, hidx, "close");
        var plval = klineJson[plidx].close;

        var downhpl = klineutil.increase(plval, hval);    
        var downhl = klineutil.increase(lval, hval);
    
        return downhpl>k*downhl;;
    }(30,40,0.6)
}
exports.sidewaysCompression_1_0 = sidewaysCompression_1_0//Sat Dec 27 2014 21:59:56 GMT+0800 (中国标准时间)

function sidewaysCompression_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.close_ave_21<1.03*obj.close//77 0.798 5217/20097
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.5*obj.amount_ave_21//18 0.791 6134/22266
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//6 0.778 8208/28694
&& obj.amount_ave_21<1*obj.amount_ave_8//0 0.756 15365/37706
&& obj.netsummin_r0_20===-0*obj.amount_ave_21//0 0.707 49514/84448
&& obj.marketCap < 2000000000//0 0.663 136519/183981
 && !function(m, n, k) {
        var hidx = klineutil.highItemIndex(klineJson, i-m, i-1, "close");
        var hval = klineJson[hidx].close;
        
        var lidx = klineutil.lowItemIndex(klineJson, hidx, i, "close");
        var lval = klineJson[lidx].close;

        var plidx = klineutil.lowItemIndex(klineJson, hidx-n, hidx, "close");
        var plval = klineJson[plidx].close;

        var downhpl = klineutil.increase(plval, hval);    
        var downhl = klineutil.increase(lval, hval);
    
        return downhpl>k*downhl;;
    }(30,40,0.6)
}
exports.sidewaysCompression_1_0 = sidewaysCompression_1_0//Sat Dec 27 2014 22:00:31 GMT+0800 (中国标准时间)

function sidewaysCompression_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.close_ave_21<1.05*obj.close//83 0.799 5365/17556
&& obj.amount_ave_21<1.5*obj.amount//7 0.792 6265/19186
&& !(obj.netsum_r0_20>0.02*obj.amount_ave_21)//0 0.775 9664/24180
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.3*obj.amount_ave_21//1 0.741 23166/43849
&& obj.netsummin_r0_20===-0*obj.amount_ave_21//0 0.707 49514/84448
&& obj.marketCap < 2000000000//0 0.663 136519/183981
 && !function(m, n, k) {
        var hidx = klineutil.highItemIndex(klineJson, i-m, i-1, "close");
        var hval = klineJson[hidx].close;
        
        var lidx = klineutil.lowItemIndex(klineJson, hidx, i, "close");
        var lval = klineJson[lidx].close;

        var plidx = klineutil.lowItemIndex(klineJson, hidx-n, hidx, "close");
        var plval = klineJson[plidx].close;

        var downhpl = klineutil.increase(plval, hval);    
        var downhl = klineutil.increase(lval, hval);
    
        return downhpl>k*downhl;;
    }(30,40,0.6)
}
exports.sidewaysCompression_1_0 = sidewaysCompression_1_0//Sat Dec 27 2014 22:03:41 GMT+0800 (中国标准时间)

function sidewaysCompression_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsum_r0x_80>0.1*obj.amount_ave_21)//115 0.798 5552/16848
&& obj.close_ave_21<1.05*obj.close//58 0.795 5799/17568
&& obj.netsum_r0_below===0.0*obj.amount_ave_21//41 0.785 7362/20101
&& !(obj.netsum_r0_20>0.02*obj.amount_ave_21)//0 0.775 9664/24180
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.3*obj.amount_ave_21//1 0.741 23166/43849
&& obj.netsummin_r0_20===-0*obj.amount_ave_21//0 0.707 49514/84448
&& obj.marketCap < 2000000000//0 0.663 136519/183981
 && !function(m, n, k) {
        var hidx = klineutil.highItemIndex(klineJson, i-m, i-1, "close");
        var hval = klineJson[hidx].close;
        
        var lidx = klineutil.lowItemIndex(klineJson, hidx, i, "close");
        var lval = klineJson[lidx].close;

        var plidx = klineutil.lowItemIndex(klineJson, hidx-n, hidx, "close");
        var plval = klineJson[plidx].close;

        var downhpl = klineutil.increase(plval, hval);    
        var downhl = klineutil.increase(lval, hval);
    
        return downhpl>k*downhl;;
    }(30,40,0.6)
}
exports.sidewaysCompression_1_0 = sidewaysCompression_1_0//Sat Dec 27 2014 22:05:50 GMT+0800 (中国标准时间)

function sidewaysCompression_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//86 0.800 5740/19414
&& obj.amount_ave_21<1.5*obj.amount//22 0.794 6244/20746
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//15 0.783 8165/24478
&& !(obj.netsummax_r0_10>0.05*obj.amount_ave_21)//3 0.766 13059/29933
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.3*obj.amount_ave_21//1 0.741 23166/43849
&& obj.netsummin_r0_20===-0*obj.amount_ave_21//0 0.707 49514/84448
&& obj.marketCap < 2000000000//0 0.663 136519/183981
 && !function(m, n, k) {
        var hidx = klineutil.highItemIndex(klineJson, i-m, i-1, "close");
        var hval = klineJson[hidx].close;
        
        var lidx = klineutil.lowItemIndex(klineJson, hidx, i, "close");
        var lval = klineJson[lidx].close;

        var plidx = klineutil.lowItemIndex(klineJson, hidx-n, hidx, "close");
        var plval = klineJson[plidx].close;

        var downhpl = klineutil.increase(plval, hval);    
        var downhl = klineutil.increase(lval, hval);
    
        return downhpl>k*downhl;;
    }(30,40,0.6)
}
exports.sidewaysCompression_1_0 = sidewaysCompression_1_0//Sat Dec 27 2014 22:21:21 GMT+0800 (中国标准时间)

function sidewaysCompression_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//79 0.798 5954/19698
&& obj.amount_ave_21<1.5*obj.amount//28 0.792 6464/21036
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//16 0.781 8426/24815
&& obj.netsum_r0_10<0.05*obj.amount_ave_21//4 0.765 13356/30307
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.3*obj.amount_ave_21//1 0.741 23166/43849
&& obj.netsummin_r0_20===-0*obj.amount_ave_21//0 0.707 49514/84448
&& obj.marketCap < 2000000000//0 0.663 136519/183981
 && !function(m, n, k) {
        var hidx = klineutil.highItemIndex(klineJson, i-m, i-1, "close");
        var hval = klineJson[hidx].close;
        
        var lidx = klineutil.lowItemIndex(klineJson, hidx, i, "close");
        var lval = klineJson[lidx].close;

        var plidx = klineutil.lowItemIndex(klineJson, hidx-n, hidx, "close");
        var plval = klineJson[plidx].close;

        var downhpl = klineutil.increase(plval, hval);    
        var downhl = klineutil.increase(lval, hval);
    
        return downhpl>k*downhl;;
    }(30,40,0.6)
}
exports.sidewaysCompression_1_0 = sidewaysCompression_1_0//Sat Dec 27 2014 22:25:30 GMT+0800 (中国标准时间)

function sidewaysCompression_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsummin_r0_5<-0.05*obj.amount_ave_21)//12 0.798 7016/22219
&& obj.amount_ave_21<1.05*obj.amount_ave_8//0 0.781 10033/26471
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.3*obj.amount_ave_21//0 0.739 26642/48641
&& obj.netsummax_r0_10===-0.0*obj.amount_ave_21//1 0.694 67119/105576
&& obj.marketCap < 2000000000//0 0.663 136519/183981
 && !function(m, n, k) {
        var hidx = klineutil.highItemIndex(klineJson, i-m, i-1, "close");
        var hval = klineJson[hidx].close;
        
        var lidx = klineutil.lowItemIndex(klineJson, hidx, i, "close");
        var lval = klineJson[lidx].close;

        var plidx = klineutil.lowItemIndex(klineJson, hidx-n, hidx, "close");
        var plval = klineJson[plidx].close;

        var downhpl = klineutil.increase(plval, hval);    
        var downhl = klineutil.increase(lval, hval);
    
        return downhpl>k*downhl;;
    }(30,40,0.6)
}
exports.sidewaysCompression_1_0 = sidewaysCompression_1_0//Sat Dec 27 2014 22:59:25 GMT+0800 (中国标准时间)

function sidewaysCompression_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.close_ave_21<1.05*obj.close//82 0.798 7245/23464
&& !(obj.netsummin_r0_5<-0.05*obj.amount_ave_21)//12 0.792 8119/25271
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.4*obj.amount_ave_21//3 0.776 11603/30121
&& obj.amount_ave_21<1.05*obj.amount_ave_8//1 0.754 18810/44810
&& obj.netsummax_r0_10===-0.0*obj.amount_ave_21//1 0.694 67119/105576
&& obj.marketCap < 2000000000//0 0.663 136519/183981
 && !function(m, n, k) {
        var hidx = klineutil.highItemIndex(klineJson, i-m, i-1, "close");
        var hval = klineJson[hidx].close;
        
        var lidx = klineutil.lowItemIndex(klineJson, hidx, i, "close");
        var lval = klineJson[lidx].close;

        var plidx = klineutil.lowItemIndex(klineJson, hidx-n, hidx, "close");
        var plval = klineJson[plidx].close;

        var downhpl = klineutil.increase(plval, hval);    
        var downhl = klineutil.increase(lval, hval);
    
        return downhpl>k*downhl;;
    }(30,40,0.6)
}
exports.sidewaysCompression_1_0 = sidewaysCompression_1_0//Sat Dec 27 2014 23:12:34 GMT+0800 (中国标准时间)

function sidewaysCompression_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsum_r0x_80>0.1*obj.amount_ave_21)//143 0.798 7272/23028
&& obj.amount_ave_21<1.05*obj.amount_ave_8//2 0.796 7607/24033
&& !(obj.netsum_r0_10<-0.02*obj.amount_ave_21)//2 0.772 13674/34840
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.3*obj.amount_ave_21//0 0.748 22434/47721
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//3 0.713 51938/95566
&& obj.netsummax_r0_10===-0.0*obj.amount_ave_21//1 0.680 89609/135555
&& obj.marketCap < 3000000000//1 0.644 202443/260716
 && !function(m, n, k) {
        var hidx = klineutil.highItemIndex(klineJson, i-m, i-1, "close");
        var hval = klineJson[hidx].close;
        
        var lidx = klineutil.lowItemIndex(klineJson, hidx, i, "close");
        var lval = klineJson[lidx].close;

        var plidx = klineutil.lowItemIndex(klineJson, hidx-n, hidx, "close");
        var plval = klineJson[plidx].close;

        var downhpl = klineutil.increase(plval, hval);    
        var downhl = klineutil.increase(lval, hval);
    
        return downhpl>k*downhl;;
    }(30,40,0.6)
}
exports.sidewaysCompression_1_0 = sidewaysCompression_1_0//Sun Dec 28 2014 13:04:11 GMT+0800 (中国标准时间)
