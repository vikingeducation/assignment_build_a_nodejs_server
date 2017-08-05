// require libraries
var http = require('http');
var fs = require('fs');

// set up vars
var host = 'localhost';
var port = 3000;


// create a server
var server = http.createServer(function(request, response){
  response.writeHead(200, {
    "Content-Type": "text/plain"
  });
  response.end('hello world');
});


// enable the server to run
server.listen(port, host, function(){
  console.log(`Listening at http://${ host }:${ port }`);
});