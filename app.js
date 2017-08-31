var http = require('http');
var fs = require('fs');

var port = 3000;
var host = 'localhost';

var server = http.createServer(function(req, res) {
  fs.readFile('./public/index.html', 'utf8', function(err, data) {
    if (err) {
      res.writeHead(404);
      res.end('404 Page Not Found');
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      var myReq = {
        url: req.url,
        method: req.method,
        httpVersion: req.httpVersion,
        headers: req.headers
      };
      var myRes = {
        statusMessage: res.statusMessage,
        statusCode: res.statusCode,
        _header: res._header
      };
      myReq = JSON.stringify(myReq, null, 2);
      myRes = JSON.stringify(myRes, null, 2);

      res.end(data
        .replace('{{ req }}', myReq)
        .replace('{{ res }}', myRes));
    };
  });
});

server.listen(port, host, function() {
  console.log(`Server is running and listening at the address http://${host}:${port}`);
});
