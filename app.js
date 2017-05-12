var http = require('http');
var fs = require('fs');

var port = 3000;
var host = '0.0.0.0';

var server = http.createServer(function(req, res){
  fs.readFile('./public/index.html', 'utf8', function(err, data){
    if (err){
      res.end('error of some kind')
    } else {
      res.writeHead(200, {
        "Content-Type": 'text/html'
      });
      res.end(data);
    }
  });
});

server.listen(port, host, function(){
  console.log(`Listening on http://${host}: ${port}`)
});
