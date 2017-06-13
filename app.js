const http = require('http');

const port = 3000;
const host = 'localhost';

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello world!');
});

server.listen(port, host, () => {
  console.log(`Server is up and running at: http://${host}:${port}`);
});

