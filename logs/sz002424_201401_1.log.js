
function sz002424_201401_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.close_ave_8<obj.close_ave_233//5 0.803 3330/16257
&& obj.netsummin_r0_20===-0*obj.amount_ave_21//0 0.789 4223/19029
&& obj.netsum_r0_below>1.2*obj.netsum_r0x_below//0 0.748 13125/34699
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.710 33449/69818
&& obj.amount_ave_21<1.5*obj.amount//0 0.675 78802/121501
&& obj.marketCap < 3000000000//0 0.653 129975/180540
 && function(a, b, c, d, e, f, g) {
            //return true;
            var n = i;
            for (; i-n<a; n--) {
                if (klineutil.increase(klineJson[i].amount_ave_8, klineJson[n].amount_ave_8)>b)
                    break;
            }

            if (i-n>=a) return false;

            var lidx = klineutil.lowItemIndex(klineJson, n-c, i, "close");
            var hidx = klineutil.highItemIndex(klineJson, n-d, n, "close");
            var re = true
                && n-lidx<e
                && klineutil.increase(klineJson[i].close, klineJson[n].close)>f*0.03//klineJson[i].amplitude_ave_8
                && klineutil.increase(klineJson[n].close, klineJson[hidx].close)>g*0.03//klineJson[n].amplitude_ave_8
               
            return re;
        }(60, 0.5, 30, 60, 10, 2.5, 0)
 }
exports.sz002424_201401_1_0 = sz002424_201401_1_0//Sun Mar 08 2015 16:03:45 GMT+0800 (中国标准时间)

function sz002424_201401_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//93 0.799 3416/15799
&& obj.netsum_r0_below===0.0*obj.amount_ave_21//0 0.795 3637/16702
&& !(obj.netsummin_r0_10<-0.05*obj.amount_ave_21)//2 0.772 7175/24767
&& obj.netsum_r0_below>1.2*obj.netsum_r0x_below//0 0.748 13125/34699
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.710 33449/69818
&& obj.amount_ave_21<1.5*obj.amount//0 0.675 78802/121501
&& obj.marketCap < 3000000000//0 0.653 129975/180540
 && function(a, b, c, d, e, f, g) {
            //return true;
            var n = i;
            for (; i-n<a; n--) {
                if (klineutil.increase(klineJson[i].amount_ave_8, klineJson[n].amount_ave_8)>b)
                    break;
            }

            if (i-n>=a) return false;

            var lidx = klineutil.lowItemIndex(klineJson, n-c, i, "close");
            var hidx = klineutil.highItemIndex(klineJson, n-d, n, "close");
            var re = true
                && n-lidx<e
                && klineutil.increase(klineJson[i].close, klineJson[n].close)>f*0.03//klineJson[i].amplitude_ave_8
                && klineutil.increase(klineJson[n].close, klineJson[hidx].close)>g*0.03//klineJson[n].amplitude_ave_8
               
            return re;
        }(60, 0.5, 30, 60, 10, 2.5, 0)
 }
exports.sz002424_201401_1_0 = sz002424_201401_1_0//Sun Mar 08 2015 16:05:17 GMT+0800 (中国标准时间)

function sz002424_201401_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.netsummin_r0_10===obj.netsummin_r0_20//14 0.799 3585/16816
&& obj.close_ave_8<obj.close_ave_233//22 0.785 5328/20640
&& !(obj.netsummin_r0_10<-0.05*obj.amount_ave_21)//2 0.772 7175/24767
&& obj.netsum_r0_below>1.2*obj.netsum_r0x_below//0 0.748 13125/34699
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.710 33449/69818
&& obj.amount_ave_21<1.5*obj.amount//0 0.675 78802/121501
&& obj.marketCap < 3000000000//0 0.653 129975/180540
 && function(a, b, c, d, e, f, g) {
            //return true;
            var n = i;
            for (; i-n<a; n--) {
                if (klineutil.increase(klineJson[i].amount_ave_8, klineJson[n].amount_ave_8)>b)
                    break;
            }

            if (i-n>=a) return false;

            var lidx = klineutil.lowItemIndex(klineJson, n-c, i, "close");
            var hidx = klineutil.highItemIndex(klineJson, n-d, n, "close");
            var re = true
                && n-lidx<e
                && klineutil.increase(klineJson[i].close, klineJson[n].close)>f*0.03//klineJson[i].amplitude_ave_8
                && klineutil.increase(klineJson[n].close, klineJson[hidx].close)>g*0.03//klineJson[n].amplitude_ave_8
               
            return re;
        }(60, 0.5, 30, 60, 10, 2.5, 0)
 }
