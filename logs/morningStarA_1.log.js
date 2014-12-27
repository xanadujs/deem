
function morningStarA_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.netsummax_r0x_10>0.0*obj.amount_ave_21//48 0.800 5846/12414
&& obj.amount_ave_21<1*obj.amount_ave_8//0 0.785 8337/17266
&& obj.netsummin_r0_20===-0*obj.amount_ave_21//0 0.745 17436/30357
&& !(obj.turnover_ave_21>1.2*obj.turnover)//0 0.693 44361/62676
&& obj.marketCap < 2000000000//0 0.647 93988/121578
 && function (m, n, k){
            var lower = klineutil.lowerItemsIndex(klineJson, i-k, i-3, "close", klineJson[i].close);
             return i - lower[0]>m && i - lower[0] < n
        }(4, 23, 45)

}
exports.morningStarA_1_0 = morningStarA_1_0//Thu Dec 25 2014 19:56:11 GMT+0800 (中国标准时间)

function morningStarA_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.netsum_r0_5<0.05*obj.amount_ave_21//16 0.802 6150/14841
&& obj.turnover_ave_8>obj.turnover_ave_21//1 0.780 9132/18577
&& obj.netsummin_r0_20===-0*obj.amount_ave_21//0 0.745 17436/30357
&& !(obj.turnover_ave_21>1.2*obj.turnover)//0 0.693 44361/62676
&& obj.marketCap < 2000000000//0 0.647 93988/121578
 && function (m, n, k){
            var lower = klineutil.lowerItemsIndex(klineJson, i-k, i-3, "close", klineJson[i].close);
             return i - lower[0]>m && i - lower[0] < n
        }(4, 23, 45)

}
exports.morningStarA_1_0 = morningStarA_1_0//Thu Dec 25 2014 19:56:45 GMT+0800 (中国标准时间)

function morningStarA_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsummin_r0_20<-0.1*obj.amount_ave_21)//9 0.799 6432/15419
&& obj.amount_ave_21<1*obj.amount_ave_8//0 0.778 9510/20554
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//1 0.730 23442/39906
&& !(obj.turnover_ave_21>1.2*obj.turnover)//0 0.693 44361/62676
&& obj.marketCap < 2000000000//0 0.647 93988/121578
 && function (m, n, k){
            var lower = klineutil.lowerItemsIndex(klineJson, i-k, i-3, "close", klineJson[i].close);
             return i - lower[0]>m && i - lower[0] < n
        }(4, 23, 45)

}
exports.morningStarA_1_0 = morningStarA_1_0//Thu Dec 25 2014 20:04:12 GMT+0800 (中国标准时间)

function morningStarA_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.close_ave_8<1.05*obj.close//156 0.798 6612/14831
&& !(obj.netsummax_r0_20>0.3*obj.amount_ave_21)//65 0.797 6680/14931
&& obj.netsummin_r0_20===-0*obj.amount_ave_21//35 0.785 8335/17260
&& obj.amount_ave_21<1*obj.amount_ave_8//0 0.766 10842/20047
&& !(obj.netsummin_r0_20<-0*obj.amount_ave_21)//3 0.729 21615/34931
&& !(obj.turnover_ave_21>1.2*obj.turnover)//0 0.693 44361/62676
&& obj.marketCap < 2000000000//0 0.647 93988/121578
 && function (m, n, k){
            var lower = klineutil.lowerItemsIndex(klineJson, i-k, i-3, "close", klineJson[i].close);
             return i - lower[0]>m && i - lower[0] < n
        }(4, 23, 45)

}
exports.morningStarA_1_0 = morningStarA_1_0//Thu Dec 25 2014 20:22:58 GMT+0800 (中国标准时间)

