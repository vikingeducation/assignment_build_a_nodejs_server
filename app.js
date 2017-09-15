const http = require('http');
const fs = require('fs');

const port = 3000;
const host = 'localhost';

var server = http.createServer((req, res) => {
  fs.readFile('./public/index.html', 'utf8', function(err, data) {
    if (err) {
      res.writeHead(404);
      res.end("404 Not Found");
    } else {
      res.writeHead(200, {
        "Content-Type": "text/html"
      });

      let shallowViewRequest = createViewReq(req);
      let shallowViewResponse = createViewRes(res);
      let newHtml = data.replace('{{ req }}', JSON.stringify(shallowViewRequest));
      newHtml = newHtml.replace('{{ res }}', JSON.stringify(shallowViewResponse));
      res.end(newHtml);
    }
  });
});

server.listen(port, host, function() {
  console.log(`Listening at http://${ host }:${ port }`);
});

function createViewReq(req) {
  return {
    url : req.url,
    method : req.method,
    httpVersion : req.httpVersion,
    headers : req.headers
  };
}

function createViewRes(res) {
  return {
    statusMessage : res.statusMessage,
    statusCode : res.statusCode,
    _header : res._header
  };
}