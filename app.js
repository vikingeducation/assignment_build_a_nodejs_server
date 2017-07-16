const http = require('http');
const fs = require('fs');

var port = 3000;
var host = 'localhost';

var server = http.createServer((req, res) => {
  fs.readFile('./public/index.html', 'utf-8', (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("404 Not Found");
    } else {
      let shallowReq = {
        'url': req.url,
        'method': req.method,
        'httpVersion': req.httpVersion,
        'headers': req.headers
      }
      let shallowRes = {
        'statusMessage': res.statusMessage,
        'statusCode': res.statusCode,
        '_header': res._header
      }

      res.writeHead(200, {
        "content-Type": "Text/html"
      });
      data = data.replace('{{ req }}', JSON.stringify(shallowReq, null, 2));
      data = data.replace('{{ res }}', JSON.stringify(shallowRes, null, 2));
      res.end(data);
    }
  });
});


server.listen(port, host, () => {
  console.log(`Listening at http://${ host }:${port}`);
}); 



