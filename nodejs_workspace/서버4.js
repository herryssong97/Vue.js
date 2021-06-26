var http=require("http");
var fs = require("fs");
var ejs = require("ejs");  //npm install ejs

http.createServer(function(req, res){
    //ejs 페이지를 불러와서 html 페이지를 만든다 

    fs.readFile("./html/test.html", "utf8", function(error, data)
    {
        res.writeHead(200, {'Conent-type':'text/html'});
        res.end(data); //렌더링 안하면 문자 그대로 나옴 
        //res.end(ejs.render(data)); 
        //ejs.render - ejs기반 문서를 html 형태로 전환시켜 반환한다 
    });
}).listen(4000, function(){
    console.log("Server Start");
})
