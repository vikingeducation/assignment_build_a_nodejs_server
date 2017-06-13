const http = require('http');
const fs = require('fs');

const port = 3000;
const host = 'localhost';

const server = http.createServer((req, res) => {
  fs.readFile('public/index.html', (err, data) => {
    if (err) {
      throw err;
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  })

});

server.listen(port, host, () => {
  console.log(`Server is up and running at: http://${host}:${port}`);
});

