
function smallRedsAndGreensA_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//111 0.799 5090/18118
&& !(obj.netsummin_r0_5<-0.05*obj.amount_ave_21)//24 0.794 5479/19395
&& obj.netsummax_r0_10===-0.0*obj.amount_ave_21//31 0.783 7284/22362
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.2*obj.amount_ave_21//0 0.773 9478/26120
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.743 21081/47813
&& !(obj.turnover_ave_21>1.2*obj.turnover)//1 0.697 50447/83036
&& obj.marketCap < 2500000000//0 0.664 84400/126465
 && function(a, b, c, d, e, f, g, h) {
       //     return true
        var n=i;
        for (; n>1; n--) {
            var inc_ave = klineJson[n].inc_ave_21;
            if (Math.abs(klineutil.increase(klineJson[n].open, klineJson[n].close)) > inc_ave*a) {
                break;
            } 
        }

        return true
            && i-n>= b
            //&& klineutil.increase(klineJson[i-c].close_ave_8, klineJson[i].close_ave_8) > d//-klineJson[i].inc_ave_8*0.8
            && function () {    
            var lowerItems = klineutil.lowerItemsIndex(klineJson, i-e, i, "high", klineJson[i].low);
            var lidx = klineutil.lowItem(klineJson, i-f, i, "low");
            return true
                && i-lowerItems[0] <g 
                && klineutil.increase(lidx, klineJson[i].close) > klineJson[i].inc_ave_8*h
        }()
    }(3, 5, 4, 0, 80, 100, 40, 4)
}
exports.smallRedsAndGreensA_1_0 = smallRedsAndGreensA_1_0//Fri Jan 02 2015 02:48:00 GMT+0800 (中国标准时间)

function smallRedsAndGreensA_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//58 0.799 5089/18121
&& obj.netsummax_r0_10===-0.0*obj.amount_ave_21//7 0.794 5480/19402
&& !(obj.netsummin_r0_5<-0.05*obj.amount_ave_21)//11 0.784 7214/22511
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.2*obj.amount_ave_21//0 0.773 9479/26121
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.743 21081/47813
&& !(obj.turnover_ave_21>1.2*obj.turnover)//0 0.697 50447/83036
&& obj.marketCap < 2500000000//0 0.664 84400/126465
 && function(a, b, c, d, e, f, g, h) {
       //     return true
        var n=i;
        for (; n>1; n--) {
            var inc_ave = klineJson[n].inc_ave_21;
            if (Math.abs(klineutil.increase(klineJson[n].open, klineJson[n].close)) > inc_ave*a) {
                break;
            } 
        }

        return true
            && i-n>= b
            //&& klineutil.increase(klineJson[i-c].close_ave_8, klineJson[i].close_ave_8) > d//-klineJson[i].inc_ave_8*0.8
            && function () {    
            var lowerItems = klineutil.lowerItemsIndex(klineJson, i-e, i, "high", klineJson[i].low);
            var lidx = klineutil.lowItem(klineJson, i-f, i, "low");
            return true
                && i-lowerItems[0] <g 
                && klineutil.increase(lidx, klineJson[i].close) > klineJson[i].inc_ave_8*h
        }()
    }(3, 5, 4, 0, 80, 100, 40, 4)
}
exports.smallRedsAndGreensA_1_0 = smallRedsAndGreensA_1_0//Fri Jan 02 2015 07:47:06 GMT+0800 (中国标准时间)

function smallRedsAndGreensA_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//58 0.799 5090/18125
&& !(obj.netsummin_r0_5<-0.05*obj.amount_ave_21)//15 0.794 5480/19402
&& obj.netsummax_r0_5===obj.netsummax_r0_10//15 0.783 7286/22364
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.2*obj.amount_ave_21//0 0.773 9479/26121
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.743 21081/47813
&& !(obj.turnover_ave_21>1.2*obj.turnover)//0 0.697 50447/83036
&& obj.marketCap < 2500000000//0 0.664 84400/126465
 && function(a, b, c, d, e, f, g, h) {
       //     return true
        var n=i;
        for (; n>1; n--) {
            var inc_ave = klineJson[n].inc_ave_21;
            if (Math.abs(klineutil.increase(klineJson[n].open, klineJson[n].close)) > inc_ave*a) {
                break;
            } 
        }

        return true
            && i-n>= b
            //&& klineutil.increase(klineJson[i-c].close_ave_8, klineJson[i].close_ave_8) > d//-klineJson[i].inc_ave_8*0.8
            && function () {    
            var lowerItems = klineutil.lowerItemsIndex(klineJson, i-e, i, "high", klineJson[i].low);
            var lidx = klineutil.lowItem(klineJson, i-f, i, "low");
            return true
                && i-lowerItems[0] <g 
                && klineutil.increase(lidx, klineJson[i].close) > klineJson[i].inc_ave_8*h
        }()
    }(3, 5, 4, 0, 80, 100, 40, 4)
}
exports.smallRedsAndGreensA_1_0 = smallRedsAndGreensA_1_0//Fri Jan 02 2015 07:50:29 GMT+0800 (中国标准时间)

