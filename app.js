'use strict';

const http = require('http');
const port = 8000;
const host = 'localhost';

const server = http.createServer(buildResponse);
server.listen(port, host, announceLoad);

function buildResponse(request, response) {
  console.log('responding!')
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello, world!\n');
}

function announceLoad() {
  console.log(`Server running at http://${host}:${port}/`)
}
