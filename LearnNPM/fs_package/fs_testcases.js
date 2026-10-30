// const fs = require("fs");
//example - 1

// fs.readFile('input.txt','utf8',(err,data) => {
//     if(err){
//         console.log("Error Message :"+err.message);
//         return;
//     }
//     console.log(data)
// })

// console.log("Program Ended..")



//example - 2
// const fs = require('fs');

// const data = fs.readFileSync('input.txt', 'utf8');
// console.log(data);

// console.log("Program Ended");


// Example 3: Handle a missing file (error handling)

// const fs = require('fs');

// fs.readFile('praveen.txt','utf8',(err,data) => {
//     if(err){
//         console.log("File Not Found :"+err.message);
//         return;
//     }
//     console.log(data)
// })


// Example 4: Create / write a file
// const fs = require('fs');

// fs.writeFile("Pravin.txt","Hello Pravin,\nI am Mounish from annadanapatti..",(err,data)=>{
//     if (err) throw err;
//     console.log("File Created")
// })


// Example - 5 , append data

// fs.appendFile("Pravin.txt","\nAre you looking fro jobs..",(err,data)=>{
//     if (err) throw err;
//     console.log("Data Added")
// })

// Example 6: Open a file with flags
// const fs = require('fs');

// fs.open('Pravin.txt', 'w', (err, fd) => {
//   if (err) throw err;
//   console.log("File opened/created successfully");
//   fs.close(fd, () => console.log("File closed"));
// });



// Example 7: Rename a file

// const fs = require('fs');

// fs.rename('Pravin.txt', 'Praveen.txt', (err) => {
//   if (err) throw err;
//   console.log("File renamed");
// });



// Example 8: Delete a file
// const fs = require('fs');

// fs.unlink('newfile.txt', (err) => {
//   if (err) throw err;
//   console.log("File deleted");
// });



// Example 9: Create a folder
// const fs = require('fs');

// fs.mkdir('students', (err) => {
//   if (err) throw err;
//   console.log("Folder created");
// });


// Example 10: Read all files in a folder
const fs = require('fs');
fs.readdir('.', (err, files) => {
  if (err) throw err;
  console.log("Files in this folder:");
  files.forEach(file => console.log(file));
});