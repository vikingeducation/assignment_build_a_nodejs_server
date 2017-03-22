const http = require('http');
const host = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": 'text/plain'
    });
  res.end('Hello World');
})

server.listen(port, host, function() {
  console.log(`Server listening at http://${host}:${port}/`
    );
})