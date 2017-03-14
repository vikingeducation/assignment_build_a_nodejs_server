var http = require('http');
var port = 3000;
var host = 'localhost';

var server = http.createServer(function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

var verifyListening = function() {
  console.log(`Server is running and listening at http://${ host }:${ port }`);
};

server.listen(port, host, verifyListening());
