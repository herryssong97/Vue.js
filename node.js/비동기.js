var fs = require("fs"); // 파일 읽고쓰기 모듈
try
{
    var data = fs.readFile("./서버1.js", "utf-8", (err, data)=>{
        console.log(data);
    });
}
catch(e)
{
    console.log(e);
}

console.log("종료..............");