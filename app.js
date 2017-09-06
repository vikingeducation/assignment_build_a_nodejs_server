'use strict';

let http = require("http");
let fs = require("fs");
let qs = require("querystring");

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
  	  res.end("404: Page Not Found");
  	} else {
  	  res.writeHead(200, {"Content-Type": "text/html"});

  	  // get incoming request data in an object
      let reqObj = {
        "req.url": req.url,
        "req.method": req.method,
        "req.httpVersion": req.httpVersion,
        "req.headers": req.headers
      }

      // get response data in an object
      let resObj = {
        "res.statusCode": res.statusCode,
        "res.statusMessage": res.statusMessage,
        "res._header": res._header
      }

      // output JSON objects info into strings
      let reqOutput = JSON.stringify(reqObj, null, 2);
      let resOutput = JSON.stringify(resObj, null, 2);

      // reassign values of html variables to new data string content
      data = data.replace("req", reqOutput);
      data = data.replace("res", resOutput);

      if (req.method === "POST") {

        // get posted data
      	let postObj = "";
      	req.on("data", function(data) {
          postObj += data;
      	});

        // when no more data
      	req.on("end", function() {

		  // parse posted data 
          postObj = qs.parse(postObj);	
          let postOutput = JSON.stringify(postObj, null, 2);

          console.log(`POST Data: ${postOutput}`);
        });
	  }
	}

  	res.end(data);
  });

});  

server.listen(port, host, function() {
  console.log(`Listening at http://${host}:${port}`);
});