function smallRedsAndGreensA_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//61 0.798 5182/18274
&& !(obj.netsum_r0_5<-0.05*obj.amount_ave_21)//21 0.793 5574/19553
&& obj.netsummax_r0_5===obj.netsummax_r0_10//15 0.783 7286/22364
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.2*obj.amount_ave_21//0 0.773 9479/26121
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.743 21081/47813
&& !(obj.turnover_ave_21>1.2*obj.turnover)//0 0.697 50447/83036
&& obj.marketCap < 2500000000//0 0.664 84400/126465
 && function(a, b, c, d, e, f, g, h) {
       //     return true
        var n=i;
        for (; n>1; n--) {
            var inc_ave = klineJson[n].inc_ave_21;
            if (Math.abs(klineutil.increase(klineJson[n].open, klineJson[n].close)) > inc_ave*a) {
                break;
            } 
        }

        return true
            && i-n>= b
            //&& klineutil.increase(klineJson[i-c].close_ave_8, klineJson[i].close_ave_8) > d//-klineJson[i].inc_ave_8*0.8
            && function () {    
            var lowerItems = klineutil.lowerItemsIndex(klineJson, i-e, i, "high", klineJson[i].low);
            var lidx = klineutil.lowItem(klineJson, i-f, i, "low");
            return true
                && i-lowerItems[0] <g 
                && klineutil.increase(lidx, klineJson[i].close) > klineJson[i].inc_ave_8*h
        }()
    }(3, 5, 4, 0, 80, 100, 40, 4)
}
exports.smallRedsAndGreensA_1_0 = smallRedsAndGreensA_1_0//Fri Jan 02 2015 07:51:07 GMT+0800 (中国标准时间)

function smallRedsAndGreensA_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//25 0.798 5331/19510
&& obj.netsummax_r0_10===-0.0*obj.amount_ave_21//6 0.792 5783/21011
&& !(obj.netsummin_r0_10<-0.05*obj.amount_ave_21)//6 0.782 7703/24487
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.3*obj.amount_ave_21//1 0.766 11665/31047
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.743 21081/47813
&& !(obj.turnover_ave_21>1.2*obj.turnover)//0 0.697 50447/83036
&& obj.marketCap < 2500000000//0 0.664 84400/126465
 && function(a, b, c, d, e, f, g, h) {
       //     return true
        var n=i;
        for (; n>1; n--) {
            var inc_ave = klineJson[n].inc_ave_21;
            if (Math.abs(klineutil.increase(klineJson[n].open, klineJson[n].close)) > inc_ave*a) {
                break;
            } 
        }

        return true
            && i-n>= b
            //&& klineutil.increase(klineJson[i-c].close_ave_8, klineJson[i].close_ave_8) > d//-klineJson[i].inc_ave_8*0.8
            && function () {    
            var lowerItems = klineutil.lowerItemsIndex(klineJson, i-e, i, "high", klineJson[i].low);
            var lidx = klineutil.lowItem(klineJson, i-f, i, "low");
            return true
                && i-lowerItems[0] <g 
                && klineutil.increase(lidx, klineJson[i].close) > klineJson[i].inc_ave_8*h
        }()
    }(3, 5, 4, 0, 80, 100, 40, 4)
}
exports.smallRedsAndGreensA_1_0 = smallRedsAndGreensA_1_0//Fri Jan 02 2015 08:03:19 GMT+0800 (中国标准时间)

