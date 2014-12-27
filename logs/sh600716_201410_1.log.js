
function sh600716_201410_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsum_r0_5<-0.05*obj.amount_ave_21)//39 0.801 5305/13676
&& !(obj.turnover_ave_21>1.2*obj.turnover)//2 0.789 6703/15952
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.2*obj.amount_ave_21//0 0.760 12202/24746
&& obj.netsummax_r0_10===-0.0*obj.amount_ave_21//0 0.710 39296/65630
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.674 94762/127919
&& obj.marketCap < 3000000000//0 0.643 154039/189873
 && function(a, b, c, d, e){
            // return true;
            var highidx = klineutil.highItemIndex(klineJson, i-a, i, "close");
            if (klineutil.increase(obj.close, klineJson[highidx].close) < b*klineJson[highidx].amplitude_ave_21) 
                return false;
            if (obj.amount_ave_21 > c*klineJson[highidx].amount_ave_21)
                return false;

            var lowerItems = klineutil.lowerItemsIndex(klineJson, highidx-d, highidx, "close", obj.close);
            var fstlowidx = lowerItems.length === 0 ? Math.max(0, highidx-d) : lowerItems[lowerItems.length-1];
            var r0sum = 0, r0xsum = 0;
            for (var j=fstlowidx; j<=i; j++) {
                r0sum += klineJson[j].r0_net;
                r0xsum += (klineJson[j].netamount-klineJson[j].r0_net);
            }
            return r0sum> e*obj.amount_ave_21
        }(50, 5, 1, 120, 0.3)
 }
exports.sh600716_201410_1_0 = sh600716_201410_1_0//Sun Dec 21 2014 10:32:17 GMT+0800 (中国标准时间)

function sh600716_201410_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.netsum_r0_above>obj.netsum_r0_below*4//96 0.802 5418/14224
&& !(obj.netsummin_r0_10<-0.05*obj.amount_ave_21)//35 0.796 5985/15052
&& obj.amount_ave_21<1.5*obj.amount//6 0.782 8651/19561
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.2*obj.amount_ave_21//0 0.760 12202/24746
&& obj.netsummax_r0_10===-0.0*obj.amount_ave_21//0 0.710 39296/65630
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.674 94762/127919
&& obj.marketCap < 3000000000//0 0.643 154039/189873
 && function(a, b, c, d, e){
            // return true;
            var highidx = klineutil.highItemIndex(klineJson, i-a, i, "close");
            if (klineutil.increase(obj.close, klineJson[highidx].close) < b*klineJson[highidx].amplitude_ave_21) 
                return false;
            if (obj.amount_ave_21 > c*klineJson[highidx].amount_ave_21)
                return false;

            var lowerItems = klineutil.lowerItemsIndex(klineJson, highidx-d, highidx, "close", obj.close);
            var fstlowidx = lowerItems.length === 0 ? Math.max(0, highidx-d) : lowerItems[lowerItems.length-1];
            var r0sum = 0, r0xsum = 0;
            for (var j=fstlowidx; j<=i; j++) {
                r0sum += klineJson[j].r0_net;
                r0xsum += (klineJson[j].netamount-klineJson[j].r0_net);
            }
            return r0sum> e*obj.amount_ave_21
        }(50, 5, 1, 120, 0.3)
 }
exports.sh600716_201410_1_0 = sh600716_201410_1_0//Sun Dec 21 2014 10:36:24 GMT+0800 (中国标准时间)

function sh600716_201410_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.netsum_r0_above>obj.netsum_r0_below*4//95 0.800 5617/14603
&& !(obj.netsum_r0_10<-0.05*obj.amount_ave_21)//45 0.795 6255/15502
&& obj.amount_ave_21<1.5*obj.amount//6 0.782 8651/19561
&& obj.netsummin_r0x_5-obj.netsummin_r0x_10<0.2*obj.amount_ave_21//0 0.760 12202/24746
&& obj.netsummax_r0_10===-0.0*obj.amount_ave_21//0 0.710 39296/65630
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.674 94762/127919
&& obj.marketCap < 3000000000//0 0.643 154039/189873
 && function(a, b, c, d, e){
            // return true;
            var highidx = klineutil.highItemIndex(klineJson, i-a, i, "close");
            if (klineutil.increase(obj.close, klineJson[highidx].close) < b*klineJson[highidx].amplitude_ave_21) 
                return false;
            if (obj.amount_ave_21 > c*klineJson[highidx].amount_ave_21)
                return false;

            var lowerItems = klineutil.lowerItemsIndex(klineJson, highidx-d, highidx, "close", obj.close);
            var fstlowidx = lowerItems.length === 0 ? Math.max(0, highidx-d) : lowerItems[lowerItems.length-1];
            var r0sum = 0, r0xsum = 0;
            for (var j=fstlowidx; j<=i; j++) {
                r0sum += klineJson[j].r0_net;
                r0xsum += (klineJson[j].netamount-klineJson[j].r0_net);
            }
            return r0sum> e*obj.amount_ave_21
        }(50, 5, 1, 120, 0.3)
 }
