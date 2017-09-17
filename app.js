const http = require("http");
const fs = require("fs");

const host = "127.0.0.1";
const port = 3000;

var server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

server.listen(port, host, function() {
  console.log(
    `The server is now running and listening at the address http://${host}:${port}`
  );
});
