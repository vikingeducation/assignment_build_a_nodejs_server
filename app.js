const http = require('http');
var fs = require('fs');

const host = '127.0.0.1';
const port = 3000;

var server = http.createServer(function(req, res) {

  var reqObj = {
    'req.url': req.url,
    'req.method': req.method,
    'req.httpVersion': req.httpVersion // 'shallow' object
  };

  var resObj = {
    'res.statusMessage': res.statusMessage, //'shallow' object
    'res.statusCode': res.statusCode,
    'res._header': res._header
  };

  fs.readFile('./public/index.html', 'utf8', function(err, data) {
    if (err) {
      res.writeHead(404);
      res.end("404 Not Found");
    } else {
      res.writeHead(200, {
        "Content-Type": "text/html"
      });
      data = data.replace('{{ req }}', JSON.stringify(reqObj,null,2));
      data = data.replace('{{ res }}', JSON.stringify(resObj,null,2));

      res.end(data);
    }
  });
});

server.listen(port, host, function() {
  console.log(`Listening at http://${ host }:${ port }`);
});