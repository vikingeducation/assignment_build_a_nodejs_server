var http = require("http");
var fs = require("fs");
var filePath = "./public/index.html";

var port = 3000;
var host = 'localhost';

var server = http.createServer (function(req,res){
  fs.readFile(filePath, 'utf8', function (err,data){
    if (err){

    }
    else {
      res.writeHead(200,{
        "Content-Type": "text/html"
      });
      res.end(data);
    }
  });
});

server.listen(port, host, function() {
  console.log(`Listening at http://${ host }:${ port }`);
});