exports.sz002424_201401_1_0 = sz002424_201401_1_0//Sun Mar 08 2015 16:07:17 GMT+0800 (中国标准时间)

function sz002424_201401_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsum_r0_10<-0.02*obj.amount_ave_21)//105 0.798 3692/16495
&& obj.close_ave_8<obj.close_ave_233//37 0.795 3853/16886
&& !(obj.netsum_r0_below>0.02*obj.amount_ave_21)//44 0.785 4615/19260
&& !(obj.netsummin_r0_10<-0.05*obj.amount_ave_21)//2 0.772 7175/24767
&& obj.netsum_r0_below>1.2*obj.netsum_r0x_below//0 0.748 13125/34699
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.710 33449/69818
&& obj.amount_ave_21<1.5*obj.amount//0 0.675 78802/121501
&& obj.marketCap < 3000000000//0 0.653 129975/180540
 && function(a, b, c, d, e, f, g) {
            //return true;
            var n = i;
            for (; i-n<a; n--) {
                if (klineutil.increase(klineJson[i].amount_ave_8, klineJson[n].amount_ave_8)>b)
                    break;
            }

            if (i-n>=a) return false;

            var lidx = klineutil.lowItemIndex(klineJson, n-c, i, "close");
            var hidx = klineutil.highItemIndex(klineJson, n-d, n, "close");
            var re = true
                && n-lidx<e
                && klineutil.increase(klineJson[i].close, klineJson[n].close)>f*0.03//klineJson[i].amplitude_ave_8
                && klineutil.increase(klineJson[n].close, klineJson[hidx].close)>g*0.03//klineJson[n].amplitude_ave_8
               
            return re;
        }(60, 0.5, 30, 60, 10, 2.5, 0)
 }
exports.sz002424_201401_1_0 = sz002424_201401_1_0//Sun Mar 08 2015 16:11:45 GMT+0800 (中国标准时间)

function sz002424_201401_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsum_r0_10<-0.02*obj.amount_ave_21)//132 0.799 3711/16938
&& obj.close_ave_8<obj.close_ave_233//5 0.798 3789/17084
&& obj.netsum_r0_20>=0.0*obj.amount_ave_21//48 0.783 4977/20242
&& !(obj.netsummin_r0_10<-0.05*obj.amount_ave_21)//2 0.772 7175/24767
&& obj.netsum_r0_below>1.2*obj.netsum_r0x_below//0 0.748 13125/34699
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.710 33449/69818
&& obj.amount_ave_21<1.5*obj.amount//0 0.675 78802/121501
&& obj.marketCap < 3000000000//0 0.653 129975/180540
 && function(a, b, c, d, e, f, g) {
            //return true;
            var n = i;
            for (; i-n<a; n--) {
                if (klineutil.increase(klineJson[i].amount_ave_8, klineJson[n].amount_ave_8)>b)
                    break;
            }

            if (i-n>=a) return false;

            var lidx = klineutil.lowItemIndex(klineJson, n-c, i, "close");
            var hidx = klineutil.highItemIndex(klineJson, n-d, n, "close");
            var re = true
                && n-lidx<e
                && klineutil.increase(klineJson[i].close, klineJson[n].close)>f*0.03//klineJson[i].amplitude_ave_8
                && klineutil.increase(klineJson[n].close, klineJson[hidx].close)>g*0.03//klineJson[n].amplitude_ave_8
               
            return re;
        }(60, 0.5, 30, 60, 10, 2.5, 0)
 }
exports.sz002424_201401_1_0 = sz002424_201401_1_0//Sun Mar 08 2015 16:13:42 GMT+0800 (中国标准时间)

function sz002424_201401_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsum_r0_10<-0.02*obj.amount_ave_21)//106 0.798 4041/18610
&& obj.close_ave_8<obj.close_ave_233//16 0.795 4243/19088
&& obj.netsum_r0_below_60>obj.netsum_r0x_below_60//49 0.782 5440/22397
&& !(obj.netsummin_r0_10<-0.05*obj.amount_ave_21)//2 0.772 7175/24767
&& obj.netsum_r0_below>1.2*obj.netsum_r0x_below//0 0.748 13125/34699
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.710 33449/69818
&& obj.amount_ave_21<1.5*obj.amount//0 0.675 78802/121501
&& obj.marketCap < 3000000000//0 0.653 129975/180540
 && function(a, b, c, d, e, f, g) {
            //return true;
            var n = i;
            for (; i-n<a; n--) {
                if (klineutil.increase(klineJson[i].amount_ave_8, klineJson[n].amount_ave_8)>b)
                    break;
            }

            if (i-n>=a) return false;

            var lidx = klineutil.lowItemIndex(klineJson, n-c, i, "close");
            var hidx = klineutil.highItemIndex(klineJson, n-d, n, "close");
            var re = true
                && n-lidx<e
                && klineutil.increase(klineJson[i].close, klineJson[n].close)>f*0.03//klineJson[i].amplitude_ave_8
                && klineutil.increase(klineJson[n].close, klineJson[hidx].close)>g*0.03//klineJson[n].amplitude_ave_8
               
            return re;
        }(60, 0.5, 30, 60, 10, 2.5, 0)
 }
