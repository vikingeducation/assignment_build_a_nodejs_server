var http = require('http');
var fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function(req, res) {
  fs.readFile('./public/index.html', 'utf8', function(err, data) {
    if (err) {
      res.writeHead(404);
      res.end("404 Not Found");
    } else {
      res.writeHead(200, {
        "Content_Type": "text/html"
      });
      var requestData = {
        "url": req.url,
        "method": req.method,
        "httpVersion": req.httpVersion,
        "headers": req.headers
      }
      var responseData = {
        "statusMessage": res.statusMessage,
        "statusCode": res.statusCode,
        "_header": res._header
      }
      res.end(data
        .replace("req", JSON.stringify(requestData, null, 2))
        .replace("res", JSON.stringify(responseData, null, 2)));
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
