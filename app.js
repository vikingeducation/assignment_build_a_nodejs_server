var http = require('http');
var fs = require('fs');

var port = 3000;
var host = 'localhost';

var server = http.createServer(function(req, res) {
  fs.readFile('./public/index.html', 'utf8', function(err, data) {
    if (err) {
      res.writeHead(404);
      res.end('There was an error');
    } else {
      res.writeHead(200, {
        "Content-Type": 'text/html'
      });

      var smallReq = {
        url: req.url,
        method: req.method,
        httpVersion: req.httpVersion,
        headers: req.headers
      };

      var smallRes = {
        statusMessage: res.statusMessage,
        statusCode: res.statusCode,
        _header: res._header
      };

      var replaced = data.replace('{{ req }}', JSON.stringify(smallReq, null, 2))
        .replace('{{ res }}', JSON.stringify(smallRes, null, 2));

      res.end(replaced);
    }
  });
});

server.listen(port, host, function() {
  console.log(`Listening at http://${ host }:${ port }`);
});

