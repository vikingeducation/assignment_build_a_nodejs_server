var http = require('http');
var fs = require('fs');

var port = 3000;
var host = '0.0.0.0';

var server = http.createServer(function(req, res){
  res.writeHead(200, {
    "Content-Type": 'text/plain'
  });
  res.end('hello world!')
});

server.listen(port, host, function(){
  console.log(`Listening on http://${host}: ${port}`)
})
