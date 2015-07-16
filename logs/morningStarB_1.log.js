
function morningStarB_1_0(klineJson, i) {

    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.netsum_r0_20>=0.0*obj.amount_ave_21//1 0.798 1719/13279
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.3*obj.amount_ave_21//0 0.775 4139/19514
&& !(obj.turnover_ave_21>1.2*obj.turnover)//0 0.736 12566/38582
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.703 24166/57760
&& obj.amount_ave_21<1.05*obj.amount_ave_8//0 0.661 67080/106104
&& obj.marketCap < 4000000000//0 0.635 137777/196319
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.601 244673/306674
 && function(m, n, k){
            var midhigh = Math.max(klineJson[i-1].open, klineJson[i-1].close);
            var lower = klineutil.lowerItemsIndex(klineJson, i-m, i-2, "low", klineJson[i-2].high);

            return klineutil.increase(midhigh, klineJson[i-2].close) > -klineJson[i].amplitude_ave_8*n
                && lower.length<k
        }(75, 10, 22)
}
exports.morningStarB_1_0 = morningStarB_1_0//Sun Mar 08 2015 19:44:19 GMT+0800 (中国标准时间)

function morningStarB_1_0(klineJson, i) {

    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//15 0.799 2007/14887
&& !(obj.netsummin_r0_20<-0.1*obj.amount_ave_21)//0 0.791 2278/16091
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.4*obj.amount_ave_21//1 0.767 5334/22743
&& !(obj.turnover_ave_21>1.2*obj.turnover)//0 0.736 12566/38582
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.703 24166/57760
&& obj.amount_ave_21<1.05*obj.amount_ave_8//0 0.661 67080/106104
&& obj.marketCap < 4000000000//0 0.635 137777/196319
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.601 244673/306674
 && function(m, n, k){
            var midhigh = Math.max(klineJson[i-1].open, klineJson[i-1].close);
            var lower = klineutil.lowerItemsIndex(klineJson, i-m, i-2, "low", klineJson[i-2].high);

            return klineutil.increase(midhigh, klineJson[i-2].close) > -klineJson[i].amplitude_ave_8*n
                && lower.length<k
        }(75, 10, 22)
}
exports.morningStarB_1_0 = morningStarB_1_0//Sun Mar 08 2015 19:45:28 GMT+0800 (中国标准时间)

function morningStarB_1_0(klineJson, i) {

    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.netsummin_r0x_40<-0.2*obj.amount_ave_21//149 0.799 2129/13091
&& obj.close_ave_8<1*obj.close//1 0.797 2175/13242
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.2*obj.amount_ave_21//3 0.784 3167/16070
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.4*obj.amount_ave_21//1 0.767 5334/22743
&& !(obj.turnover_ave_21>1.2*obj.turnover)//0 0.736 12566/38582
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.703 24166/57760
&& obj.amount_ave_21<1.05*obj.amount_ave_8//0 0.661 67080/106104
&& obj.marketCap < 4000000000//0 0.635 137777/196319
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.601 244673/306674
 && function(m, n, k){
            var midhigh = Math.max(klineJson[i-1].open, klineJson[i-1].close);
            var lower = klineutil.lowerItemsIndex(klineJson, i-m, i-2, "low", klineJson[i-2].high);

            return klineutil.increase(midhigh, klineJson[i-2].close) > -klineJson[i].amplitude_ave_8*n
                && lower.length<k
        }(75, 10, 22)
}
exports.morningStarB_1_0 = morningStarB_1_0//Sun Mar 08 2015 19:47:41 GMT+0800 (中国标准时间)

function morningStarB_1_0(klineJson, i) {

    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsum_r0x_80>obj.netsum_r0_80)//60 0.798 2265/13458
&& obj.close_ave_21<1.03*obj.close//19 0.794 2338/13748
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.2*obj.amount_ave_21//3 0.784 3167/16070
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.4*obj.amount_ave_21//1 0.767 5334/22743
&& !(obj.turnover_ave_21>1.2*obj.turnover)//0 0.736 12566/38582
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.703 24166/57760
&& obj.amount_ave_21<1.05*obj.amount_ave_8//0 0.661 67080/106104
&& obj.marketCap < 4000000000//0 0.635 137777/196319
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.601 244673/306674
 && function(m, n, k){
            var midhigh = Math.max(klineJson[i-1].open, klineJson[i-1].close);
            var lower = klineutil.lowerItemsIndex(klineJson, i-m, i-2, "low", klineJson[i-2].high);

            return klineutil.increase(midhigh, klineJson[i-2].close) > -klineJson[i].amplitude_ave_8*n
                && lower.length<k
        }(75, 10, 22)
}
exports.morningStarB_1_0 = morningStarB_1_0//Sun Mar 08 2015 19:48:13 GMT+0800 (中国标准时间)

