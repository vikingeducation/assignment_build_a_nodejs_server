var http = require('http');
var fs = require('fs');

var port = 3000;
var host = 'localhost';

var server = http.createServer(function(req, res) {
  fs.readFile('./public/index.html', 'utf8', function(err, data) {
    if (err) {
      res.writeHead(404);
      res.end("404 Not Found");
    } else {
      var reqData = JSON.stringify(req.url, null, 2) + JSON.stringify(req.method, null, 2) +
        JSON.stringify(req.httpVersion, null, 2) + JSON.stringify(req.headers, null, 2);
      var resData = JSON.stringify(res.statusMessage, null, 2) +
        JSON.stringify(res.statusCode, null, 2) + JSON.stringify(res._header, null, 2);
      var htmlData = data.replace("{{ req }}", reqData).replace("{{ res }}", resData);
      res.writeHead(200, {
        "Content-Type": "text/html"
      });
      res.end(htmlData);
    }
  });
});

server.listen(port, host, function() {
  console.log(`Listening at http://${host}:${port}`);
});