var http = require('http');
var fs = require('fs');


var port = 3000;
var host = 'localhost';


var server = http.createServer(function(req, res) {
    
  //res.statusCode = 200;
  //res.setHeader('Content-Type', 'text/plain');
  //res.end('Hello World\n')
  fs.readFile('./public/index.html', 'utf8', function(err, data) {
    if (err) {
      res.writeHead(404);
      res.end("404 Not Found");
    } else {
      res.writeHead(200, {
        "Content-Type": "text/html"
      });
      res.end(data);
    }
  });
});


server.listen(port, host, function() {
  console.log(`Listening at http://${ host }:${ port }`);
});