function morningStarB_1_0(klineJson, i) {

    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//21 0.800 2345/13585
&& obj.close_ave_8<1.02*obj.close//23 0.792 2646/14663
&& obj.amount_ave_21<0.95*obj.amount_ave_8//12 0.781 3408/16234
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.4*obj.amount_ave_21//1 0.767 5334/22743
&& !(obj.turnover_ave_21>1.2*obj.turnover)//0 0.736 12566/38582
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.703 24166/57760
&& obj.amount_ave_21<1.05*obj.amount_ave_8//0 0.661 67080/106104
&& obj.marketCap < 4000000000//0 0.635 137777/196319
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.601 244673/306674
 && function(m, n, k){
            var midhigh = Math.max(klineJson[i-1].open, klineJson[i-1].close);
            var lower = klineutil.lowerItemsIndex(klineJson, i-m, i-2, "low", klineJson[i-2].high);

            return klineutil.increase(midhigh, klineJson[i-2].close) > -klineJson[i].amplitude_ave_8*n
                && lower.length<k
        }(75, 10, 22)
}
exports.morningStarB_1_0 = morningStarB_1_0//Sun Mar 08 2015 19:51:00 GMT+0800 (中国标准时间)

function morningStarB_1_0(klineJson, i) {

    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//20 0.799 2371/13626
&& obj.amount_ave_21<0.95*obj.amount_ave_8//3 0.790 2704/14795
&& obj.close_ave_8<1*obj.close//4 0.775 4315/20636
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.5*obj.amount_ave_21//3 0.760 6530/25732
&& !(obj.turnover_ave_21>1.2*obj.turnover)//0 0.736 12566/38582
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.703 24166/57760
&& obj.amount_ave_21<1.05*obj.amount_ave_8//0 0.661 67080/106104
&& obj.marketCap < 4000000000//0 0.635 137777/196319
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.601 244673/306674
 && function(m, n, k){
            var midhigh = Math.max(klineJson[i-1].open, klineJson[i-1].close);
            var lower = klineutil.lowerItemsIndex(klineJson, i-m, i-2, "low", klineJson[i-2].high);

            return klineutil.increase(midhigh, klineJson[i-2].close) > -klineJson[i].amplitude_ave_8*n
                && lower.length<k
        }(75, 10, 22)
}
exports.morningStarB_1_0 = morningStarB_1_0//Sun Mar 08 2015 20:01:40 GMT+0800 (中国标准时间)

function morningStarB_1_0(klineJson, i) {

    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//21 0.799 2376/13229
&& obj.amount_ave_21<0.95*obj.amount_ave_8//0 0.791 2631/14201
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.3*obj.amount_ave_21//1 0.773 4490/20789
&& obj.amount_ave_8<1.5*obj.amount//1 0.732 13923/41491
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.703 24166/57760
&& obj.amount_ave_21<1.05*obj.amount_ave_8//0 0.661 67080/106104
&& obj.marketCap < 4000000000//0 0.635 137777/196319
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.601 244673/306674
 && function(m, n, k){
            var midhigh = Math.max(klineJson[i-1].open, klineJson[i-1].close);
            var lower = klineutil.lowerItemsIndex(klineJson, i-m, i-2, "low", klineJson[i-2].high);

            return klineutil.increase(midhigh, klineJson[i-2].close) > -klineJson[i].amplitude_ave_8*n
                && lower.length<k
        }(75, 10, 22)
}
exports.morningStarB_1_0 = morningStarB_1_0//Sun Mar 08 2015 20:11:58 GMT+0800 (中国标准时间)

function morningStarB_1_0(klineJson, i) {

    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.amount_ave_21<0.95*obj.amount_ave_8//1 0.800 2929/11970
&& !(obj.turnover_ave_21>1.2*obj.turnover)//0 0.786 3941/15858
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.3*obj.amount_ave_21//0 0.763 6117/21200
&& obj.netsummin_r0_20===-0*obj.amount_ave_21//0 0.730 14187/38820
&& !(obj.netsummin_r0_10<-0.05*obj.amount_ave_21)//1 0.691 33195/64215
&& obj.amount_ave_21<1.05*obj.amount_ave_8//0 0.661 67080/106104
&& obj.marketCap < 4000000000//0 0.635 137777/196319
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.601 244673/306674
 && function(m, n, k){
            var midhigh = Math.max(klineJson[i-1].open, klineJson[i-1].close);
            var lower = klineutil.lowerItemsIndex(klineJson, i-m, i-2, "low", klineJson[i-2].high);

            return klineutil.increase(midhigh, klineJson[i-2].close) > -klineJson[i].amplitude_ave_8*n
                && lower.length<k
        }(75, 10, 22)
}
exports.morningStarB_1_0 = morningStarB_1_0//Sun Mar 08 2015 21:03:24 GMT+0800 (中国标准时间)

function morningStarB_1_0(klineJson, i) {

    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsum_r0x_40>obj.netsum_r0_40)//84 0.798 3233/13105
