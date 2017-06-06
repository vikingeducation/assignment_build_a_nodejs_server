var http = require("http");
var fs = require("fs");

var host = "localhost";
var port = 3000;

const server = http.createServer(function(req, res){
  fs.readFile("./public/index.html", "utf8", function(err, data){
    if (err) {
      res.statusCode = 404;
      res.setHeader("content-type", "text/plain");
      res.end("Error Page Not Found")
    } else {
      res.statusCode = 200;
      res.setHeader("content-type", "text/html");
      var details = {
        url: req.headers["host"],
        method: req.method,
        httpVersion: req.httpVersion,
        headers: req.headers
      };
      var details2 = {
        statusMessage: res.statusMessage,
        statusCode: res.statusCode,
        header: res._header
      };
      data = data.replace(/{{ req }}/, JSON.stringify(details, null, 2));
      data = data.replace(/{{ res }}/, JSON.stringify(details2, null, 2));
      res.end(data);
    }
  });
});
console.log();
server.listen(port, host, function() {
  console.log(`Listening on http://${host}:${port}`)
});
