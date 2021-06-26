// 라우터를 생성합니다.
var express = require('express');
var router = express.Router();

// 라우터를 설정합니다- 별도의 파일로 작성할 수 있음
router.get('/', function (request, response) {
	response.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
	response.write('<h1>게시판입니다 목록입니다</h1>');
	response.end();
});
router.get('/list/:page', function (request, response) {
	response.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
	response.write('<h1>게시판입니다 목록입니다</h1>');
	response.end();
});
router.get('/write', function (request, response) {
	response.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
	response.write('<h1>게시판입니다 글쓰기 화면입니다 </h1>');
	response.end();
});
router.get('/view', function (request, response) {
	response.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
	response.write('<h1>게시판입니다 상세보기 화면입니다 </h1>');
	response.end();
});
module.exports=router
