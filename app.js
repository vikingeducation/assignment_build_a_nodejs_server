'use strict';

const http = require('http');
const fs = require('fs');

let port = 3000;
let host = 'localhost';

let server = http.createServer((req, res) => {
  fs.readFile('./public/index.html', 'utf8', (err, data) => {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.end(data);
  });
});

server.listen(port, host, () => {
  console.log(`Listening at http://${host}:${port}`);
});