function morningStarA_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsum_r0x_80>obj.netsum_r0_80)//154 0.798 6628/14379
&& obj.close_ave_8<obj.close_ave_233//69 0.796 6821/14685
&& obj.netsummin_r0_20===-0*obj.amount_ave_21//35 0.785 8335/17260
&& obj.amount_ave_21<1*obj.amount_ave_8//0 0.766 10842/20047
&& !(obj.netsummin_r0_20<-0*obj.amount_ave_21)//3 0.729 21615/34931
&& !(obj.turnover_ave_21>1.2*obj.turnover)//0 0.693 44361/62676
&& obj.marketCap < 2000000000//0 0.647 93988/121578
 && function (m, n, k){
            var lower = klineutil.lowerItemsIndex(klineJson, i-k, i-3, "close", klineJson[i].close);
             return i - lower[0]>m && i - lower[0] < n
        }(4, 23, 45)

}
exports.morningStarA_1_0 = morningStarA_1_0//Thu Dec 25 2014 20:23:32 GMT+0800 (中国标准时间)

function morningStarA_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.amount_ave_21<1.5*obj.amount_ave_8//113 0.799 6641/14921
&& obj.close_ave_8<obj.close_ave_233//43 0.795 7078/15361
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.5*obj.amount_ave_21//11 0.782 8578/18006
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//1 0.760 13070/25048
&& !(obj.netsummin_r0_20<-0*obj.amount_ave_21)//3 0.729 21615/34931
&& !(obj.turnover_ave_21>1.2*obj.turnover)//0 0.693 44361/62676
&& obj.marketCap < 2000000000//0 0.647 93988/121578
 && function (m, n, k){
            var lower = klineutil.lowerItemsIndex(klineJson, i-k, i-3, "close", klineJson[i].close);
             return i - lower[0]>m && i - lower[0] < n
        }(4, 23, 45)

}
exports.morningStarA_1_0 = morningStarA_1_0//Thu Dec 25 2014 20:31:43 GMT+0800 (中国标准时间)

function morningStarA_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.amount_ave_21<1.5*obj.amount//42 0.798 6940/16896
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//22 0.782 8532/19546
&& obj.netsummin_r0_20===-0*obj.amount_ave_21//0 0.758 13023/25170
&& obj.turnover_ave_8>obj.turnover_ave_21//2 0.703 33711/50922
&& obj.marketCap < 2000000000//0 0.647 93988/121578
 && function (m, n, k){
            var lower = klineutil.lowerItemsIndex(klineJson, i-k, i-3, "close", klineJson[i].close);
             return i - lower[0]>m && i - lower[0] < n
        }(4, 23, 45)

}
exports.morningStarA_1_0 = morningStarA_1_0//Thu Dec 25 2014 21:37:29 GMT+0800 (中国标准时间)

function morningStarA_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.close_ave_8<1.05*obj.close//158 0.798 6954/16869
&& obj.amount_ave_21<1.5*obj.amount//43 0.797 7017/16987
&& !(obj.netsummax_r0_5>0.03*obj.amount_ave_21)//28 0.780 8625/19657
&& obj.netsummin_r0_20===-0*obj.amount_ave_21//0 0.758 13023/25170
&& obj.turnover_ave_8>obj.turnover_ave_21//2 0.703 33711/50922
&& obj.marketCap < 2000000000//0 0.647 93988/121578
 && function (m, n, k){
            var lower = klineutil.lowerItemsIndex(klineJson, i-k, i-3, "close", klineJson[i].close);
             return i - lower[0]>m && i - lower[0] < n
        }(4, 23, 45)

}
exports.morningStarA_1_0 = morningStarA_1_0//Thu Dec 25 2014 21:38:37 GMT+0800 (中国标准时间)

function morningStarA_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.close_ave_8<1.03*obj.close//148 0.798 6982/16789
&& obj.amount_ave_21<1.5*obj.amount//42 0.796 7235/17261
&& !(obj.netsummax_r0_5>0.05*obj.amount_ave_21)//10 0.779 8877/19971
&& !(obj.netsummin_r0_20<-0*obj.amount_ave_21)//2 0.745 15825/28276
&& obj.turnover_ave_8>obj.turnover_ave_21//2 0.703 33711/50922
&& obj.marketCap < 2000000000//0 0.647 93988/121578
 && function (m, n, k){
            var lower = klineutil.lowerItemsIndex(klineJson, i-k, i-3, "close", klineJson[i].close);
             return i - lower[0]>m && i - lower[0] < n
        }(4, 23, 45)

}
exports.morningStarA_1_0 = morningStarA_1_0//Thu Dec 25 2014 21:48:12 GMT+0800 (中国标准时间)

