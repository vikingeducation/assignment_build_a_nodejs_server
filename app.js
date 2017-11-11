
let http = require('http');
let fs = require('fs');

let port = 3000;
let host = 'localhost';

let server = http.createServer((req, res) => {
  fs.readFile('./public/index.html', 'utf8', (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("404 Not Found");
    } else {
      res.writeHead(200, {
        "Content-Type":"text/html"
      });
      res.end(data);
    }
  });
});

server.listen(port, host, () => {
  console.log(`http://${host}:${port}`);
});
