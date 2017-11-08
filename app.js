var http = require('http');
var fs = require('fs');


var hostname = 'localhost';
var port = 3000;

////Node server sends back "Hello world!" :) - (this code works!)
// var server = http.createServer((req, res)=>{
//   res.writeHead(200, {
//     'Content-Type':'text/plain'
//   });
//   res.end("Hello World!");
// });
//
// server.listen(port, hostname, ()=>{
//   console.log(`Server is listening at ${hostname}:${port}`);
// });
var server = http.createServer((req, res)=>{
  fs.readFile('./public/index.html', 'utf-8', function(err, data){
    if(err){
      res.writeHead(404);
      res.end("File Not Found");
    }else{
      res.writeHead(200,{
        'Content-Type':'text/html'
      });
      res.end(data);
    }
  });
});
server.listen(port, hostname, ()=>{
   console.log(`Server is listening at ${hostname}:${port}`);
 });
