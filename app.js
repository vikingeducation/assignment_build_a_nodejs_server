const http = require('http');
const fs = require('fs');

const host = '127.0.0.1';
const port = 3000;

var server = http.createServer(function(req, res) {
  fs.readFile('./public/index.html', 'utf8', function(err, data) {
    if (err) {
      res.writeHead(404);
      res.end("404 Not Found");
    } else {
      res.writeHead(200, {
        "Content-Type": "text/html"
      });

      let requested = {
        url: req.url,
        method: req.method,
        httpVersion: req.httpVersion,
        headers: req.headers
      };

      let responses = {
        statusMessage: res.statusMessage,
        statusCode: res.statusCode,
        header: res._header
      };

      let modified = data
        .replace(/{{ req }}/, JSON.stringify(requested, null, 1))
        .replace(/{{ res }}/, JSON.stringify(responses, null, 1));

      res.end(modified);
    }
  });
});

server.listen(port, host, function() {
  console.log(`Listening at http://${ host }:${ port }`);
});
