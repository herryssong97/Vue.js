var express = require('express');
var app = express();

//use-get, post 둘다 처리 
app.use("/use", function (req, res){
	res.writeHead(200, {'Content-Type':'text/html'});
	res.end('<h1>Hi Hello</h1>');
});

app.get("/get", function (req, res){
	res.writeHead(200, {'Content-Type':'text/html'});
	res.end('<h1>Get Hello</h1>');
});

app.post("/post", function (req, res){
	res.writeHead(200, {'Content-Type':'text/html'});
	res.end('<h1>PostGet Hello</h1>');
});

app.use("/", (req, res)=>{
    res.writeHead(200, {'Content-Type':'text/html'});
	res.end('<h1>Welcome to MyWorld</h1>');
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});