exports.sh600716_201410_1_0 = sh600716_201410_1_0//Sun Dec 21 2014 10:37:08 GMT+0800 (中国标准时间)

function sh600716_201410_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsummax_r0_5>0.03*obj.amount_ave_21)//7 0.802 5655/12981
&& !(obj.close_ave_8<obj.close_ave_21)//0 0.778 9546/17699
&& obj.netsummin_r0_20===-0*obj.amount_ave_21//2 0.713 35462/57352
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.674 94762/127919
&& obj.marketCap < 3000000000//0 0.643 154039/189873
 && function(a, b, c, d, e){
            // return true;
            var highidx = klineutil.highItemIndex(klineJson, i-a, i, "close");
            if (klineutil.increase(obj.close, klineJson[highidx].close) < b*klineJson[highidx].amplitude_ave_21) 
                return false;
            if (obj.amount_ave_21 > c*klineJson[highidx].amount_ave_21)
                return false;

            var lowerItems = klineutil.lowerItemsIndex(klineJson, highidx-d, highidx, "close", obj.close);
            var fstlowidx = lowerItems.length === 0 ? Math.max(0, highidx-d) : lowerItems[lowerItems.length-1];
            var r0sum = 0, r0xsum = 0;
            for (var j=fstlowidx; j<=i; j++) {
                r0sum += klineJson[j].r0_net;
                r0xsum += (klineJson[j].netamount-klineJson[j].r0_net);
            }
            return r0sum> e*obj.amount_ave_21
        }(50, 5, 1, 120, 0.3)
 }
exports.sh600716_201410_1_0 = sh600716_201410_1_0//Sun Dec 21 2014 11:41:48 GMT+0800 (中国标准时间)

function sh600716_201410_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.close_ave_8<1.02*obj.close//82 0.801 5712/11927
&& !(obj.netsummin_r0_40<-0.15*obj.amount_ave_21)//15 0.790 6923/13541
&& !(obj.close_ave_8<obj.close_ave_21)//0 0.767 11383/22005
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//3 0.702 51474/80691
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.674 94762/127919
&& obj.marketCap < 3000000000//0 0.643 154039/189873
 && function(a, b, c, d, e){
            // return true;
            var highidx = klineutil.highItemIndex(klineJson, i-a, i, "close");
            if (klineutil.increase(obj.close, klineJson[highidx].close) < b*klineJson[highidx].amplitude_ave_21) 
                return false;
            if (obj.amount_ave_21 > c*klineJson[highidx].amount_ave_21)
                return false;

            var lowerItems = klineutil.lowerItemsIndex(klineJson, highidx-d, highidx, "close", obj.close);
            var fstlowidx = lowerItems.length === 0 ? Math.max(0, highidx-d) : lowerItems[lowerItems.length-1];
            var r0sum = 0, r0xsum = 0;
            for (var j=fstlowidx; j<=i; j++) {
                r0sum += klineJson[j].r0_net;
                r0xsum += (klineJson[j].netamount-klineJson[j].r0_net);
            }
            return r0sum> e*obj.amount_ave_21
        }(50, 5, 1, 120, 0.3)
 }
exports.sh600716_201410_1_0 = sh600716_201410_1_0//Sun Dec 21 2014 11:56:23 GMT+0800 (中国标准时间)

function sh600716_201410_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.close_ave_21<1.05*obj.close//150 0.801 5774/12262
&& !(obj.netsummin_r0_40<-0.2*obj.amount_ave_21)//77 0.799 5867/12369
&& !(obj.netsummin_r0_10<-0.05*obj.amount_ave_21)//19 0.788 7437/16007
&& !(obj.close_ave_8<obj.close_ave_21)//0 0.767 11383/22005
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//3 0.702 51474/80691
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.674 94762/127919
&& obj.marketCap < 3000000000//0 0.643 154039/189873
 && function(a, b, c, d, e){
            // return true;
            var highidx = klineutil.highItemIndex(klineJson, i-a, i, "close");
            if (klineutil.increase(obj.close, klineJson[highidx].close) < b*klineJson[highidx].amplitude_ave_21) 
                return false;
            if (obj.amount_ave_21 > c*klineJson[highidx].amount_ave_21)
                return false;

            var lowerItems = klineutil.lowerItemsIndex(klineJson, highidx-d, highidx, "close", obj.close);
            var fstlowidx = lowerItems.length === 0 ? Math.max(0, highidx-d) : lowerItems[lowerItems.length-1];
            var r0sum = 0, r0xsum = 0;
            for (var j=fstlowidx; j<=i; j++) {
                r0sum += klineJson[j].r0_net;
                r0xsum += (klineJson[j].netamount-klineJson[j].r0_net);
            }
            return r0sum> e*obj.amount_ave_21
        }(50, 5, 1, 120, 0.3)
 }
