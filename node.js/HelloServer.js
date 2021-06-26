// 간단한 웹서버 만들기

var http = require("http")
// require - 외부의 모듈을 이 파일로 불러와서 사용하도록 도와준다
// node.js의 대부분의 함수는 비동기 모드이므로 작업이 완료되었을때
// 호출될 callback함수들을 파라미터로 전달해야 한다.
// 서버를 만들고 클라이언트로 부터 요청을 기다리는데 요청이
// 언제올지 모르고 계속 blocking을 하면 어떤 동작도 수행이 안되서
// 그동안은 멀티스래드를 이용했는데 여기서는 콜백함수 호출방식을
// 채택하고 있다.
// 콜백함수는 내가 호출자가 아니고 시스템이 호출자라 매개변수의
// 종류나 사용은 내 마음대로 할 수 없다.
// createServer 에서는 request와 response 객체 두개를 파라미터로
// 갖는 함수를 전달해야만 한다.

http.createServer( function(request, response){
    // 클라이언트에게 응답을 보낸다.
    response.setHeader('Content-Type', 'text/html')
    response.end('<h1>Hello World</h1>')
}).listen(3000)