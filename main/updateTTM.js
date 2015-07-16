console.time("run");
var ttmio = require("../ttmio").config();
var start = Number(process.argv[2]?process.argv[2]:"0");
 ttmio.updateTTMData(start, function(){
      console.timeEnd("run");
 })
