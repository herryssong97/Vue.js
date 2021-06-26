var http = require('http');

//웹서버 만들기 
http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type':'text/html'});
	response.end('<h1>Hello node js</H1>');
}).listen(4000, function(){
    console.log("server running at http:/127.0.0.1");
});