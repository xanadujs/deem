
function bullPulsing_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//2 0.799 2351/14116
&& !(obj.netsummax_r0_20>0.1*obj.amount_ave_21)//0 0.791 2676/15314
&& !(obj.netsummin_r0_20<-0*obj.amount_ave_21)//0 0.776 4252/19946
&& !(obj.close_ave_144<1.05*obj.close)//0 0.750 10845/33243
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.720 29717/69362
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.695 50128/91999
&& obj.marketCap < 2500000000//0 0.654 113407/163124
 && function(a, b, c, d, e, f) {
            // return true
            var n=i;
            var biginc = 0;
            for (; n>1; n--) {
                var inc_ave = klineJson[n].inc_ave_21;
                if (klineutil.increase(klineJson[n].open, klineJson[n].close) > 0.01*a//inc_ave*a
                    ) {
                    biginc = klineutil.increase(klineJson[n].open, klineJson[n].close);
                    break;
                } 
            }
            for (var j=n+1; j<=i; j++) {
                var inc_ave = klineJson[n-1].inc_ave_8;
                if (klineutil.increase(klineJson[n].close, klineJson[j].close) < b*inc_ave
                    )
                    return false;
            }

            var lowerItems = klineutil.lowerItemsIndex(klineJson, n-c, n, "close", klineJson[n].open);
            var higherItems = klineutil.higherItemsIndex(klineJson, n-d, n, "low", klineJson[n].close);
            return n-lowerItems[0] <e //&& n-higherItems[higherItems.length-1] > f;
        }(2, -0.8, 65, 20, 50, 5) //(1.5, -1.5, 65, 20, 50, 5)
        
}
exports.bullPulsing_1_0 = bullPulsing_1_0//Sun Mar 08 2015 14:16:03 GMT+0800 (中国标准时间)

function bullPulsing_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsum_r0_20>0.08*obj.amount_ave_21)//7 0.798 2655/10781
&& !(obj.netsummax_r0_r0x_duration>15)//0 0.787 3614/13462
&& obj.netsummax_r0>obj.amount_ave_21//2 0.766 6584/23442
&& !(obj.close_ave_144<1.05*obj.close)//0 0.750 10845/33243
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.720 29717/69362
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.695 50128/91999
&& obj.marketCap < 2500000000//0 0.654 113407/163124
 && function(a, b, c, d, e, f) {
            // return true
            var n=i;
            var biginc = 0;
            for (; n>1; n--) {
                var inc_ave = klineJson[n].inc_ave_21;
                if (klineutil.increase(klineJson[n].open, klineJson[n].close) > 0.01*a//inc_ave*a
                    ) {
                    biginc = klineutil.increase(klineJson[n].open, klineJson[n].close);
                    break;
                } 
            }
            for (var j=n+1; j<=i; j++) {
                var inc_ave = klineJson[n-1].inc_ave_8;
                if (klineutil.increase(klineJson[n].close, klineJson[j].close) < b*inc_ave
                    )
                    return false;
            }

            var lowerItems = klineutil.lowerItemsIndex(klineJson, n-c, n, "close", klineJson[n].open);
            var higherItems = klineutil.higherItemsIndex(klineJson, n-d, n, "low", klineJson[n].close);
            return n-lowerItems[0] <e //&& n-higherItems[higherItems.length-1] > f;
        }(2, -0.8, 65, 20, 50, 5) //(1.5, -1.5, 65, 20, 50, 5)
        
}
exports.bullPulsing_1_0 = bullPulsing_1_0//Sun Mar 08 2015 14:20:51 GMT+0800 (中国标准时间)

