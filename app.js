var http = require('http');
var fs = require('fs');

var port = 3000;
var host = 'localhost';

var server = http.createServer(function(req, res) {
  res.writeHead(200, {
    "Content-Type": 'text/html'
  });
  res.end("<h1>Hello World!</h1>");
});

server.listen(port, host, function() {
  console.log(`Listening at http://${ host }:${ port }`);
});