function smallRedsAndGreensA_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//25 0.798 5332/19514
&& !(obj.netsummin_r0_10<-0.05*obj.amount_ave_21)//6 0.792 5784/21012
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.3*obj.amount_ave_21//1 0.777 8954/26450
&& obj.netsummax_r0_10===-0.0*obj.amount_ave_21//1 0.752 16703/40662
&& !(obj.turnover_ave_21>1.2*obj.turnover)//0 0.697 50447/83036
&& obj.marketCap < 2500000000//0 0.664 84400/126465
 && function(a, b, c, d, e, f, g, h) {
       //     return true
        var n=i;
        for (; n>1; n--) {
            var inc_ave = klineJson[n].inc_ave_21;
            if (Math.abs(klineutil.increase(klineJson[n].open, klineJson[n].close)) > inc_ave*a) {
                break;
            } 
        }

        return true
            && i-n>= b
            //&& klineutil.increase(klineJson[i-c].close_ave_8, klineJson[i].close_ave_8) > d//-klineJson[i].inc_ave_8*0.8
            && function () {    
            var lowerItems = klineutil.lowerItemsIndex(klineJson, i-e, i, "high", klineJson[i].low);
            var lidx = klineutil.lowItem(klineJson, i-f, i, "low");
            return true
                && i-lowerItems[0] <g 
                && klineutil.increase(lidx, klineJson[i].close) > klineJson[i].inc_ave_8*h
        }()
    }(3, 5, 4, 0, 80, 100, 40, 4)
}
exports.smallRedsAndGreensA_1_0 = smallRedsAndGreensA_1_0//Fri Jan 02 2015 08:31:59 GMT+0800 (中国标准时间)

function smallRedsAndGreensA_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//70 0.800 5362/19769
&& obj.netsum_r0_above>obj.netsum_r0_below*4//9 0.796 5696/21027
&& !(obj.netsum_r0_10<-0.02*obj.amount_ave_21)//5 0.786 7576/24825
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.3*obj.amount_ave_21//0 0.768 11782/31860
&& obj.netsummax_r0_10===-0.0*obj.amount_ave_21//1 0.742 22357/50088
&& obj.amount_ave_21<1.5*obj.amount//1 0.690 62925/100954
&& obj.marketCap < 2500000000//0 0.664 84400/126465
 && function(a, b, c, d, e, f, g, h) {
       //     return true
        var n=i;
        for (; n>1; n--) {
            var inc_ave = klineJson[n].inc_ave_21;
            if (Math.abs(klineutil.increase(klineJson[n].open, klineJson[n].close)) > inc_ave*a) {
                break;
            } 
        }

        return true
            && i-n>= b
            //&& klineutil.increase(klineJson[i-c].close_ave_8, klineJson[i].close_ave_8) > d//-klineJson[i].inc_ave_8*0.8
            && function () {    
            var lowerItems = klineutil.lowerItemsIndex(klineJson, i-e, i, "high", klineJson[i].low);
            var lidx = klineutil.lowItem(klineJson, i-f, i, "low");
            return true
                && i-lowerItems[0] <g 
                && klineutil.increase(lidx, klineJson[i].close) > klineJson[i].inc_ave_8*h
        }()
    }(3, 5, 4, 0, 80, 100, 40, 4)
}
exports.smallRedsAndGreensA_1_0 = smallRedsAndGreensA_1_0//Fri Jan 02 2015 11:26:19 GMT+0800 (中国标准时间)

function smallRedsAndGreensA_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//42 0.800 5377/19442
&& !(obj.netsum_r0_below>0.02*obj.amount_ave_21)//4 0.794 5743/20746
&& !(obj.netsum_r0_10<-0.0*obj.amount_ave_21)//2 0.782 8883/27644
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.4*obj.amount_ave_21//2 0.762 14201/36375
&& obj.netsummax_r0_10===-0.0*obj.amount_ave_21//1 0.742 22357/50088
&& obj.amount_ave_21<1.5*obj.amount//1 0.690 62925/100954
&& obj.marketCap < 2500000000//0 0.664 84400/126465
 && function(a, b, c, d, e, f, g, h) {
       //     return true
        var n=i;
        for (; n>1; n--) {
            var inc_ave = klineJson[n].inc_ave_21;
            if (Math.abs(klineutil.increase(klineJson[n].open, klineJson[n].close)) > inc_ave*a) {
                break;
            } 
        }

        return true
            && i-n>= b
            //&& klineutil.increase(klineJson[i-c].close_ave_8, klineJson[i].close_ave_8) > d//-klineJson[i].inc_ave_8*0.8
            && function () {    
            var lowerItems = klineutil.lowerItemsIndex(klineJson, i-e, i, "high", klineJson[i].low);
            var lidx = klineutil.lowItem(klineJson, i-f, i, "low");
            return true
                && i-lowerItems[0] <g 
                && klineutil.increase(lidx, klineJson[i].close) > klineJson[i].inc_ave_8*h
        }()
    }(3, 5, 4, 0, 80, 100, 40, 4)
}
exports.smallRedsAndGreensA_1_0 = smallRedsAndGreensA_1_0//Fri Jan 02 2015 11:50:02 GMT+0800 (中国标准时间)

