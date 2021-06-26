var http=require("http");
var fs = require("fs");
var jade = require('jade');

http.createServer(function(req, res){
    //ejs 페이지를 불러와서 html 페이지를 만든다 

    fs.readFile("test2.jade", "utf8", function(error, data)
    {
        res.writeHead(200, {'Conent-type':'text/html'});
        var fn = jade.compile(data);

        // 출력합니다.
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(fn({
            name: 'Tom',
            description: 'Hello jade With Node.js .. !'
          }));
        //ejs.render - ejs기반 문서를 html 형태로 전환시켜 반환한다 
    });
}).listen(4000, function(){
    console.log("Server Start");
})