exports.sz002424_201401_1_0 = sz002424_201401_1_0//Sun Mar 08 2015 16:14:41 GMT+0800 (中国标准时间)

function sz002424_201401_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsummin_r0_10<-0.05*obj.amount_ave_21)//76 0.799 4046/18621
&& obj.netsum_r0_below_60>obj.netsum_r0x_below_60//44 0.792 4722/19740
&& obj.close_ave_8<obj.close_ave_233//25 0.782 5823/21306
&& !(obj.netsum_r0_10<-0.02*obj.amount_ave_21)//5 0.768 7871/25658
&& obj.netsum_r0_below>1.2*obj.netsum_r0x_below//0 0.748 13125/34699
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.710 33449/69818
&& obj.amount_ave_21<1.5*obj.amount//0 0.675 78802/121501
&& obj.marketCap < 3000000000//0 0.653 129975/180540
 && function(a, b, c, d, e, f, g) {
            //return true;
            var n = i;
            for (; i-n<a; n--) {
                if (klineutil.increase(klineJson[i].amount_ave_8, klineJson[n].amount_ave_8)>b)
                    break;
            }

            if (i-n>=a) return false;

            var lidx = klineutil.lowItemIndex(klineJson, n-c, i, "close");
            var hidx = klineutil.highItemIndex(klineJson, n-d, n, "close");
            var re = true
                && n-lidx<e
                && klineutil.increase(klineJson[i].close, klineJson[n].close)>f*0.03//klineJson[i].amplitude_ave_8
                && klineutil.increase(klineJson[n].close, klineJson[hidx].close)>g*0.03//klineJson[n].amplitude_ave_8
               
            return re;
        }(60, 0.5, 30, 60, 10, 2.5, 0)
 }
exports.sz002424_201401_1_0 = sz002424_201401_1_0//Sun Mar 08 2015 16:29:12 GMT+0800 (中国标准时间)

function sz002424_201401_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsummin_r0_10<-0.05*obj.amount_ave_21)//76 0.798 4050/18640
&& obj.netsum_r0_below_60>obj.netsum_r0x_below_60//41 0.792 4732/19769
&& obj.close_ave_8<obj.close_ave_233//23 0.782 5846/21347
&& !(obj.netsum_r0_10<-0.02*obj.amount_ave_21)//5 0.768 7926/25740
&& obj.netsum_r0_below>obj.netsum_r0x_below//1 0.748 13212/34800
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//0 0.710 33449/69818
&& obj.amount_ave_21<1.5*obj.amount//0 0.675 78802/121501
&& obj.marketCap < 3000000000//0 0.653 129975/180540
 && function(a, b, c, d, e, f, g) {
            //return true;
            var n = i;
            for (; i-n<a; n--) {
                if (klineutil.increase(klineJson[i].amount_ave_8, klineJson[n].amount_ave_8)>b)
                    break;
            }

            if (i-n>=a) return false;

            var lidx = klineutil.lowItemIndex(klineJson, n-c, i, "close");
            var hidx = klineutil.highItemIndex(klineJson, n-d, n, "close");
            var re = true
                && n-lidx<e
                && klineutil.increase(klineJson[i].close, klineJson[n].close)>f*0.03//klineJson[i].amplitude_ave_8
                && klineutil.increase(klineJson[n].close, klineJson[hidx].close)>g*0.03//klineJson[n].amplitude_ave_8
               
            return re;
        }(60, 0.5, 30, 60, 10, 2.5, 0)
 }
exports.sz002424_201401_1_0 = sz002424_201401_1_0//Sun Mar 08 2015 16:55:48 GMT+0800 (中国标准时间)

