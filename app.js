const http = require('http');

const port = 3000;
const host = 'localhost';
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, host, function () {
  console.log(`Listening at http://${host}:${port}`);
});
