// 
var express = require('express');
var app = express();

app.use(function(request, response, newt){
	
	var agent = request.header('User-Agent');
	if( agent.toLowerCase().match(/chrome/)){
		response.send("<h1>I am Chrome</h1>");
	}
	else{
		response.send("<h1>I am not Chrome</h1>");
	}

});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});
