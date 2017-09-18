const http = require("http");
const fs = require("fs");

const host = "127.0.0.1";
const port = 3000;

var server = http.createServer((req, res) => {
  fs.readFile("./public/index.html", "utf8", function(err, data) {
    if (err) {
      res.writeHead(404);
      res.end("404 Not Found");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });

      var reqObject = {
        url: req.url,
        method: req.method,
        httpVersion: req.httpVersion,
        headers: req.headers
      };
      var resObject = {
        statusMessage: res.statusMessage,
        statusCode: res.statusCode,
        _header: res._header
      };

      var reqString = JSON.stringify(reqObject, null, 2);

      var resString = JSON.stringify(resObject, null, 2);

      data = data.replace(/{ req }/i, reqString);
      data = data.replace(/{ res }/i, resString);
      res.end(data);
    }
  });
});

server.listen(port, host, function() {
  console.log(
    `The server is now running and listening at the address http://${host}:${port}`
  );
});

/*
req.url
req.method
req.httpVersion
req.headers

res.statusMessage
res.statusCode
res._header
*/
