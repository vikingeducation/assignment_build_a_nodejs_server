var http = require("http");
var fs = require("fs");

var port = 3000;
var host = "localhost";

var server = http.createServer(function(request, response) {
  fs.readFile("./public/index.html", "utf8", function(err, data) {
    if (err) {
      response.writeHead(404, {
        "Content-type": "text/html"
      });
      response.end("error 404");
    } else {
      response.writeHead(200, {
        "Content-type": "text/html"
      });
      response.end(data);
    }
  });
});

server.listen(port, host, function() {
  console.log("Listening at http://" + host + ":" + port);
});
