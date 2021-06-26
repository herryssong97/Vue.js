// 모듈을 추출합니다.
var express = require('express');

// 서버를 생성합니다.
var app = express();

// 미들웨어를 설정합니다.

app.use(express.static(__dirname + '/public'));
app.use(morgan('combined'));

app.use(function (request, response) {
  // 응답합니다.
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write('<h1>This is Chrysanthemum</h1>');
  response.end('<img src="/images/Chrysanthemum.jpg" width="300px" />');
  console.log( __dirname ); 
});

// 서버를 실행합니다.
app.listen(4000, function () {
  console.log('Server running at http://127.0.0.1:4000');
});