
function redNGreenRed_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsummax_r0_20+obj.netsummin_r0x_20>0)//32 0.798 5951/14968
&& !(obj.close_ave_8<obj.close_ave_21)//0 0.783 7522/17435
&& obj.marketCap < 2500000000//0 0.742 21364/43775
&& obj.amount_ave_21<1.05*obj.amount_ave_8//0 0.667 61633/89174
 && function(a, b, c, d, e){
            var top = klineutil.highIndexOfDownTrend(klineJson, i-1);            
            
            if (klineutil.increase(klineJson[top].high, obj.close) > -obj.amplitude_ave_8 * a //-inc_ave*3.5 
                && klineutil.increase(klineJson[top].high, obj.close) <  obj.amplitude_ave_8*b) {
                var lowerItems = klineutil.lowerItemsIndex(klineJson, top-c, top-1, "low", klineJson[top-1].high);
                return lowerItems.length >d && lowerItems.length <e;
            }
             return false;
        } (2, 1, 120, 6, 27) 
}
exports.redNGreenRed_1_0 = redNGreenRed_1_0//Sun Dec 28 2014 23:22:40 GMT+0800 (中国标准时间)

function redNGreenRed_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsum_r0x_40>0.1*obj.amount_ave_21)//163 0.799 6344/15510
&& !(obj.amount_ave_8<0.5*obj.amount)//62 0.795 6680/16128
&& obj.marketCap < 2500000000//15 0.783 7522/17429
&& !(obj.close_ave_8<obj.close_ave_21)//5 0.765 9341/19993
&& obj.marketCap < 3000000000//1 0.727 26630/50631
&& obj.amount_ave_21<1.05*obj.amount_ave_8//0 0.667 61633/89174
 && function(a, b, c, d, e){
            var top = klineutil.highIndexOfDownTrend(klineJson, i-1);            
            
            if (klineutil.increase(klineJson[top].high, obj.close) > -obj.amplitude_ave_8 * a //-inc_ave*3.5 
                && klineutil.increase(klineJson[top].high, obj.close) <  obj.amplitude_ave_8*b) {
                var lowerItems = klineutil.lowerItemsIndex(klineJson, top-c, top-1, "low", klineJson[top-1].high);
                return lowerItems.length >d && lowerItems.length <e;
            }
             return false;
        } (2, 1, 120, 6, 27) 
}
exports.redNGreenRed_1_0 = redNGreenRed_1_0//Sun Dec 28 2014 23:37:06 GMT+0800 (中国标准时间)

function redNGreenRed_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsum_r0x_40>obj.netsum_r0_40)//170 0.798 6471/15689
&& !(obj.amount_ave_8<0.5*obj.amount)//62 0.795 6680/16131
&& !(obj.close_ave_8<obj.close_ave_21)//0 0.783 7522/17429
&& obj.marketCap < 2500000000//1 0.742 21364/43774
&& obj.marketCap < 4000000000//2 0.713 34322/60063
&& obj.amount_ave_21<1.05*obj.amount_ave_8//0 0.667 61633/89174
 && function(a, b, c, d, e){
            var top = klineutil.highIndexOfDownTrend(klineJson, i-1);            
            
            if (klineutil.increase(klineJson[top].high, obj.close) > -obj.amplitude_ave_8 * a //-inc_ave*3.5 
                && klineutil.increase(klineJson[top].high, obj.close) <  obj.amplitude_ave_8*b) {
                var lowerItems = klineutil.lowerItemsIndex(klineJson, top-c, top-1, "low", klineJson[top-1].high);
                return lowerItems.length >d && lowerItems.length <e;
            }
             return false;
        } (2, 1, 120, 6, 27) 
}
exports.redNGreenRed_1_0 = redNGreenRed_1_0//Sun Dec 28 2014 23:42:28 GMT+0800 (中国标准时间)

