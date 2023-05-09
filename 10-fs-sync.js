console.log("start");
const {readFileSync,writeFileSync}=require("fs");
//readfilesync
const first=readFileSync("./content/first.txt","utf8");
const second=readFileSync("./content/second.txt","utf8");
//writefilesync

writeFileSync("./content/result-sync.txt",
"Here is the result: "+first+" "+second,{flag:'a'});
console.log("Done with this task");
console.log("Starting the next one");