// Load modules.
const HTTP = require('http');
const FS = require('fs');
const _ = require('lodash');
const QS = require('querystring');

let host = '127.0.0.1';
let port = '8080';

let server = HTTP.createServer(function(req, res) {
  if (req.method === 'GET') {
    FS.readFile('./public/html/index.html', 'utf8', function(err, data) {
      if (err) {
        res.writeHead(404);
        res.end('404 File Not Found');
      } else {
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

        res.writeHead(200, {
          'Content-Type': 'text/html'
        });
        res.end(data);
      }
    });
  } else if (req.method === 'POST') {
    new Promise(resolve => {
      req.on('data', function(data) {
        data = Buffer.concat([data, new Buffer("&spam=")]);
        for (var i=0; i<Math.pow(10, 4); i++) {
          data = Buffer.concat([data, new Buffer("I LIKE TO SPAM")]);
        }
        resolve(data);
      });
    }).then(result => {
      result = JSON.stringify(QS.parse("" + result), null, 2);
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.end(result);
    });
  }
});

server.listen(port, host, function() {
  console.log(`Listening at http://${host}:${port}`);
});