&& obj.amount_ave_21<0.95*obj.amount_ave_8//1 0.795 3349/13454
&& obj.amount_ave_21<1.5*obj.amount//4 0.780 4620/18184
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.3*obj.amount_ave_21//0 0.763 6117/21200
&& obj.netsummin_r0_20===-0*obj.amount_ave_21//0 0.730 14187/38820
&& !(obj.netsummin_r0_10<-0.05*obj.amount_ave_21)//1 0.691 33195/64215
&& obj.amount_ave_21<1.05*obj.amount_ave_8//0 0.661 67080/106104
&& obj.marketCap < 4000000000//0 0.635 137777/196319
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.601 244673/306674
 && function(m, n, k){
            var midhigh = Math.max(klineJson[i-1].open, klineJson[i-1].close);
            var lower = klineutil.lowerItemsIndex(klineJson, i-m, i-2, "low", klineJson[i-2].high);

            return klineutil.increase(midhigh, klineJson[i-2].close) > -klineJson[i].amplitude_ave_8*n
                && lower.length<k
        }(75, 10, 22)
}
exports.morningStarB_1_0 = morningStarB_1_0//Sun Mar 08 2015 21:05:30 GMT+0800 (中国标准时间)

function morningStarB_1_0(klineJson, i) {

    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//10 0.798 3413/13549
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.5*obj.amount_ave_21//6 0.789 3819/14711
&& !(obj.turnover_ave_21>1.2*obj.turnover)//3 0.773 5490/19446
&& obj.amount_ave_21<0.95*obj.amount_ave_8//1 0.754 8471/25459
&& obj.netsummin_r0_20===-0*obj.amount_ave_21//0 0.730 14187/38820
&& !(obj.netsummin_r0_10<-0.05*obj.amount_ave_21)//1 0.691 33195/64215
&& obj.amount_ave_21<1.05*obj.amount_ave_8//0 0.661 67080/106104
&& obj.marketCap < 4000000000//0 0.635 137777/196319
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.601 244673/306674
 && function(m, n, k){
            var midhigh = Math.max(klineJson[i-1].open, klineJson[i-1].close);
            var lower = klineutil.lowerItemsIndex(klineJson, i-m, i-2, "low", klineJson[i-2].high);

            return klineutil.increase(midhigh, klineJson[i-2].close) > -klineJson[i].amplitude_ave_8*n
                && lower.length<k
        }(75, 10, 22)
}
exports.morningStarB_1_0 = morningStarB_1_0//Sun Mar 08 2015 21:10:46 GMT+0800 (中国标准时间)

function morningStarB_1_0(klineJson, i) {

    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//10 0.798 3414/13548
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.5*obj.amount_ave_21//6 0.789 3819/14707
&& obj.amount_ave_21<0.95*obj.amount_ave_8//4 0.773 5490/19446
&& !(obj.turnover_ave_21>1.2*obj.turnover)//3 0.752 8626/28060
&& obj.netsummin_r0_20===-0*obj.amount_ave_21//0 0.730 14187/38820
&& !(obj.netsummin_r0_10<-0.05*obj.amount_ave_21)//1 0.691 33195/64215
&& obj.amount_ave_21<1.05*obj.amount_ave_8//0 0.661 67080/106104
&& obj.marketCap < 4000000000//0 0.635 137777/196319
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.601 244673/306674
 && function(m, n, k){
            var midhigh = Math.max(klineJson[i-1].open, klineJson[i-1].close);
            var lower = klineutil.lowerItemsIndex(klineJson, i-m, i-2, "low", klineJson[i-2].high);

            return klineutil.increase(midhigh, klineJson[i-2].close) > -klineJson[i].amplitude_ave_8*n
                && lower.length<k
        }(75, 10, 22)
}
exports.morningStarB_1_0 = morningStarB_1_0//Sun Mar 08 2015 21:19:59 GMT+0800 (中国标准时间)

function morningStarB_1_0(klineJson, i) {

    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsum_r0x_80>obj.netsum_r0_80)//120 0.799 3932/13394
&& !(obj.turnover_ave_21>1.2*obj.turnover)//1 0.796 4014/13664
&& !(obj.amount_ave_8<0.5*obj.amount)//2 0.777 5363/17150
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.3*obj.amount_ave_21//2 0.763 6382/18898
&& obj.amount_ave_21<0.95*obj.amount_ave_8//0 0.736 12415/31548
&& !(obj.netsummax_r0_20>0.3*obj.amount_ave_21)//2 0.712 21698/49880
&& !(obj.netsummin_r0_10<-0.05*obj.amount_ave_21)//1 0.691 33195/64215
&& obj.amount_ave_21<1.05*obj.amount_ave_8//0 0.661 67080/106104
&& obj.marketCap < 4000000000//0 0.635 137777/196319
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.601 244673/306674
 && function(m, n, k){
            var midhigh = Math.max(klineJson[i-1].open, klineJson[i-1].close);
            var lower = klineutil.lowerItemsIndex(klineJson, i-m, i-2, "low", klineJson[i-2].high);

            return klineutil.increase(midhigh, klineJson[i-2].close) > -klineJson[i].amplitude_ave_8*n
                && lower.length<k
        }(75, 10, 22)
}
exports.morningStarB_1_0 = morningStarB_1_0//Sun Mar 08 2015 21:27:43 GMT+0800 (中国标准时间)