function smallRedsAndGreensA_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//40 0.799 5461/19607
&& !(obj.netsum_r0_below>0.04*obj.amount_ave_21)//5 0.794 5828/20918
&& !(obj.netsum_r0_10<-0.0*obj.amount_ave_21)//2 0.782 8883/27644
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.4*obj.amount_ave_21//2 0.762 14201/36375
&& obj.netsummax_r0_10===-0.0*obj.amount_ave_21//1 0.742 22357/50088
&& obj.amount_ave_21<1.5*obj.amount//1 0.690 62925/100954
&& obj.marketCap < 2500000000//0 0.664 84400/126465
 && function(a, b, c, d, e, f, g, h) {
       //     return true
        var n=i;
        for (; n>1; n--) {
            var inc_ave = klineJson[n].inc_ave_21;
            if (Math.abs(klineutil.increase(klineJson[n].open, klineJson[n].close)) > inc_ave*a) {
                break;
            } 
        }

        return true
            && i-n>= b
            //&& klineutil.increase(klineJson[i-c].close_ave_8, klineJson[i].close_ave_8) > d//-klineJson[i].inc_ave_8*0.8
            && function () {    
            var lowerItems = klineutil.lowerItemsIndex(klineJson, i-e, i, "high", klineJson[i].low);
            var lidx = klineutil.lowItem(klineJson, i-f, i, "low");
            return true
                && i-lowerItems[0] <g 
                && klineutil.increase(lidx, klineJson[i].close) > klineJson[i].inc_ave_8*h
        }()
    }(3, 5, 4, 0, 80, 100, 40, 4)
}
exports.smallRedsAndGreensA_1_0 = smallRedsAndGreensA_1_0//Fri Jan 02 2015 11:50:43 GMT+0800 (中国标准时间)

function smallRedsAndGreensA_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//43 0.799 5517/19726
&& !(obj.netsum_r0_below>0.02*obj.amount_ave_21)//4 0.794 5888/21037
&& !(obj.netsum_r0_10<-0.02*obj.amount_ave_21)//5 0.780 9260/28253
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.4*obj.amount_ave_21//2 0.762 14201/36375
&& obj.netsummax_r0_10===-0.0*obj.amount_ave_21//1 0.742 22357/50088
&& obj.amount_ave_21<1.5*obj.amount//1 0.690 62925/100954
&& obj.marketCap < 2500000000//0 0.664 84400/126465
 && function(a, b, c, d, e, f, g, h) {
       //     return true
        var n=i;
        for (; n>1; n--) {
            var inc_ave = klineJson[n].inc_ave_21;
            if (Math.abs(klineutil.increase(klineJson[n].open, klineJson[n].close)) > inc_ave*a) {
                break;
            } 
        }

        return true
            && i-n>= b
            //&& klineutil.increase(klineJson[i-c].close_ave_8, klineJson[i].close_ave_8) > d//-klineJson[i].inc_ave_8*0.8
            && function () {    
            var lowerItems = klineutil.lowerItemsIndex(klineJson, i-e, i, "high", klineJson[i].low);
            var lidx = klineutil.lowItem(klineJson, i-f, i, "low");
            return true
                && i-lowerItems[0] <g 
                && klineutil.increase(lidx, klineJson[i].close) > klineJson[i].inc_ave_8*h
        }()
    }(3, 5, 4, 0, 80, 100, 40, 4)
}
exports.smallRedsAndGreensA_1_0 = smallRedsAndGreensA_1_0//Fri Jan 02 2015 11:54:57 GMT+0800 (中国标准时间)

