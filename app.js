const fs = require('fs');
require('handlebars')
const http = require('http');
const host = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  fs.readFile('./public/index.html', "UTF-8", (err, data) => {
    res.writeHead(200, {
      "Content-Type": 'text/html'
      });

    var resSo = {
      "res.statusMessage" : res.statusMessage, 
      "res.statusCode" : res.statusCode, 
      "res._header" : res._header 
    };

    var reqSo = {
      "req.url" : req.url,
      "req.method" : req.method,
      "req.httpVersion" : req.httpVersion,
      "req.headers" : req.headers
    };

    res.end(data, function() {
    data = data.replace('{{ res }}', JSON.stringify(resSo, null, 2));
    data = data.replace('{{ req }}', JSON.stringify(reqSo, null, 2));
    });
  });
});  


server.listen(port, host, function() {
  console.log(`Server listening at http://${host}:${port}/`
    );
})