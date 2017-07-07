const http = require('http');

const port = 3000;
const hostname = "localhost"

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, function() {
  console.log("Server is running at http://localhost:3000");
  });
