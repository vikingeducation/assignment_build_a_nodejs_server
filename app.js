"use strict";

const http = require("http");

let port = 3000;
let host = "localhost";

let server = http.createServer(function(req, res) {
  res.writeHead(200, {
    "Content-Type": "text/html"
  });
  res.end("Hello World!");
});

server.listen(port, host, function() {
  console.log(`Listening at http://${ host }:${ port }`);
});
