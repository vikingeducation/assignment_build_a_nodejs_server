const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  fs.readFile('./public/index.html', 'utf-8', (err, data) => {
    if(err) {
      res.statusCode = 404;
      res.end('404 Not Found');
    } else {
      res.statusCode = 200; 
      res.setHeader('Content-Type', 'text/html');

      const reqObj = {
        url         : req.url,
        method      : req.method,
        httpVersion : req.httpVersion,
        headers     : req.headers
      };

      const reqString = JSON.stringify(reqObj, null, 2);

      const resObj = {
        statusMessage : res.statusMessage,
        statusCode    : res.statusCode,
        _header       : res._header
      };

      const resString = JSON.stringify(resObj, null, 2);

      const newData = data
        .replace(/{{ req }}/, reqString)
        .replace(/{{ res }}/, resString);

      res.end(newData);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

