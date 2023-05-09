//modules
const names=require("./firstModule");
const sayHi=require("./secondModule");
console.log(names);
require("./7-alternative-support");
sayHi("susan");
sayHi(names.john);
sayHi(names.peter);