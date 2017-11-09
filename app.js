var http= require('http');
var fs=require('fs');

var port=3000;
var host='localhost';


var server = http.createServer((req, res) => {
  fs.readFile('./public/index.html',function(err, data){
    if (err){
      res.writeHead(404);
      res.end("File not Found");
    }
    else{
      res.writeHead(200,{
        "Content-Type": "text/html"
      });
      res.end(data);
    }
  });
});

server.listen(port, host, function(){
  console.log(`Server is Running and Listening at http://${ host }:${ port }`);
});