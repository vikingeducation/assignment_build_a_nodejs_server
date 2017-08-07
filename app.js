var http = require('http');
var fs = require('fs');

var hostname = 'localhost';
var port = 3000;

var server = http.createServer(function(req, res) {
  fs.readFile('./public/index.html', 'utf8', function(err, data) {
    if (err) {
      res.writeHead(404);
      res.end("404 Not Found");
    } else {
      res.writeHead(200, {
        "Content-Type": "text/html"
      });
      res.end(data);
    }
  });
});

server.listen(port, hostname, function() {
  console.log(`Server running at http://${hostname}:${port}/`);
});
