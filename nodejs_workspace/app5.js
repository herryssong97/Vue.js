var express = require('express');
var app = express();

app.use(function(request, response, newt){
	
	var agent = request.header('User-Agent');
	console.log(request.headers);
	console.log(agent);
	response.sendStatus(200); 
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});
