const fs = require('fs');
const http = require('http');
const host = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  fs.readFile('./public/index.html', "UTF-8", (err, data) => {
    res.writeHead(200, {
      "Content-Type": 'text/html'
      });
    JSON.stringify({"test": "TEST"}, null, 2);
    res.end(data);
  });
});  

server.listen(port, host, function() {
  console.log(`Server listening at http://${host}:${port}/`
    );
})