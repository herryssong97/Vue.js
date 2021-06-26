var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

// 쿠키 미들웨어를 설정합니다.
app.use(cookieParser());

// 라우터를 설정합니다.
app.get('/getCookie', function (request, response) {
  // 응답합니다.
  response.send(request.cookies);
});
app.get('/setCookie', function (request, response) {
  // 쿠키를 생성합니다.
  response.cookie('string', 'cookie');
  response.cookie('json', {
    name: 'cookie',
    property: 'delicious'
  });
  // 응답합니다.
  response.redirect('/getCookie');
});

// 서버를 실행합니다.
app.listen(4000, function () {
  console.log('Server running at http://127.0.0.1:4000');
});