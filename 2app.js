const http = require('http');
var fs = require('fs');

const host = '127.0.0.1';
const port = 3001;

var server = http.createServer(function(req, res) {
  console.log
  console.log('req.url is------- ', req.url);

  fs.readFile('./public/index2.html', 'utf8', function(err, data) {
    if (err) {
      res.writeHead(404);
      res.end("404 Not Found");
    } else {
      res.writeHead(200, {
        "Content-Type": "text/html"
      });
      //console.log(data);
      res.end(data);
    }
  });


});

server.listen(port, host, function() {
  console.log(`Listening at http://${ host }:${ port }`);
});