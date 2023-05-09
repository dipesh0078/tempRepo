const path= require("path");
console.log(path.sep);
const filePath=path.join("/content",'subfolder','test.txt');
console.log(filePath);
//accessing
const base=path.basename(filePath);
console.log(base);
//path.resolve
const absolute=path.resolve(__dirname,"content",'subfolder','test.txt');
console.log(absolute);