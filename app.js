var http = require('http');
var fs = require('fs');

var host = 'localhost';
var port = 3000;

var server = http.createServer(function(req, res) {
  fs.readFile('./public/index.html', 'utf8', function(err, data) {
    if (err) {
      res.writeHead(404);
      res.end('404 Not Found');
    } else {
      //Successful load
      res.writeHead(200, {
        'Content-Type': "text/html"
      });

      var shallowReq = {
        url: req.url,
        method: req.method,
        httpVersion: req.httpVersion,
        headers: req.headers
      }

      var shallowRes = {
        statusMessage: res.statusMessage,
        statusCode: res.statusCode,
        _header: res._header
      }

      var stringifiedShallowReq = JSON.stringify(shallowReq, null, 2);
          stringifiedShallowRes = JSON.stringify(shallowRes, null, 2);
          updatedData = data.replace(/{{ req }}/, stringifiedShallowReq)
        .replace(/{{ res }}/, stringifiedShallowRes);

      res.end(updatedData);

    }
  });
});

var verifyListening = function() {
  console.log(`Server is running and listening at http://${ host }:${ port }`);
};

server.listen(port, host, verifyListening());
