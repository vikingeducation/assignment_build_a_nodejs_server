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

  	  // capture incoming request data in an object
      var reqObj = {
        "req.url": req.url,
        "req.method": req.method,
        "req.httpVersion": req.httpVersion,
        "req.headers": req.headers
      }

      // capture response data in an object
      var resObj = {
        "res.statusCode": res.statusCode,
        "res.statusMessage": res.statusMessage,
        "res._header": res._header
      }

      // output JSON objects info into strings
      var reqOutput = JSON.stringify( reqObj, null, 2 );
      var resOutput = JSON.stringify( resObj, null, 2 );

      // reassign values of html variables to new data string content
      data = data.replace( "req", reqOutput );
      data = data.replace( "res", resOutput );

  	  res.end(data);
  	}
  });
});

server.listen(port, host, function() {
  console.log(`Listening at http://${host}:${port}`);
});