const http = require('http');

const server = http.createServer(
    (req,res) => {
         res.writeHead(200, {"Content-TYpe":"text/html"});
         res.write("<h1>Hello Mounesh</h1>");
         res.write("<h3>Are You Looking for Mern Developer role..</h3>");
         res.end("<h2>Are You Looking for Mern Developer role..</h2>");
    }
).listen(3000,() => console.log('Server running on port 3000'))