var http = require("http");
var fs = require("fs");

var host = "localhost";
var port = 3000;

var server = http.createServer(function(req, res){
  fs.readFile("./public/index.html", "utf8", function(err, data){
    if (err) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain");
      res.end("Error Page Not Found")
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(data);
    }
  });
});

server.listen(port, host, function() {
  console.log(`Listening on http://${host}:${port}`)
});
