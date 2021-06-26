
//http://127.0.0.1:4000/?name=wwww&age=21&arr=1&arr=2&arr=3 
var express = require('express');
var app = express();

app.use(function(request, response, newt){
	var name = request.query.name;
	var age = request.query.age;

	response.write('<h1>'+ name + '</h1>');
	response.write('<h1>'+ age + '</h1>');

	var arr = request.query.arr;
	
	for (i=0; i<arr.length; i++ )
	{
		response.write('<p>'+arr[i] +'</p>');
	}
    response.end();
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});
