var http = require("http");

var host = "localhost";
var port = 3000;

var server = http.createServer(function(req, res){
  res.statusCode = 200
  res.setHeader("Content-Type", "text/plain");
  res.end("Howdy");
});

server.listen(port, host, function() {
  console.log(`Listening on http://${host}:${port}`)
});
