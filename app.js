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
      res.writeHead(200, {
        "content-Type": "Text/html"
      });
      res.end(data);
    }
  });
});


server.listen(port, host, () => {
  console.log(`Listening at http://${ host }:${port}`);
}); 



