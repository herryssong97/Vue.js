
var http=require('http');
var fs = require('fs');
var url=require("url");

http.createServer(function(request, response){

	//http://127.0.0.1:4000?name=Tom&age=21
    
    if(request.method=='GET')
    {
            response.writeHead(200, {'Content-Type':'text/html'});
			
			var uri = request.url;
			var query = url.parse(uri, true).query;// 문자열을 -> JSON 객체로 전환 
			console.log( query );
			console.log(query.name);
	        console.log("name : " + query.name);
			console.log("age : " + query.age);

            response.end(JSON.stringify(query)); 	//JSON 객체 -> 문자열 
    }
   
}).listen(4000, function(){
	console.log("Server start");
});
