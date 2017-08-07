var http = require('http');
var fs = require('fs');

var hostname = 'localhost';
var port = 3000;

var server = http.createServer(function(req, res) {

	var reqCopy = {};
	var resCopy = {};

  fs.readFile('./public/index.html', 'utf8', function(err, data) {
    if (err) {
      res.writeHead(404);
      res.end("404 Not Found");
    } else {
      res.writeHead(200, {
        "Content-Type": "text/html"
      });

      reqCopy.url = req.url;
      reqCopy.method = req.method;
      reqCopy.httpVersion = req.httpVersion;
      reqCopy.headers = req.headers;
 
      resCopy.statusMessage = res.statusMessage;
      resCopy.statusCode = res.statusCode;
      resCopy._header = res._header;

      data = data.replace("{{ req }}", JSON.stringify(reqCopy, null, 2));
      data = data.replace("{{ res }}", JSON.stringify(resCopy, null, 2));
 
      res.end(data);
    }
  });
});

server.listen(port, hostname, function() {
  console.log(`Server running at http://${hostname}:${port}/`);
});