function smallRedsAndGreensA_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//42 0.799 5606/19896
&& !(obj.netsum_r0_below>0.04*obj.amount_ave_21)//5 0.793 5978/21214
&& !(obj.netsum_r0_10<-0.02*obj.amount_ave_21)//5 0.780 9260/28253
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.4*obj.amount_ave_21//2 0.762 14201/36375
&& obj.netsummax_r0_10===-0.0*obj.amount_ave_21//1 0.742 22357/50088
&& obj.amount_ave_21<1.5*obj.amount//1 0.690 62925/100954
&& obj.marketCap < 2500000000//0 0.664 84400/126465
 && function(a, b, c, d, e, f, g, h) {
       //     return true
        var n=i;
        for (; n>1; n--) {
            var inc_ave = klineJson[n].inc_ave_21;
            if (Math.abs(klineutil.increase(klineJson[n].open, klineJson[n].close)) > inc_ave*a) {
                break;
            } 
        }

        return true
            && i-n>= b
            //&& klineutil.increase(klineJson[i-c].close_ave_8, klineJson[i].close_ave_8) > d//-klineJson[i].inc_ave_8*0.8
            && function () {    
            var lowerItems = klineutil.lowerItemsIndex(klineJson, i-e, i, "high", klineJson[i].low);
            var lidx = klineutil.lowItem(klineJson, i-f, i, "low");
            return true
                && i-lowerItems[0] <g 
                && klineutil.increase(lidx, klineJson[i].close) > klineJson[i].inc_ave_8*h
        }()
    }(3, 5, 4, 0, 80, 100, 40, 4)
}
exports.smallRedsAndGreensA_1_0 = smallRedsAndGreensA_1_0//Fri Jan 02 2015 11:55:39 GMT+0800 (中国标准时间)

function smallRedsAndGreensA_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//41 0.799 5738/19218
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.4*obj.amount_ave_21//1 0.794 6128/20503
&& obj.netsum_r0_below_60===0.0*obj.amount_ave_21//1 0.773 10328/28622
&& !(obj.netsum_r0_10<-0.0*obj.amount_ave_21)//0 0.746 19549/44513
&& !(obj.netsummax_r0_10>0.05*obj.amount_ave_21)//3 0.711 38128/68963
&& obj.amount_ave_21<1.5*obj.amount//2 0.679 76057/116220
&& obj.marketCap < 3000000000//1 0.654 101167/145655
 && function(a, b, c, d, e, f, g, h) {
       //     return true
        var n=i;
        for (; n>1; n--) {
            var inc_ave = klineJson[n].inc_ave_21;
            if (Math.abs(klineutil.increase(klineJson[n].open, klineJson[n].close)) > inc_ave*a) {
                break;
            } 
        }

        return true
            && i-n>= b
            //&& klineutil.increase(klineJson[i-c].close_ave_8, klineJson[i].close_ave_8) > d//-klineJson[i].inc_ave_8*0.8
            && function () {    
            var lowerItems = klineutil.lowerItemsIndex(klineJson, i-e, i, "high", klineJson[i].low);
            var lidx = klineutil.lowItem(klineJson, i-f, i, "low");
            return true
                && i-lowerItems[0] <g 
                && klineutil.increase(lidx, klineJson[i].close) > klineJson[i].inc_ave_8*h
        }()
    }(3, 5, 4, 0, 80, 100, 40, 4)
}
exports.smallRedsAndGreensA_1_0 = smallRedsAndGreensA_1_0//Fri Jan 02 2015 19:04:39 GMT+0800 (中国标准时间)

function smallRedsAndGreensA_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//12 0.799 5796/19811
&& obj.netsum_r0_below_60===0.0*obj.amount_ave_21//1 0.793 6207/21145
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.5*obj.amount_ave_21//5 0.777 9698/28351
&& !(obj.netsummax_r0_10>0.05*obj.amount_ave_21)//1 0.761 13379/35128
&& obj.netsummin_r0_20===-0*obj.amount_ave_21//2 0.731 27063/54471
&& obj.amount_ave_21<1.5*obj.amount//2 0.669 96573/138856
&& obj.marketCap < 4000000000//2 0.644 126945/173828
 && function(a, b, c, d, e, f, g, h) {
       //     return true
        var n=i;
        for (; n>1; n--) {
            var inc_ave = klineJson[n].inc_ave_21;
            if (Math.abs(klineutil.increase(klineJson[n].open, klineJson[n].close)) > inc_ave*a) {
                break;
            } 
        }

        return true
            && i-n>= b
            //&& klineutil.increase(klineJson[i-c].close_ave_8, klineJson[i].close_ave_8) > d//-klineJson[i].inc_ave_8*0.8
            && function () {    
            var lowerItems = klineutil.lowerItemsIndex(klineJson, i-e, i, "high", klineJson[i].low);
            var lidx = klineutil.lowItem(klineJson, i-f, i, "low");
            return true
                && i-lowerItems[0] <g 
                && klineutil.increase(lidx, klineJson[i].close) > klineJson[i].inc_ave_8*h
        }()
    }(3, 5, 4, 0, 80, 100, 40, 4)
}
exports.smallRedsAndGreensA_1_0 = smallRedsAndGreensA_1_0//Sat Jan 03 2015 08:03:59 GMT+0800 (中国标准时间)

