//Node server sends back "Hello world!" :) - (this code works!)
var http = require('http');


var hostname = 'localhost';
var port = 3000;

var server = http.createServer((req, res)=>{
  res.writeHead(200, {
    'Content-Type':'text/plain'
  });
  res.end("Hello World!");
});

server.listen(port, hostname, ()=>{
  console.log(`Server is listening at ${hostname}:${port}`);
});
