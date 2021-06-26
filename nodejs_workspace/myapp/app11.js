var express = require('express');
var app = express();

//http://127.0.0.1:4000/test?name=Tom&age=12
//http://127.0.0.1:4000/test/Tom/12
//http://127.0.0.1:4000/test/name/Tom/age/12

//http://127.0.0.1:4000/a/333

app.get("/a/:id", function(request, response, next){
	var id = request.params.id;
	response.send('a 입니다' + id );
});

//http://127.0.0.1:4000/b/22/333
app.get("/b/:page/:temp", function(request, response, next){
	var page = request.params.page;
	var temp = request.params.temp;
	
	response.send('b 입니다' + page + " " + temp);	
});

// http://127.0.0.1/add/4/5 
app.use("/add/:x/:y", (req, res)=>{
	var x = parseInt(req.params.x);
	var y = parseInt(req.params.y);

	res.send(`${x}+${y}=${x+y}`);
});

app.get("/c", function(request, response, next){
	response.send('c 입니다');
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});

