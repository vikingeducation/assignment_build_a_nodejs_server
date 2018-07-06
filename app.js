var http = require('http');
var fs = require('fs');

var port = 3000;
var host = 'localhost';


var server = http.createServer(function(req, res) {
  fs.readFile('./public/index.html', 'utf8', function(err, data) {
    if (err) {
      res.writeHead(404);
      res.end("404 Not Found");
    } else {
      res.writeHead(200, {
        "Content-Type": "text/html"
        console.log(String.prototype.replace(req));
        console.log(JSON.stringify(req.pre));
      });
      res.end(data);
    }
  });
});

server.listen(port, host, function() {
  console.log(`Listening at http://${ host }:${ port }`);
});
