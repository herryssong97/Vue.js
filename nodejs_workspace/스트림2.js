var fs=require('fs');
var stream = fs.createWriteStream('output.txt');

//100밀리초마다 인터벌 바랭
var interval = setInterval(function(){
    stream.write('tick ' + Date.now()+'\n');
}, 100);

setTimeout(function(){
    clearInterval(interval); //5초후 타이머 종료
    stream.end();
}, 5000);
