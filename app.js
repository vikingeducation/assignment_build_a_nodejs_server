const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  fs.readFile('./public/index.html', 'utf8', function(err, data) {
    if (err) {
      res.writeHead(404);
      res.end("404 - Whoops, we couldn't find anything there!");
    } else {
      res.writeHead(200, {
        "Content-Type": "text/html"
      });

      if (req.method === "GET") {
        requestResult = {
          url: req.url,
          method: req.method,
          httpVersion: req.httpVersion,
          headers: req.headers
        };
        responseResult = {
          statusMessage: res.statusMessage,
          statusCode: res.statusCode,
          _header: res._header
        };
        data = data.replace('{{ req }}', JSON.stringify(requestResult, null, 2));
        data = data.replace('{{ res }}', JSON.stringify(responseResult, null, 2));
        res.end(data);
      } else if (req.method === "POST") {
        var query = '';
        req.on('data', function(queryString) {
          query += queryString;
          // console.log(query);
          data = data.replace('{{ req }}', '');
          data = data.replace('{{ res }}', 'Your query string is ' + query);
          res.end(data);
        });
      }
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});