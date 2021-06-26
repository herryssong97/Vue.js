//동기모드일때 예외처리
var fs = require("fs");
try
{
   var data = fs.readFileSync("./data.txt", "utf-8");
   console.log(data);
}
catch(e)
{
    console.log(e);
}
console.log("종료............................");
