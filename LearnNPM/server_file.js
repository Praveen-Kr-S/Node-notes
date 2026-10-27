// const http = require("http");
// const path = require("path");
// const fs = require("fs");


// const server = http.createServer(
//     (req,res) => {
//         let filepath = path.join(__dirname,'index.html');

//         fs.readFile(filepath,(err,data) => {
//             if (err) {
//                 res.writeHead(500, { 'Content-Type': 'text/plain' });
//                 res.end('Server error');
//                 return;
//             }
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(data);
//         })

//     }
// )


// server.listen(3000,() => {
//     console.log("Server runs on 3000 port")
// })

const http = require('http');

http.createServer((req, res) => {
  console.log('Method :', req.method);
  console.log('URL    :', req.url);

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Check your terminal');
}).listen(3000, () => console.log('Server running on port 3000'));