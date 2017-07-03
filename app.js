'use strict';

const fs = require('fs');
const http = require('http');
const port = 8000;
const host = 'localhost';

const server = http.createServer(buildResponse);
server.listen(port, host, announceLoad);

function buildResponse(request, response) {

  fs.readFile('./public/index.html', function(error, data) {
    returnFile(error, data, request, response);
  });
}

function returnFile(error, data, request, response) {
  if (error) {
    response.writeHead(404);
    response.end('404: File not found.');
  } else {
    response.writeHead(200, {
      'Content-Type': 'text/html'
    });
    response.end(data);
  }
}


function announceLoad() {
  console.log(`Server running at http://${host}:${port}/`)
}