function smallRedsAndGreensA_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//12 0.799 5800/19810
&& obj.netsum_r0_below_60===0.0*obj.amount_ave_21//1 0.793 6222/21156
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.5*obj.amount_ave_21//5 0.776 9863/28534
&& !(obj.netsummin_r0_20<-0*obj.amount_ave_21)//3 0.760 13574/35346
&& !(obj.netsum_r0_10<-0.02*obj.amount_ave_21)//2 0.736 24432/50772
&& !(obj.netsummax_r0_10>0.05*obj.amount_ave_21)//3 0.702 46631/78902
&& obj.amount_ave_21<1.5*obj.amount//2 0.669 96573/138856
&& obj.marketCap < 4000000000//2 0.644 126945/173828
 && function(a, b, c, d, e, f, g, h) {
       //     return true
        var n=i;
        for (; n>1; n--) {
            var inc_ave = klineJson[n].inc_ave_21;
            if (Math.abs(klineutil.increase(klineJson[n].open, klineJson[n].close)) > inc_ave*a) {
                break;
            } 
        }

        return true
            && i-n>= b
            //&& klineutil.increase(klineJson[i-c].close_ave_8, klineJson[i].close_ave_8) > d//-klineJson[i].inc_ave_8*0.8
            && function () {    
            var lowerItems = klineutil.lowerItemsIndex(klineJson, i-e, i, "high", klineJson[i].low);
            var lidx = klineutil.lowItem(klineJson, i-f, i, "low");
            return true
                && i-lowerItems[0] <g 
                && klineutil.increase(lidx, klineJson[i].close) > klineJson[i].inc_ave_8*h
        }()
    }(3, 5, 4, 0, 80, 100, 40, 4)
}
exports.smallRedsAndGreensA_1_0 = smallRedsAndGreensA_1_0//Sat Jan 03 2015 09:36:03 GMT+0800 (中国标准时间)

function smallRedsAndGreensA_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//12 0.799 5801/19811
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.5*obj.amount_ave_21//6 0.793 6222/21156
&& obj.netsum_r0_below_60===0.0*obj.amount_ave_21//7 0.777 8973/26584
&& !(obj.netsummin_r0_20<-0*obj.amount_ave_21)//3 0.760 13574/35346
&& !(obj.netsum_r0_10<-0.02*obj.amount_ave_21)//2 0.736 24432/50772
&& !(obj.netsummax_r0_10>0.05*obj.amount_ave_21)//3 0.702 46631/78902
&& obj.amount_ave_21<1.5*obj.amount//2 0.669 96573/138856
&& obj.marketCap < 4000000000//2 0.644 126945/173828
 && function(a, b, c, d, e, f, g, h) {
       //     return true
        var n=i;
        for (; n>1; n--) {
            var inc_ave = klineJson[n].inc_ave_21;
            if (Math.abs(klineutil.increase(klineJson[n].open, klineJson[n].close)) > inc_ave*a) {
                break;
            } 
        }

        return true
            && i-n>= b
            //&& klineutil.increase(klineJson[i-c].close_ave_8, klineJson[i].close_ave_8) > d//-klineJson[i].inc_ave_8*0.8
            && function () {    
            var lowerItems = klineutil.lowerItemsIndex(klineJson, i-e, i, "high", klineJson[i].low);
            var lidx = klineutil.lowItem(klineJson, i-f, i, "low");
            return true
                && i-lowerItems[0] <g 
                && klineutil.increase(lidx, klineJson[i].close) > klineJson[i].inc_ave_8*h
        }()
    }(3, 5, 4, 0, 80, 100, 40, 4)
}
exports.smallRedsAndGreensA_1_0 = smallRedsAndGreensA_1_0//Sat Jan 03 2015 09:38:16 GMT+0800 (中国标准时间)