exports.sh600716_201410_1_0 = sh600716_201410_1_0//Sun Dec 21 2014 11:58:33 GMT+0800 (中国标准时间)

function sh600716_201410_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//150 0.800 6060/13751
&& obj.close_ave_8<1.02*obj.close//80 0.798 6205/14235
&& !(obj.netsummin_r0_10<-0.05*obj.amount_ave_21)//19 0.788 7437/16007
&& !(obj.close_ave_8<obj.close_ave_21)//0 0.767 11383/22005
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//3 0.702 51474/80691
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.674 94762/127919
&& obj.marketCap < 3000000000//0 0.643 154039/189873
 && function(a, b, c, d, e){
            // return true;
            var highidx = klineutil.highItemIndex(klineJson, i-a, i, "close");
            if (klineutil.increase(obj.close, klineJson[highidx].close) < b*klineJson[highidx].amplitude_ave_21) 
                return false;
            if (obj.amount_ave_21 > c*klineJson[highidx].amount_ave_21)
                return false;

            var lowerItems = klineutil.lowerItemsIndex(klineJson, highidx-d, highidx, "close", obj.close);
            var fstlowidx = lowerItems.length === 0 ? Math.max(0, highidx-d) : lowerItems[lowerItems.length-1];
            var r0sum = 0, r0xsum = 0;
            for (var j=fstlowidx; j<=i; j++) {
                r0sum += klineJson[j].r0_net;
                r0xsum += (klineJson[j].netamount-klineJson[j].r0_net);
            }
            return r0sum> e*obj.amount_ave_21
        }(50, 5, 1, 120, 0.3)
 }
exports.sh600716_201410_1_0 = sh600716_201410_1_0//Sun Dec 21 2014 11:59:15 GMT+0800 (中国标准时间)

function sh600716_201410_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.close_ave_21<1.05*obj.close//166 0.801 6232/14327
&& !(obj.netsummin_r0_5<-0.05*obj.amount_ave_21)//34 0.800 6316/14429
&& obj.amount_ave_21<1.5*obj.amount//22 0.786 8065/17164
&& !(obj.close_ave_8<obj.close_ave_21)//0 0.767 11383/22005
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//3 0.702 51474/80691
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.674 94762/127919
&& obj.marketCap < 3000000000//0 0.643 154039/189873
 && function(a, b, c, d, e){
            // return true;
            var highidx = klineutil.highItemIndex(klineJson, i-a, i, "close");
            if (klineutil.increase(obj.close, klineJson[highidx].close) < b*klineJson[highidx].amplitude_ave_21) 
                return false;
            if (obj.amount_ave_21 > c*klineJson[highidx].amount_ave_21)
                return false;

            var lowerItems = klineutil.lowerItemsIndex(klineJson, highidx-d, highidx, "close", obj.close);
            var fstlowidx = lowerItems.length === 0 ? Math.max(0, highidx-d) : lowerItems[lowerItems.length-1];
            var r0sum = 0, r0xsum = 0;
            for (var j=fstlowidx; j<=i; j++) {
                r0sum += klineJson[j].r0_net;
                r0xsum += (klineJson[j].netamount-klineJson[j].r0_net);
            }
            return r0sum> e*obj.amount_ave_21
        }(50, 5, 1, 120, 0.3)
 }
exports.sh600716_201410_1_0 = sh600716_201410_1_0//Sun Dec 21 2014 12:01:32 GMT+0800 (中国标准时间)

