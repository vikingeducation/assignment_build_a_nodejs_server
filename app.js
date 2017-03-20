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
      res.writeHead(200, {
        "Content-Type": "text/html"
      });
      res.end(serverUtils.parseVariables(data, req, res));
    }
  });
});

var serverUtils = {
  parseVariables: function(data, req, res){
    var reqObj = {
      url: req.url,
      method: req.method,
      httpVersion: req.httpVersion,
      headers: req.headers
    };

    var resObj = {
      statusMessage: res.statusMessage,
      statusCode: res.statusCode,
      _header: res._header
    }

    data = data
      .replace(/{{ req }}/g, JSON.stringify(reqObj, null, 2))
      .replace(/{{ res }}/g, JSON.stringify(resObj, null, 2))
    return data
  }
}

server.listen(port, host, function() {
  console.log(`Listening at http://${ host }:${ port }`);
});







