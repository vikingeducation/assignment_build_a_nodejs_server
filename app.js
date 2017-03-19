var http = require("http");

var port = 3000;
var host = "localhost";

var server = http.createServer(function(request, response) {
  response.writeHead(200, {
    "Content-type": "text/html"
  });
  response.end("Hello world.");
});

server.listen(port, host, function() {
  console.log("Listening at http://${host}:${port}");
});
