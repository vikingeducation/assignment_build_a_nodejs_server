var http = require('http');
var fs = require('fs');

var host = 'localhost';
var port = 3000;

var server = http.createServer(function(req, res) {
  fs.readFile('./public/index.html', 'utf8', function(err, data) {
    if (err) {
      res.writeHead(404);
      res.end('404 Not Found');
    } else {
      res.writeHead(200, {
        'Content-Type': "text/html"
      });
      res.end(data);
    }
  });
});

var verifyListening = function() {
  console.log(`Server is running and listening at http://${ host }:${ port }`);
};

server.listen(port, host, verifyListening());
