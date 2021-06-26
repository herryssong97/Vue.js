var http = require("http"); //http모듈 갖고 오기 
var fs = require("fs");    //파일서비스 
var url=require("url");

function test(request, response)
{
    //상대방한테 응답을 한다 
    var pathName = url.parse(request.url).pathname;
    if( pathName == "/")
    {
        //파일을 불러서 보내기 --비동기로 읽는다 
        fs.readFile("./index.html", "utf8",
        function(error, data)
        {
            console.log("data : " + data);
            response.writeHead(200, {'Content-Type':'text/html'});
            response.end(data);
            console.log(request.headers.cookie);
        });
    }
    else if(pathName == "/test")
    {
        //파라미터 처리 
        var query = url.parse(request.url, true).query;

        console.log("name : " + query.name);
        console.log("age : " + query.age);
        
        console.log(JSON.stringify(query));
        var data = JSON.parse(JSON.stringify(query));
        console.log("name " + data["name"]);
        console.log("name " + data.name);
        console.log("age " + data["age"]);
        console.log("age " + data.name);
        
        

        fs.readFile("./test.html", "utf8",
        function(error, data)
        {
            response.writeHead(200, {'Content-Type':'text/html'});
            response.end(data);
        });
    }
    else{
        //페이지 강제 이동하기 
        response.writeHead(302, {"Location":"http://www.daum.net"});
        response.end();
    }  
}

function listenResult()
{
    console.log("Server start http://127.0.0.1:4000");
}
var server = http.createServer(test); //서버 객체 만들기 

server.listen(4000, listenResult); //4000번 포트에서 대기, 서버 시작

server.on('connection', function(code){
    console.log('connection on');
});

server.on('request', function(code){
    console.log('request on');
});

server.on('close', function(code){
    console.log('close on');
});

//다른포트로 서비스 하는 서버를 하나 더 만들기 (이미지 서비스)
http.createServer( function(request, response){
    fs.readFile('./images/Chrysanthemum.jpg',
    
    function(error, data){
        response.writeHead(200, {'Content-Type':'image/jpeg'});
        response.end(data);
    });
}).listen(4001);

http.createServer( function(request, response){
    fs.readFile('./mp3/Kalimba.mp3',
    function(error, data){
        response.writeHead(200, {'Content-Type':'audio/mp3'});
        response.end(data);
    });
}).listen(4002);