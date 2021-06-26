//포스트방식 전송일때 파라미터 처리하기 
var http=require('http');
var fs = require('fs');
var url=require("url"); // get 방식
var querystring=require("querystring"); // post 방식처리

http.createServer(function(request, response){
 //http://127.0.0.1:4000?name=Tom&age=21
    if(request.method=='POST')
    {
        //request 객체의 data 이벤트 리스너를 붙여야 한다 
        request.on('data', function(data){
			var data = querystring.parse(data.toString());
			
			console.log("name " + data["name"]);
			console.log("name " + data.name);
			console.log("age " + data["age"]);
			console.log("age " + data.age);
            response.writeHead(200, {'Content-Type':'text/html'});
			var result = '<h1>이름 : '+data.name+'</h1>';
			result += '<h1>나이 : '+data.age+'</h1>'
            response.end(result);  
        });
    }
}).listen(4000, function(){
	console.log("Server start");
});
