
http = require("http")

hostname = "127.0.0.1"
port = 3000

server = http.createServer( (req, res)=>{
    res.statusCode=200;
    res.setHeader("Content-Type", "text/html");
    res.end('<h1 style="color:blue">Hello</h1>\n<h2>title</h2>');
});

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`)
});