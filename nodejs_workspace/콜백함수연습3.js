function hello(message, callback){
    message = message+" 자바스크립트 입니다";
    message = callback(message);
    return message;
}

var callback1 = function(message){
    message = message+" 콜백에서 수정되었음";
    return message; 
}


//함수호출
console.log( hello("안녕하세요", callback1));
