'use strict';

const fs = require('fs');
const http = require('http');
const port = 8000;
const host = 'localhost';

const server = http.createServer(buildResponse);
server.listen(port, host, announceLoad);

function buildResponse(request, response) {
  fs.readFile('./public/index.html', 'utf8', function(error, data) {
    returnFile(error, data, request, response);
  });
}

function returnFile(error, data, request, response) {
  if (error) {
    // we got an error :(
    response.writeHead(404);
    response.end('404: File not found.');
  } else {

    // make copies of subsets of request and response
    let subRequest = subObject(request,
      ['url', 'method', 'httpVersion', 'headers']);
    let subResponse = subObject(response,
      ['statusMessage', 'statusCode', '_header']);

    // stringify those objects
    let strRequest = JSON.stringify(subRequest, null, 2);
    let strResponse = JSON.stringify(subResponse, null, 2);

    // insert them into our page
    data = data.replace('{{ request }}', strRequest);
    data = data.replace('{{ response }}', strResponse);

    // return!
    response.writeHead(200, {
      'Content-Type': 'text/html'
    });
    response.end(data);
  }
}


// return a copy of a subset of an object given an array of property names
function subObject(inputObject, properties) {
  let newObject = {};

  properties.forEach(function(property) {
    newObject[property] = inputObject[property];
  });

  return newObject;
}

function announceLoad() {
  console.log(`Server running at http://${host}:${port}/`)
}
