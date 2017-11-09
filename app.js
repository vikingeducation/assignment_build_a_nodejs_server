var http= require('http');
var fs=require('fs');

var port=3000;
var host='localhost';


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, host, function(){
  console.log(`Server is Running and Listening at http://${ host }:${ port }`);
});