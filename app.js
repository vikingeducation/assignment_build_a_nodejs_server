var http = require("http");
var fs = require("fs");

var port = 3000;
var host = "localhost";
var reqReplacement;
var resReplacement;

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
      //request
      reqReplacement = {
        url: request.url,
        method: request.method,
        httpVersion: request.httpVersion,
        headers: request.headers
      };

      data = data.replace(/{{req}}/i, JSON.stringify(reqReplacement));
      //response
      resReplacement = {
        status: response.statusMessage,
        statusCode: response.statusCode,
        _header: response._header
      };

      data = data.replace(/{{res}}/i, JSON.stringify(resReplacement));

      response.end(data);
    }
  });
});

server.listen(port, host, function() {
  console.log("Listening at http://" + host + ":" + port);
});
