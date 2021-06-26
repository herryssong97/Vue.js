// 모듈을 추출합니다.
var express = require('express');

// 서버를 생성합니다.
var app = express();

//외부에 있는 router 를 읽어온다 
var board = require('./routes/board');  //  내 폴더 밑에 routes / board.js 파일이 있다 
var member = require('./routes/member');


// 라우터를 설정합니다.
app.use('/board',  board); // http://127.0.0.1:4000/board/list
app.use('/member', member);// http://127.0.0.1:4000/member/write

// 서버를 실행합니다.
app.listen(4000, function () {
  console.log('Server running at http://127.0.0.1:4000');
});