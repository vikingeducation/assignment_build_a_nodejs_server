'use strict';

const http = require('http');
const fs = require('fs');

let port = 3000;
let host = 'localhost';

let newReq = function(obj) {
  this.url = obj.url;
  this.method = obj.method;
  this.httpVersion = obj.httpVersion;
  this.headers = obj.headers;
};

let newRes = function(obj) {
  this.statusMessage = obj.statusMessage;
  this.statusCode = obj.statusCode;
  this._header = obj._header;
};

let server = http.createServer((req, res) => {
  fs.readFile('./public/index.html', 'utf8', (err, data) => {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    let req2 = new newReq(req);
    let res2 = new newRes(res);
    console.log('loaded');
    data = data.replace('{{ req }}', JSON.stringify(req2, null, 2));
    data = data.replace('{{ res }}', JSON.stringify(res2, null, 2));
    res.end(data);
  });
});

server.listen(port, host, () => {
  console.log(`Listening at http://${host}:${port}`);
});
