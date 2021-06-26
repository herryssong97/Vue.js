var express = require('express');
var app = express();// 서버를 생성합니다.

var boardRouter = express.Router();// 라우터를 생성합니다.
var memberRouter = express.Router();

// 라우터를 설정합니다- 별도의 파일로 작성할 수 있음
boardRouter.get('/', function (request, response) {
  response.send('<h1>게시판입니다</h1>');
});

boardRouter.get('/list', function (request, response) {
  response.send('<h1>게시판입니다</h1>');
});

// 라우터B를 설정합니다.
memberRouter.get('/write', function (request, response) {
  response.send('<h1>회원가입화면입니다</h1>');
});

// 라우터를 설정합니다.
app.use('/board', boardRouter); // http://127.0.0.1:4000/board/list
app.use('/member', memberRouter);// http://127.0.0.1:4000/member/write

// 서버를 실행합니다.
app.listen(4000, function () {
  console.log('Server running at http://127.0.0.1:4000');
});

