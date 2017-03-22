var http = require('http');
var fs = require('fs');

const host = '127.0.0.1';
const port = 3000;

var server = http.createServer(function(req, res) {
  fs.readFile('./public/index.html', 'utf8', function(err, data) {
    if (err) {
      req.statusCode = 200;
      req.end("4004 no found!");
    } else {
      res.writeHead(200, {
        "Content-Type": "text/html"
      });
      res.end(data);
    }
  });
});

server.listen(port, host, function() {
  console.log(`Listening at http://${host}:${port}`);
});
