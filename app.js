'use strict';

let http = require("http");
let fs = require("fs");

let host = "localhost";
let port = 3000;

let server = http.createServer(function(req, res) {
  // res.writeHead(200, {
  // 	"Content-Type": "text/plain"
  // });
  // res.end("Hello World!");

  fs.readFile("./public/index.html", "utf8", function(err, data){
  	if (err) {
  	  res.writeHead(404);
  	  res.end("404 Not Found");
  	} else {
  	  res.writeHead(200, {"Content-Type": "text/html"});
  	  res.end(data);
  	}
  });
});

server.listen(port, host, function() {
  console.log(`Listening at http://${host}:${port}`);
});