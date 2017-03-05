var fs = require('fs');
var req = require('./lib/req');
var res = require('./lib/res');
const http = require('http');

const port = 3000;
const host = 'localhost';
const server = http.createServer(function (req, res) {
  fs.readFile('./public/index.html', 'utf8', function (err, data) {
    var data = String.prototype.replace(data, JSON.stringify(data, null, 2));
    if (err) {
      res.writeHead(404);
      res.end('404 not found');
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.end(data);
    }
  });
});

server.listen(port, host, function () {
  console.log(`Listening at http://${host}:${port}`);
});
