var http = require('http');
var fs = require('fs');

var host = '127.0.0.1';
var port = 3000;

var server = http.createServer(function(req, res) {

  var reqObj = {
  url: req.url,
  method: req.method,
  httpVersion: req.httpVersion,
  headers: req.headers
}

var resObj = {
  statusMessage: res.statusMessage,
  statusCode: res.statusCode,
  header: res._header
}

  fs.readFile('./public/index.html', 'utf8', function(err, data) {
    if (err) {
      res.writeHead(404);
      res.end('File not found');
    } else {
      res.writeHead(200, {
        'Content-type': 'text/html'
      });
      console.log(JSON.stringify(reqObj, null, 2));
      console.log(data);
      data = data.replace('{{ req }}', JSON.stringify(reqObj, null, 2));
      data = data.replace('{{ res }}', JSON.stringify(resObj, null, 2));
      res.end(data);
    }
  });

});

server.listen(port, host, function() {
  console.log(`server listening at http:// ${host}: ${port}`);
});