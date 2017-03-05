var fs = require('fs');
const http = require('http');

const port = 3000;
const host = 'localhost';
const server = http.createServer(function (req, res) {
  fs.readFile('./public/index.html', 'utf8', function (err, data) {
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
