// Load modules.
const HTTP = require('http');
const FS = require('fs');
const _ = require('lodash');

let host = '127.0.0.1';
let port = '8080';

let server = HTTP.createServer(function(req, res) {
  FS.readFile('./public/html/index.html', 'utf8', function(err, data) {
    if (err) {
      res.writeHead(404);
      res.end('404 File Not Found');
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });

      let reqObj = {
        url: req.url,
        method: req.method,
        httpVersion: req.httpVersion,
        headers: req.headers
      };
      let resObj = {
        statusMessage: res.statusMessage,
        statusCode: res.statusCode,
        _header: res._header
      };
      data = data.replace('{{ req }}', JSON.stringify(reqObj, null, 2));
      data = data.replace('{{ res }}', JSON.stringify(resObj, null, 2));
      res.end(data);
    }
  })
});

server.listen(port, host, function() {
  console.log(`Listening at http://${host}:${port}`);
});