function morningStarA_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.close_ave_8<1.02*obj.close//138 0.798 7082/17414
&& !(obj.netsummin_r0_10<-0.05*obj.amount_ave_21)//6 0.794 7565/18382
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//1 0.769 11591/24564
&& obj.amount_ave_21<1*obj.amount_ave_8//1 0.721 26034/40672
&& obj.amount_ave_21<1.5*obj.amount//5 0.680 58047/80439
&& obj.marketCap < 2000000000//0 0.647 93988/121578
 && function (m, n, k){
            var lower = klineutil.lowerItemsIndex(klineJson, i-k, i-3, "close", klineJson[i].close);
             return i - lower[0]>m && i - lower[0] < n
        }(4, 23, 45)

}
exports.morningStarA_1_0 = morningStarA_1_0//Thu Dec 25 2014 22:51:59 GMT+0800 (中国标准时间)

function morningStarA_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.close_ave_8<1.03*obj.close//144 0.798 7130/17585
&& obj.netsummin_r0_5===obj.netsummin_r0_10//77 0.795 7412/18097
&& !(obj.netsummin_r0_5<-0.05*obj.amount_ave_21)//47 0.784 8825/20805
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//1 0.769 11591/24564
&& obj.amount_ave_21<1*obj.amount_ave_8//1 0.721 26034/40672
&& obj.amount_ave_21<1.5*obj.amount//5 0.680 58047/80439
&& obj.marketCap < 2000000000//0 0.647 93988/121578
 && function (m, n, k){
            var lower = klineutil.lowerItemsIndex(klineJson, i-k, i-3, "close", klineJson[i].close);
             return i - lower[0]>m && i - lower[0] < n
        }(4, 23, 45)

}
exports.morningStarA_1_0 = morningStarA_1_0//Thu Dec 25 2014 22:56:20 GMT+0800 (中国标准时间)

function morningStarA_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsummin_r0_20<-0.2*obj.amount_ave_21)//165 0.798 7182/16561
&& obj.close_ave_8<obj.close_ave_233//80 0.796 7347/16789
&& obj.netsum_r0_20>=0.0*obj.amount_ave_21//5 0.785 8740/19356
&& obj.turnover_ave_8>obj.turnover_ave_21//1 0.759 14308/28526
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//1 0.716 31453/51468
&& !(obj.turnover_ave_21>1.2*obj.turnover)//0 0.668 67727/90476
&& obj.marketCap < 3000000000//1 0.626 140459/174894
 && function (m, n, k){
            var lower = klineutil.lowerItemsIndex(klineJson, i-k, i-3, "close", klineJson[i].close);
             return i - lower[0]>m && i - lower[0] < n
        }(4, 23, 45)

}
exports.morningStarA_1_0 = morningStarA_1_0//Fri Dec 26 2014 00:08:26 GMT+0800 (中国标准时间)

function morningStarA_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.close_ave_8<1.03*obj.close//142 0.798 7466/18259
&& obj.amount_ave_21<1.5*obj.amount//46 0.795 7739/18766
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//10 0.779 9493/21591
&& obj.amount_ave_21<1*obj.amount_ave_8//3 0.750 15618/29223
&& obj.netsummin_r0_20===-0*obj.amount_ave_21//1 0.683 47050/69279
&& obj.marketCap < 3000000000//1 0.626 140459/174894
 && function (m, n, k){
            var lower = klineutil.lowerItemsIndex(klineJson, i-k, i-3, "close", klineJson[i].close);
             return i - lower[0]>m && i - lower[0] < n
        }(4, 23, 45)

}
exports.morningStarA_1_0 = morningStarA_1_0//Fri Dec 26 2014 19:39:27 GMT+0800 (中国标准时间)
