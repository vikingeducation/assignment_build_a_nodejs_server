var http = require('http');
var fs = require('fs');

var host = '127.0.0.1';
var port = 3000;

var server = http.createServer(function(req, res) {

  fs.readFile('./public/index2.html', 'utf8', function(err, data) {
    if (err) {
      res.writeHead(404);
      res.end('File not found');
    } else {
      console.log('req.url is: ', req.url);
      console.log('req.method is: ', req.method);
      console.log('res._header is: ', res._header);
      res.writeHead(200, {
        'Content-type': 'text/html'
      });
      res.end(data);
    }
  });

});

server.listen(port, host, function() {
  console.log(`server listening at http:// ${host}: ${port}`);
});