function sh600716_201410_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//146 0.800 6270/14095
&& !(obj.netsum_r0_5<-0.05*obj.amount_ave_21)//50 0.798 6438/14616
&& obj.amount_ave_21<1.5*obj.amount//22 0.786 8065/17164
&& !(obj.close_ave_8<obj.close_ave_21)//0 0.767 11383/22005
&& obj.netsummax_r0_5===0.0*obj.amount_ave_21//3 0.702 51474/80691
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.674 94762/127919
&& obj.marketCap < 3000000000//0 0.643 154039/189873
 && function(a, b, c, d, e){
            // return true;
            var highidx = klineutil.highItemIndex(klineJson, i-a, i, "close");
            if (klineutil.increase(obj.close, klineJson[highidx].close) < b*klineJson[highidx].amplitude_ave_21) 
                return false;
            if (obj.amount_ave_21 > c*klineJson[highidx].amount_ave_21)
                return false;

            var lowerItems = klineutil.lowerItemsIndex(klineJson, highidx-d, highidx, "close", obj.close);
            var fstlowidx = lowerItems.length === 0 ? Math.max(0, highidx-d) : lowerItems[lowerItems.length-1];
            var r0sum = 0, r0xsum = 0;
            for (var j=fstlowidx; j<=i; j++) {
                r0sum += klineJson[j].r0_net;
                r0xsum += (klineJson[j].netamount-klineJson[j].r0_net);
            }
            return r0sum> e*obj.amount_ave_21
        }(50, 5, 1, 120, 0.3)
 }
exports.sh600716_201410_1_0 = sh600716_201410_1_0//Sun Dec 21 2014 12:02:18 GMT+0800 (中国标准时间)

function sh600716_201410_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.close_ave_21<1.03*obj.close//120 0.801 6563/11594
&& !(obj.netsummin_r0_40<-0*obj.amount_ave_21)//24 0.795 6868/11948
&& obj.netsummin_r0_20===-0*obj.amount_ave_21//0 0.778 9546/17699
&& !(obj.close_ave_8<obj.close_ave_21)//4 0.723 25692/38385
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.674 94762/127919
&& obj.marketCap < 3000000000//0 0.643 154039/189873
 && function(a, b, c, d, e){
            // return true;
            var highidx = klineutil.highItemIndex(klineJson, i-a, i, "close");
            if (klineutil.increase(obj.close, klineJson[highidx].close) < b*klineJson[highidx].amplitude_ave_21) 
                return false;
            if (obj.amount_ave_21 > c*klineJson[highidx].amount_ave_21)
                return false;

            var lowerItems = klineutil.lowerItemsIndex(klineJson, highidx-d, highidx, "close", obj.close);
            var fstlowidx = lowerItems.length === 0 ? Math.max(0, highidx-d) : lowerItems[lowerItems.length-1];
            var r0sum = 0, r0xsum = 0;
            for (var j=fstlowidx; j<=i; j++) {
                r0sum += klineJson[j].r0_net;
                r0xsum += (klineJson[j].netamount-klineJson[j].r0_net);
            }
            return r0sum> e*obj.amount_ave_21
        }(50, 5, 1, 120, 0.3)
 }
exports.sh600716_201410_1_0 = sh600716_201410_1_0//Sun Dec 21 2014 12:17:20 GMT+0800 (中国标准时间)

function sh600716_201410_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return obj.close_ave_21<1.03*obj.close//120 0.801 6564/11596
&& obj.netsummin_r0_20===-0*obj.amount_ave_21//15 0.795 6868/11948
&& !(obj.netsummin_r0_40<-0*obj.amount_ave_21)//3 0.773 8791/14225
&& !(obj.close_ave_8<obj.close_ave_21)//4 0.723 25692/38385
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//0 0.674 94762/127919
&& obj.marketCap < 3000000000//0 0.643 154039/189873
 && function(a, b, c, d, e){
            // return true;
            var highidx = klineutil.highItemIndex(klineJson, i-a, i, "close");
            if (klineutil.increase(obj.close, klineJson[highidx].close) < b*klineJson[highidx].amplitude_ave_21) 
                return false;
            if (obj.amount_ave_21 > c*klineJson[highidx].amount_ave_21)
                return false;

            var lowerItems = klineutil.lowerItemsIndex(klineJson, highidx-d, highidx, "close", obj.close);
            var fstlowidx = lowerItems.length === 0 ? Math.max(0, highidx-d) : lowerItems[lowerItems.length-1];
            var r0sum = 0, r0xsum = 0;
            for (var j=fstlowidx; j<=i; j++) {
                r0sum += klineJson[j].r0_net;
                r0xsum += (klineJson[j].netamount-klineJson[j].r0_net);
            }
            return r0sum> e*obj.amount_ave_21
        }(50, 5, 1, 120, 0.3)
 }
exports.sh600716_201410_1_0 = sh600716_201410_1_0//Sun Dec 21 2014 12:24:55 GMT+0800 (中国标准时间)
