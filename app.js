var http = require('http');
var fs = require('fs');


var port = 3000;
var hostname = 'localhost';


var server = http.createServer(function(req, res) {

  var request = {};
  var results = {};

  fs.readFile('./public/index.html', 'utf8', function(err, data) {
    if (err) {
      res.writeHead(404);
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", 'text/html');

      request.url = req.url;
      request.method = req.method;
      request.httpVersion = req.httpVersion;
      request.headers = req.headers;

      results.statusMessage = res.statusMessage;
      results.statusCode = res.statusCode;
      results._header= res._header;

      request = JSON.stringify(request, null, 2);
      results = JSON.stringify(results, null, 2);

      data = data.replace("{{ req }}", request);
      data = data.replace("{{ res }}", results);

      res.end(data);
    };
  });
});


server.listen(port, hostname, function() {
  console.log(`Listening at http://${ hostname }:${ port }`);
});
