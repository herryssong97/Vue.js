var express = require('express');
var app = express();

//use 함수는 get, post 모두에 응한다, 현재 모든 url을 혼자처리함 
app.use(function (request, response){
	response.writeHead(200, {'Content-Type':'text/html'});
	response.end('<h1>Hi Hello</h1>');
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});
