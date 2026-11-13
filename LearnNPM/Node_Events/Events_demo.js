// Example - 1
// console.log("Hello Praveen")
// setTimeout(()=>{console.log("Bye Bye....")},3000)
// console.log("Hello Mounesh")

// Example -2

// console.log('Start');

// setImmediate(() => {
//     console.log('Immediate callback');
// });

// console.log('End');
// console.log('Kumar');
// console.log('Praveen');
// console.log('Mounesh');


const fs = require('fs');

const readStream = fs.createReadStream('demo.txt');

console.log("Hello Praveen")

readStream.on('data',(chunk) => {console.log(chunk.toString())});


console.log("Hello Node")