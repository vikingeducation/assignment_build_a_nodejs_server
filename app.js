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
      let reqArray = ["url", "method", "httpVersion", "headers"];
      let storReq = JSON.stringify(req, reqArray, 2);

      let resArray = ["statusMessage", "statusCode", "_header"];
      let storRes = JSON.stringify(res, resArray, 2)

      data = data.replace(/{{ req }}/, storReq);
      data = data.replace(/{{ res }}/, storRes);
      res.end(data);
    }
  } );

  //res.end("Hello World!");
});

server.listen(port, host, function() {
  console.log(`Listening at http://${ host }:${ port }`);
});
