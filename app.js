var http = require('http');
var fs = require('fs');

var port = 3000;
var host = 'localhost';


var server = http.createServer(function(req, res) {
  // Initialize objects for results and requests
  var results = {};
  var requests = {};

  fs.readFile('./public/index.html', 'utf-8', function(err, data) {
    // Handle all errors as 404
    if (err) {
      res.statusCode = 404;
      res.end(data);
    }
    else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');

      // Set properties in requests and results objects
      requests.url = req.url;
      requests.method = req.method;
      requests.httpVersion = req.httpVersion;
      requests.headers = req.headers;
      results.statusCode = res.statusCode;
      results.statusMessage = res.statusMessage;
      results._header = res._header;

      // Stringify objects and replace placeholder strings in HTML with JSON
      requests = JSON.stringify(requests, null, 2);
      results = JSON.stringify(results, null, 2);
      data = data.replace("{{ req }}", requests);
      data = data.replace("{{ res }}", results);
      res.end(data);
    }
  });
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
