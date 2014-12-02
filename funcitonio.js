var fs = require("fs");
var klineformbase = require("./klineformbase");
var form80 = require("./kline/form/form80");

function writeFunctionSync(baseFunctionName, conditions) {
  var fstr = klineformbase[baseFunctionName].toString();
  var i = 0;
  while(form80[baseFunctionName+"_"+i]) {i++};
  var fname = baseFunctionName+"_"+i;
  console.log("fname", fname)
  fstr = "\r\n"+fstr;
  fstr = fstr.replace(baseFunctionName, fname);
  fstr = fstr.replace("\/**\/return", "return "+conditions+"\r\n &&");
  fstr += "\r\n";
  fstr += "exports." + fname + " = " + fname + "//"+new Date()+"\r\n";
  // fs.appendFileSync("../../node/stock/kline/form/form80.js", fstr);
  fs.appendFileSync("maxUnionValid.log.js", fstr);
}

exports.writeFunctionSync = writeFunctionSync;