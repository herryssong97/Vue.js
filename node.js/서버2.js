
http = require("http")
fs = require('fs')

hostname = "127.0.0.1"
port = 3000

server = http.createServer( (req, res)=>{
    if (req.method=="GET")
    {
        res.statusCode=200;
        res.setHeader("Content-Type", "text/html");
        var data = fs.readFileSync("./html/index.html");
        res.end(data); // 클라이언트로 html파일 보내기
    }
    else if(req.method=="POST")
    {
        console.log("....................");
        req.on('data', function(data){

            console.log("....................");
            console.log( data );
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end("<h1>eeeeeeeeee</h1>")
        })
    }
});

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`)
});