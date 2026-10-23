const chalk = require("chalk");
const demo_os = require("./demo_os");
// const add = require("./math.js")
const concat = require("./concate.js")

// const {square, cube, name} = require("./math.js")
const greet = require("./math.js")


// import chalk from "chalk"; //v5

// console.log(chalk.green("Hello Praveen."));
// console.log(chalk.blue.bold("Hello Praveen."));
// console.log(chalk.bgBlue.white("MERN Developers"));
// console.log(chalk.rgba(70, 147, 150, 0.17)("Node Developer"));
// console.log(chalk.rgb(207, 204, 66)("React Developer"));

// console.log("Add Value : "+ add(30,35));

// concat("Praveen","Kumar");

// const http = require("http");

// const server = http.createServer((req,res) => {
//     res.writeHead(200,{'Content-Type':"text/plain"});
//     res.end("Hello world... \n");
//     }
// )


// server.listen(3000, "localhost", () => {
//     console.log('Server running at http://localhost:3000/');
// })


// console.log(square(2))
// console.log(cube(2))
// console.log(`Name : ${name}`)



// console.log(greet("React"));


const Student = require("./student.js")

let s1 = new Student("Praveen",96);
let s2 = new Student("Kumar",36);

// console.log(s1.result());
// console.log(s2.result());


// Example - 7

// const data = require("./utils/hello.js")
// data();


const d = require("./data.json");


console.log("Name : "+d.name)
console.log("Days : ",d.days)