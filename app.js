var http = require('http');

const host = '127.0.0.1';
const port = 3000;

var server = http.createServer(function(req, res) {

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello yo World\n');
});

server.listen(port, host, function() {
  console.log(`Listening at http://${host}:${port}`);
});
