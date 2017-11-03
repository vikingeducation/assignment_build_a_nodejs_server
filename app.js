'use strict';

const http = require('http');

let port = 3000;
let host = 'localhost';

let server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Hello World!');
});

server.listen(port, host, () => {
  console.log(`Listening at http://${host}:${port}`);
});
