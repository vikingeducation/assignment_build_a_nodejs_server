const http = require('http');
const fs = require('fs');

const port = 3000;
const host = 'localhost';

const server = http.createServer((req, res) => {
  fs.readFile('public/index.html', 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    const reqData = {
      url: req.url,
      method: req.method,
      httpVersion: req.httpVersion,
      headers: req.headers
    };

    const resData = {
      statusMessage: res.statusMessage,
      statusCode: res.statusCode,
      _header: res._header
    }
    data = data.replace('{{ req }}', JSON.stringify(reqData, null, 2));
    data = data.replace('{{ res }}', JSON.stringify(resData, null, 2));
    console.log(data);
    res.end(data);
  })

});

server.listen(port, host, () => {
  console.log(`Server is up and running at: http://${host}:${port}`);
});

