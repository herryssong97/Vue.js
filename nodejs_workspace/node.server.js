/*var http = require('http');

//웹서버 만들기 
http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type':'text/html'});
	response.end('<h1>Hello node js</H1>');
}).listen(3000, function(){
    console.log("server running at http:/127.0.0.1");
    
});
*/

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.write('Dog is running.....');

  setTimeout(function(){
    res.write('Dog is done');
    res.end();
  }, 5000);

  res.statusCode = 200;
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});