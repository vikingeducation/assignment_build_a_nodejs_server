var http = require('http');
var fs = require('fs');

var port = 3000;
var host = 'localhost';

var server = http.createServer(function(req, res) {
  fs.readFile("./public/index.html", 'utf8', function(err, data) {
    if (err) {
      res.writeHead(404);
      res.end("404 Not Found");
    } else {
      var Requests = {};
      ["url", "method", "httpVersion", "headers"].forEach(function(item) {
        Requests[item] = req[item];
      });
      Requests = JSON.stringify(Requests, null, 2);

      var Responses = {};
      ["statusMessage", "statusCode", "_header"].forEach(function(item) {
        Responses[item] = res[item];
      });
      Responses = JSON.stringify(Responses, null, 2);

      res.writeHead(200, {"Content-Type": "text/html"});
      data = data.replace("{{ req }}", Requests);
      data = data.replace("{{ res }}", Responses);
      res.end(data);
    }
  });
});

server.listen(port, host, function() {
  console.log(host, port);
});
