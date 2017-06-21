"use strict";

const http = require("http");
const fs = require("fs");

let port = 3000;
let host = "localhost";

let server = http.createServer(function(req, res) {
  fs.readFile("./public/index.html", "utf8", function(err, data) {
    if(err) {
      res.writeHead(404);
      res.end("404 Not Found");
    } else {
      res.writeHead(200, {
        "Content-Type": "text/html"
      });
      res.end(data);
    }
  } );

  //res.end("Hello World!");
});

server.listen(port, host, function() {
  console.log(`Listening at http://${ host }:${ port }`);
});
