var http = require('http');
var fs = require('fs');

var host = '127.0.0.1';
var port = 3000;

var server = http.createServer(function(req, res) {
  fs.readFile('./public/index.html', 'utf8', function(err, data) {
    if (err) {
      res.writeHead(404);
      res.end('File not found');
    } else {
      res.writeHead(200, {
        'Content-type': 'text/html'
      });
      res.end(data);
    }
  });
  // res.statusCode = 200;
  // res.setHeader('Content-type', 'text/plain')
  // res.end('Hello yo World!\n');
});

server.listen(port, host, function() {
  console.log(`server listening at http:// ${host}: ${port}`);
});