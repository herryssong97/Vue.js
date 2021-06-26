var http=require("http");
var fs = require("fs");
var jade = require('jade'); //npm install jade

http.createServer(function(req, res){
    //ejs 페이지를 불러와서 html 페이지를 만든다 

    fs.readFile("./html/test.jade", "utf8", function(error, data)
    {
        var fn = jade.compile(data);

        // 출력합니다.
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(fn());
    });


}).listen(4000, function(){
    console.log("Server Start");
})