function sz002424_201401_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.close_ave_8<obj.close_ave_233//78 0.798 4140/14554
&& obj.netsum_r0_below_60>obj.netsum_r0x_below_60//37 0.793 4521/15642
&& obj.close_ave_8<1.03*obj.close//47 0.783 5189/16619
&& !(obj.close_ave_144<1.05*obj.close)//2 0.772 6732/18581
&& obj.netsum_r0_below> 0.8*obj.netsum_r0x_below//0 0.743 13803/32704
&& obj.netsummin_r0_20===-0*obj.amount_ave_21//1 0.701 34728/67318
&& obj.marketCap < 3000000000//0 0.653 129975/180540
 && function(a, b, c, d, e, f, g) {
            //return true;
            var n = i;
            for (; i-n<a; n--) {
                if (klineutil.increase(klineJson[i].amount_ave_8, klineJson[n].amount_ave_8)>b)
                    break;
            }

            if (i-n>=a) return false;

            var lidx = klineutil.lowItemIndex(klineJson, n-c, i, "close");
            var hidx = klineutil.highItemIndex(klineJson, n-d, n, "close");
            var re = true
                && n-lidx<e
                && klineutil.increase(klineJson[i].close, klineJson[n].close)>f*0.03//klineJson[i].amplitude_ave_8
                && klineutil.increase(klineJson[n].close, klineJson[hidx].close)>g*0.03//klineJson[n].amplitude_ave_8
               
            return re;
        }(60, 0.5, 30, 60, 10, 2.5, 0)
 }
exports.sz002424_201401_1_0 = sz002424_201401_1_0//Sun Mar 08 2015 18:15:39 GMT+0800 (中国标准时间)

function sz002424_201401_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//108 0.798 4270/17317
&& obj.netsum_r0_below_60>obj.netsum_r0x_below_60//6 0.795 4510/18266
&& obj.close_ave_8<obj.close_ave_233//8 0.779 6352/20614
&& !(obj.netsum_r0_10<-0.0*obj.amount_ave_21)//0 0.763 8401/24746
&& obj.netsummax_r0_10===-0.0*obj.amount_ave_21//1 0.727 19275/40267
&& obj.netsum_r0_below>obj.netsum_r0x_below//2 0.680 62658/92671
&& obj.marketCap < 3000000000//0 0.653 129975/180540
 && function(a, b, c, d, e, f, g) {
            //return true;
            var n = i;
            for (; i-n<a; n--) {
                if (klineutil.increase(klineJson[i].amount_ave_8, klineJson[n].amount_ave_8)>b)
                    break;
            }

            if (i-n>=a) return false;

            var lidx = klineutil.lowItemIndex(klineJson, n-c, i, "close");
            var hidx = klineutil.highItemIndex(klineJson, n-d, n, "close");
            var re = true
                && n-lidx<e
                && klineutil.increase(klineJson[i].close, klineJson[n].close)>f*0.03//klineJson[i].amplitude_ave_8
                && klineutil.increase(klineJson[n].close, klineJson[hidx].close)>g*0.03//klineJson[n].amplitude_ave_8
               
            return re;
        }(60, 0.5, 30, 60, 10, 2.5, 0)
 }
exports.sz002424_201401_1_0 = sz002424_201401_1_0//Sun Mar 08 2015 19:11:32 GMT+0800 (中国标准时间)

function sz002424_201401_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.close_ave_8<obj.close_ave_144//88 0.798 4340/17652
&& obj.netsum_r0_below_60>obj.netsum_r0x_below_60//6 0.793 4776/18766
&& obj.close_ave_8<obj.close_ave_233//6 0.777 6725/21224
&& !(obj.netsum_r0_10<-0.02*obj.amount_ave_21)//1 0.760 9093/25733
&& obj.netsummax_r0_10===-0.0*obj.amount_ave_21//1 0.727 19275/40267
&& obj.netsum_r0_below>obj.netsum_r0x_below//2 0.680 62658/92671
&& obj.marketCap < 3000000000//0 0.653 129975/180540
 && function(a, b, c, d, e, f, g) {
            //return true;
            var n = i;
            for (; i-n<a; n--) {
                if (klineutil.increase(klineJson[i].amount_ave_8, klineJson[n].amount_ave_8)>b)
                    break;
            }

            if (i-n>=a) return false;

            var lidx = klineutil.lowItemIndex(klineJson, n-c, i, "close");
            var hidx = klineutil.highItemIndex(klineJson, n-d, n, "close");
            var re = true
                && n-lidx<e
                && klineutil.increase(klineJson[i].close, klineJson[n].close)>f*0.03//klineJson[i].amplitude_ave_8
                && klineutil.increase(klineJson[n].close, klineJson[hidx].close)>g*0.03//klineJson[n].amplitude_ave_8
               
            return re;
        }(60, 0.5, 30, 60, 10, 2.5, 0)
 }
exports.sz002424_201401_1_0 = sz002424_201401_1_0//Sun Mar 08 2015 19:16:38 GMT+0800 (中国标准时间)
