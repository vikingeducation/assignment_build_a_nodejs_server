const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end("Hello World!");
});

server.listen(port, hostname, function() {
  console.log(`listening at http://${ hostname }:${ port }`);
});