function redNGreenRed_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.r0_ratio>0.05)//164 0.800 6483/17007
&& !(obj.netsummax_r0_20>0.3*obj.amount_ave_21)//27 0.796 6955/17563
&& !(obj.close_ave_8<obj.close_ave_21)//0 0.781 9363/21245
&& obj.marketCap < 2500000000//0 0.708 38199/67413
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//2 0.640 104082/140424
 && function(a, b, c, d, e){
            var top = klineutil.highIndexOfDownTrend(klineJson, i-1);            
            
            if (klineutil.increase(klineJson[top].high, obj.close) > -obj.amplitude_ave_8 * a //-inc_ave*3.5 
                && klineutil.increase(klineJson[top].high, obj.close) <  obj.amplitude_ave_8*b) {
                var lowerItems = klineutil.lowerItemsIndex(klineJson, top-c, top-1, "low", klineJson[top-1].high);
                return lowerItems.length >d && lowerItems.length <e;
            }
             return false;
        } (2, 1, 120, 6, 27) 
}
exports.redNGreenRed_1_0 = redNGreenRed_1_0//Mon Dec 29 2014 00:04:50 GMT+0800 (中国标准时间)

function redNGreenRed_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.r0_ratio>0.05)//126 0.799 6905/17385
&& !(obj.amount_ave_21<0.5*obj.amount)//37 0.794 7564/18155
&& !(obj.close_ave_8<obj.close_ave_21)//0 0.781 9363/21245
&& obj.marketCap < 2500000000//0 0.708 38199/67413
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//2 0.640 104082/140424
 && function(a, b, c, d, e){
            var top = klineutil.highIndexOfDownTrend(klineJson, i-1);            
            
            if (klineutil.increase(klineJson[top].high, obj.close) > -obj.amplitude_ave_8 * a //-inc_ave*3.5 
                && klineutil.increase(klineJson[top].high, obj.close) <  obj.amplitude_ave_8*b) {
                var lowerItems = klineutil.lowerItemsIndex(klineJson, top-c, top-1, "low", klineJson[top-1].high);
                return lowerItems.length >d && lowerItems.length <e;
            }
             return false;
        } (2, 1, 120, 6, 27) 
}
exports.redNGreenRed_1_0 = redNGreenRed_1_0//Mon Dec 29 2014 00:05:29 GMT+0800 (中国标准时间)

function redNGreenRed_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.amount_ave_8<0.5*obj.amount)//107 0.799 7131/17601
&& !(obj.netsummax_r0_20+obj.netsummin_r0x_20>0)//56 0.792 7644/18515
&& !(obj.close_ave_8<obj.close_ave_21)//0 0.781 9363/21245
&& obj.marketCap < 2500000000//0 0.708 38199/67413
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//2 0.640 104082/140424
 && function(a, b, c, d, e){
            var top = klineutil.highIndexOfDownTrend(klineJson, i-1);            
            
            if (klineutil.increase(klineJson[top].high, obj.close) > -obj.amplitude_ave_8 * a //-inc_ave*3.5 
                && klineutil.increase(klineJson[top].high, obj.close) <  obj.amplitude_ave_8*b) {
                var lowerItems = klineutil.lowerItemsIndex(klineJson, top-c, top-1, "low", klineJson[top-1].high);
                return lowerItems.length >d && lowerItems.length <e;
            }
             return false;
        } (2, 1, 120, 6, 27) 
}
exports.redNGreenRed_1_0 = redNGreenRed_1_0//Mon Dec 29 2014 00:06:09 GMT+0800 (中国标准时间)

function redNGreenRed_1_0(klineJson, i) {
    var obj = klineJson[i];
    if (obj.netsummax_r0 === undefined) return false;

    return !(obj.netsummax_r0_20>0.5*obj.amount_ave_21)//97 0.798 7344/18128
&& !(obj.amount_ave_8<0.5*obj.amount)//61 0.791 8448/19799
&& !(obj.close_ave_8<obj.close_ave_21)//0 0.781 9363/21245
&& obj.marketCap < 2500000000//0 0.708 38199/67413
&& obj.turnover_ave_8>0.8*obj.turnover_ave_21//2 0.640 104082/140424
 && function(a, b, c, d, e){
            var top = klineutil.highIndexOfDownTrend(klineJson, i-1);            
            
            if (klineutil.increase(klineJson[top].high, obj.close) > -obj.amplitude_ave_8 * a //-inc_ave*3.5 
                && klineutil.increase(klineJson[top].high, obj.close) <  obj.amplitude_ave_8*b) {
                var lowerItems = klineutil.lowerItemsIndex(klineJson, top-c, top-1, "low", klineJson[top-1].high);
                return lowerItems.length >d && lowerItems.length <e;
            }
             return false;
        } (2, 1, 120, 6, 27) 
}
exports.redNGreenRed_1_0 = redNGreenRed_1_0//Mon Dec 29 2014 00:06:49 GMT+0800 (中国标准时间)