function bullPulsing_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsum_r0_20>0.08*obj.amount_ave_21)//5 0.799 2685/11021
&& !(obj.netsummax_r0_r0x_duration>20)//1 0.786 3747/14009
&& obj.netsummax_r0>obj.amount_ave_21//2 0.766 6584/23442
&& !(obj.close_ave_144<1.05*obj.close)//0 0.750 10845/33243
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.720 29717/69362
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.695 50128/91999
&& obj.marketCap < 2500000000//0 0.654 113407/163124
 && function(a, b, c, d, e, f) {
            // return true
            var n=i;
            var biginc = 0;
            for (; n>1; n--) {
                var inc_ave = klineJson[n].inc_ave_21;
                if (klineutil.increase(klineJson[n].open, klineJson[n].close) > 0.01*a//inc_ave*a
                    ) {
                    biginc = klineutil.increase(klineJson[n].open, klineJson[n].close);
                    break;
                } 
            }
            for (var j=n+1; j<=i; j++) {
                var inc_ave = klineJson[n-1].inc_ave_8;
                if (klineutil.increase(klineJson[n].close, klineJson[j].close) < b*inc_ave
                    )
                    return false;
            }

            var lowerItems = klineutil.lowerItemsIndex(klineJson, n-c, n, "close", klineJson[n].open);
            var higherItems = klineutil.higherItemsIndex(klineJson, n-d, n, "low", klineJson[n].close);
            return n-lowerItems[0] <e //&& n-higherItems[higherItems.length-1] > f;
        }(2, -0.8, 65, 20, 50, 5) //(1.5, -1.5, 65, 20, 50, 5)
        
}
exports.bullPulsing_1_0 = bullPulsing_1_0//Sun Mar 08 2015 14:21:11 GMT+0800 (中国标准时间)

function bullPulsing_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsum_r0_20>0.08*obj.amount_ave_21)//5 0.798 2732/11242
&& !(obj.netsummax_r0_r0x_duration>25)//2 0.785 3879/14417
&& obj.netsummax_r0>obj.amount_ave_21//2 0.766 6584/23442
&& !(obj.close_ave_144<1.05*obj.close)//0 0.750 10845/33243
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.720 29717/69362
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.695 50128/91999
&& obj.marketCap < 2500000000//0 0.654 113407/163124
 && function(a, b, c, d, e, f) {
            // return true
            var n=i;
            var biginc = 0;
            for (; n>1; n--) {
                var inc_ave = klineJson[n].inc_ave_21;
                if (klineutil.increase(klineJson[n].open, klineJson[n].close) > 0.01*a//inc_ave*a
                    ) {
                    biginc = klineutil.increase(klineJson[n].open, klineJson[n].close);
                    break;
                } 
            }
            for (var j=n+1; j<=i; j++) {
                var inc_ave = klineJson[n-1].inc_ave_8;
                if (klineutil.increase(klineJson[n].close, klineJson[j].close) < b*inc_ave
                    )
                    return false;
            }

            var lowerItems = klineutil.lowerItemsIndex(klineJson, n-c, n, "close", klineJson[n].open);
            var higherItems = klineutil.higherItemsIndex(klineJson, n-d, n, "low", klineJson[n].close);
            return n-lowerItems[0] <e //&& n-higherItems[higherItems.length-1] > f;
        }(2, -0.8, 65, 20, 50, 5) //(1.5, -1.5, 65, 20, 50, 5)
        
}
exports.bullPulsing_1_0 = bullPulsing_1_0//Sun Mar 08 2015 14:21:31 GMT+0800 (中国标准时间)

function bullPulsing_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//35 0.800 2877/12004
&& !(obj.netsum_r0_20>0.05*obj.amount_ave_21)//2 0.794 3128/12814
&& !(obj.netsummax_r0+obj.netsummax_r0_netsum_r0x>0)//5 0.780 4618/16909
&& obj.netsummax_r0>obj.amount_ave_21//2 0.766 6584/23442
&& !(obj.close_ave_144<1.05*obj.close)//0 0.750 10845/33243
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.720 29717/69362
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.695 50128/91999
&& obj.marketCap < 2500000000//0 0.654 113407/163124
 && function(a, b, c, d, e, f) {
            // return true
            var n=i;
            var biginc = 0;
            for (; n>1; n--) {
                var inc_ave = klineJson[n].inc_ave_21;
                if (klineutil.increase(klineJson[n].open, klineJson[n].close) > 0.01*a//inc_ave*a
                    ) {
                    biginc = klineutil.increase(klineJson[n].open, klineJson[n].close);
                    break;
                } 
            }
            for (var j=n+1; j<=i; j++) {
                var inc_ave = klineJson[n-1].inc_ave_8;
                if (klineutil.increase(klineJson[n].close, klineJson[j].close) < b*inc_ave
                    )
                    return false;
            }

            var lowerItems = klineutil.lowerItemsIndex(klineJson, n-c, n, "close", klineJson[n].open);
            var higherItems = klineutil.higherItemsIndex(klineJson, n-d, n, "low", klineJson[n].close);
            return n-lowerItems[0] <e //&& n-higherItems[higherItems.length-1] > f;
        }(2, -0.8, 65, 20, 50, 5) //(1.5, -1.5, 65, 20, 50, 5)
        
}
exports.bullPulsing_1_0 = bullPulsing_1_0//Sun Mar 08 2015 14:22:52 GMT+0800 (中国标准时间)

