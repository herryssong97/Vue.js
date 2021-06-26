var express = require('express');
var app = express();

app.get("/a/:id", function(request, response, next){
	var id = request.params.id;
	response.send('a 입니다' + id );
});

app.get("/b/:page/:temp", function(request, response, next){
	var page = request.params.page;
	var temp = request.params.temp;
	
	response.send('b 입니다' + page);
	response.send('b 입니다' + temp);
	
});

app.get("/c", function(request, response, next){
	response.send('c 입니다');
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});
