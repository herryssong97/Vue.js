var http=require('http');
var fs = require('fs');  //파일처리

http.createServer(function(request, response){
    if(request.method=='GET')
    {
        response.writeHead(200, {'Content-Type':'text/html'});
        var data = fs.readFileSync("./html/input.html", "utf8");//동기모드
        response.end(data); 
    }
    else if(request.method=='POST')
    {
        //request 객체의 data 이벤트 리스너를 붙여야 한다 
        request.on('data', function(data){
            response.writeHead(200, {'Content-Type':'text/html'});
            response.end('<h1>'+data+'</h1>');  
        });
    }
}).listen(4000);
