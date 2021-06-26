var fs = require("fs");

//비동기 
fs.readFile("./data.txt", "utf8",function(error, data){
    //error - 에러발생시  에러정보를 가져온다 
    //data - 다 읽은 데이터값 들고오기 
    console.log("all read data");
});
console.log("file read end?");












