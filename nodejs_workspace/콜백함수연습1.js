function hello(message, callback){
    console.log(message+" 자바스크립트 입니다");
    callback();
}

var callback1 = function(){
    console.log("callback 11111 함수 가 호출되었습니다.");
}

var callback2 = function(){
    console.log("callback  22222 함수 가 호출되었습니다.");
}


//함수호출
hello("안녕하세요", callback1);
hello("반갑습니다", callback2);
