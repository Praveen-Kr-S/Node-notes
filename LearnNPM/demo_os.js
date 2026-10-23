const os = require("os");
const path = require('path');

const file = "C:\\Users\\prave\\Desktop\\Demo_node\\LearnNPM\\index.js";


console.log(path.basename(file));
console.log(path.dirname(file));           // D:/projects/app
console.log(path.extname(file));
console.log(path.parse(file));
console.log(path.join("data", "students", "list.txt"));  
console.log(path.resolve("data", "list.txt"));

// console.log("Path : ",os.platform());
// console.log("CPU : ",os.arch());
// console.log("Total Memory : ",os.totalmem());
// console.log("Total memory :", os.totalmem());
// console.log("Free memory  :", os.freemem());
// console.log("Home folder  :", os.homedir());
// console.log("Host name    :", os.hostname());