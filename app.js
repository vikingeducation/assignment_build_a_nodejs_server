const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');
  // res.end('Hello World\n');
  fs.readFile('./public/index.html', 'utf8', function(err, data){
    if (err) {
      res.writeHead(404);
      res.end("404 Not Found");
    }
    else {
      res.writeHead(200, {
        "Content-Type": "text/html"
      });
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
