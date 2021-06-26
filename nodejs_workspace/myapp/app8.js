var express = require('express');
var app = express();

app.use(function(request, response, next){
	console.log("첫번째 미들웨어");
	next(); //차례대로 다음 함수(미들웨어)를 호출한다 
});

app.use(function(request, response, next){
	console.log("두번째 미들웨어");
	next(); 
});

app.use(function(request, response, next){
	console.log("세번째 미들웨어");
	response.writeHead(200, {'Content-Type':'text/html'});
	response.end('<h1>Express MiddleWare</h1>');
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});
