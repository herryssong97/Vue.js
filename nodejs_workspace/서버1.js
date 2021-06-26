const http = require('http');//외부 모듈을  이 파일내로 불러들인다. 

const hostname = '127.0.0.1';
const port = 4000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  //res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Type', 'text/html');
  res.end(`<h1 style="color:blue">Hello World</h1>\n
  <h2>new title</h2>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
