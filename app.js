var http = require('http');

var port = 3000;
var host = 'localhost';

var server = http.createServer(function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, host, function() {
  console.log(`Listening at http://${ host }:${ port }`);
});
