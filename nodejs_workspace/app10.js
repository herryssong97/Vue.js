var express = require('express');
var app = express();

app.get("/a", function(request, response, next){
	response.send('a 입니다');
});

app.get("/b", function(request, response, next){
	response.send('b 입니다');
});

app.get("/c", function(request, response, next){
	response.send('c 입니다');
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});
