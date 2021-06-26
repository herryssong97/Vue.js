var express = require('express');
var app = express();//new  가 없는거지 객체 만들었음 express 객체

//use 함수는 get, post 모두에 응한다, 현재 모든 url을 혼자처리함 
//get
//post 
app.use((req, res)=>{
	res.writeHead(200, {'Content-Type':'text/html'});
	res.end('<h1>Hi Hello</h1>');
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});
