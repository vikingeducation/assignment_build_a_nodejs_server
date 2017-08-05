// require libraries
var http = require('http');
var fs = require('fs');

// set up vars
var host = 'localhost';
var port = 3000;


// create a server
var server = http.createServer(function(request, response){
  response.writeHead(200, {
    "Content-Type": "text/html"
  });
  response.end('hello world');
});

