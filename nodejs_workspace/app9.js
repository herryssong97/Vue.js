var express = require('express');
var app = express();
app.use(function(request, response, next){
	request.name="Brown";
	response.name="John";
	console.log("첫번째 미들웨어");
	next(); //차례대로 다음 함수(미들웨어)를 호출한다 
});
app.use(function(request, response, next){
	console.log("두번째 미들웨어");
	request.phone="010-0000-0000";
	response.phone="010-1111-1111";
	next(); 
});
app.use(function(request, response, next){
	console.log("세번째 미들웨어");
	response.writeHead(200, {'Content-Type':'text/html'});
	response.write('<h1>' + request.name + '</h1>');
	response.write('<h1>' + response.name + '</h1>');
	response.write('<h1>' + request.phone + '</h1>');
	response.end('<h1>' + response.phone + '</h1>');
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});
