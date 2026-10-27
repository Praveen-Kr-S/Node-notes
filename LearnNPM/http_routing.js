const http = require('http');

const server = http.createServer(
    (req,res) => {
        res.writeHead(200,{"Content-Type":"text/html"});

        if(req.url == "/"){
            res.write("<h1>Home Page</h1>");
        }
        else if(req.url == "/about"){
            res.write("<h1>About Page</h1>");
        }
        else if(req.url == "/content"){
            res.write("<h1>Content Page</h1>");
        }
        else{
          res.writeHead(404,{"Content-Type":"text/html"});  
          res.end("<h1>404 - Page Not Found.</h1>");
        }
    }
).listen(3000,() => {console.log("Server Runs at Port 3000.")})