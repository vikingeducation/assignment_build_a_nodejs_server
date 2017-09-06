'use strict';

let http = require("http");

let host = "localhost";
let port = 3000;

let server = http.createServer(function(req, res) {
  res.writeHead(200, {
  	"Content-Type": "text/plain"
  });
  res.end("Hello World!");
});

server.listen(port, host, function() {
  console.log(`Listening at http://${host}:${port}`);
});