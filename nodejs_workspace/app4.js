var express = require('express');
var app = express();

app.use(function(request, response, newt){
	
	response.status(404).send('<h1>ERROR</h1>'); 
});


app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});