function bullPulsing_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//33 0.799 3029/12456
&& !(obj.netsum_r0_20>0.08*obj.amount_ave_21)//4 0.793 3284/13274
&& !(obj.netsummax_r0+obj.netsummax_r0_netsum_r0x>0)//5 0.780 4618/16909
&& obj.netsummax_r0>obj.amount_ave_21//2 0.766 6584/23442
&& !(obj.close_ave_144<1.05*obj.close)//0 0.750 10845/33243
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.720 29717/69362
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.695 50128/91999
&& obj.marketCap < 2500000000//0 0.654 113407/163124
 && function(a, b, c, d, e, f) {
            // return true
            var n=i;
            var biginc = 0;
            for (; n>1; n--) {
                var inc_ave = klineJson[n].inc_ave_21;
                if (klineutil.increase(klineJson[n].open, klineJson[n].close) > 0.01*a//inc_ave*a
                    ) {
                    biginc = klineutil.increase(klineJson[n].open, klineJson[n].close);
                    break;
                } 
            }
            for (var j=n+1; j<=i; j++) {
                var inc_ave = klineJson[n-1].inc_ave_8;
                if (klineutil.increase(klineJson[n].close, klineJson[j].close) < b*inc_ave
                    )
                    return false;
            }

            var lowerItems = klineutil.lowerItemsIndex(klineJson, n-c, n, "close", klineJson[n].open);
            var higherItems = klineutil.higherItemsIndex(klineJson, n-d, n, "low", klineJson[n].close);
            return n-lowerItems[0] <e //&& n-higherItems[higherItems.length-1] > f;
        }(2, -0.8, 65, 20, 50, 5) //(1.5, -1.5, 65, 20, 50, 5)
        
}
exports.bullPulsing_1_0 = bullPulsing_1_0//Sun Mar 08 2015 14:23:11 GMT+0800 (中国标准时间)

function bullPulsing_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//33 0.798 3035/12476
&& !(obj.netsum_r0_20>0.08*obj.amount_ave_21)//3 0.793 3291/13297
&& !(obj.netsummax_r0+obj.netsummax_r0_netsum_r0x>0.05*obj.amount_ave_21)//6 0.780 4630/16943
&& obj.netsummax_r0>obj.amount_ave_21//2 0.766 6584/23442
&& !(obj.close_ave_144<1.05*obj.close)//0 0.750 10845/33243
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.720 29717/69362
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.695 50128/91999
&& obj.marketCap < 2500000000//0 0.654 113407/163124
 && function(a, b, c, d, e, f) {
            // return true
            var n=i;
            var biginc = 0;
            for (; n>1; n--) {
                var inc_ave = klineJson[n].inc_ave_21;
                if (klineutil.increase(klineJson[n].open, klineJson[n].close) > 0.01*a//inc_ave*a
                    ) {
                    biginc = klineutil.increase(klineJson[n].open, klineJson[n].close);
                    break;
                } 
            }
            for (var j=n+1; j<=i; j++) {
                var inc_ave = klineJson[n-1].inc_ave_8;
                if (klineutil.increase(klineJson[n].close, klineJson[j].close) < b*inc_ave
                    )
                    return false;
            }

            var lowerItems = klineutil.lowerItemsIndex(klineJson, n-c, n, "close", klineJson[n].open);
            var higherItems = klineutil.higherItemsIndex(klineJson, n-d, n, "low", klineJson[n].close);
            return n-lowerItems[0] <e //&& n-higherItems[higherItems.length-1] > f;
        }(2, -0.8, 65, 20, 50, 5) //(1.5, -1.5, 65, 20, 50, 5)
        
}
exports.bullPulsing_1_0 = bullPulsing_1_0//Sun Mar 08 2015 14:23:52 GMT+0800 (中国标准时间)
