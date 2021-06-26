//url 모듈 사용하기 
var url = require("url");

var parseObject=url.parse(
    "http://edu.ncia.kr/ncia/aducation.application.php?ep_no=274&a=3&b=5");

console.log(parseObject);
console.log(parseObject.host);
console.log(parseObject.pathname);
console.log(parseObject.query);

var queryString = require("querystring");

var obj = queryString.parse(parseObject.query);
console.log(obj);
console.log(obj.ep_no);
console.log(obj.a);
console.log(obj.b);

//util 모듈 사용하기 
var util = require("util");

var data = util.format("%d %s %d %j", 3, "hello", 4.5,
               {name:'홍길동', age:23, address:'서울시'});

console.log(data);


