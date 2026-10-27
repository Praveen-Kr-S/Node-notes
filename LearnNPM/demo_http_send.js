const http = require("http");

const students = [
    {'id':1, 'name':"mounesh", 'courses':'Mern'},
    {'id':2, 'name':"mutheeswaran", 'courses':'Mern'},
    {'id':3, 'name':"pravin", 'courses':'Mern'},
    {'id':4, 'name':'atchaya', 'courses':'Mern'}
]

http.createServer((req,res)=>{
    if (req.url =="/students" && req.method == "GET"){
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(students));
    }
    else{
        res.writeHead(404,{'Content-Type':'application/json'});
        res.end(JSON.stringify({message : "Page Not Found"}));
    }
}).listen(3000,() =>{
    console.log('server runs on 3000 and getting data of json...');
    
})