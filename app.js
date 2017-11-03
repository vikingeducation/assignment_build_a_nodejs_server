
var http = require('http');
var fs = require('fs');


var port = 3000;
var host = 'localhost';

var server = http.createServer(function(req, res) {
  /*console.log("Request: " + req.url + req.method + req.httpVersion + JSON.stringify(req.headers, null, 2) +res.statusMessage +
res.statusCode +
res._header) fs.writeFile(data, result, 'utf8', function (err) {
     if (err) { return console.log(err)}; var result = data.replace(/{req}/g, req.method); */

   fs.readFile('./public/index.html', 'utf8', function(err, data) {
    if (err) {
      res.writeHead(404);
      res.end("404 Not Found");
    } else {

      res.writeHead(200, {
        "Content-Type": "text/html"
      });
      var result1 = data.replace(/{{req}}/g, JSON.stringify([req.method, req.url, req.httpVersion,
req.headers], null, 2)).replace(/{{res}}/g, JSON.stringify([res.statusMessage, res.statusCode, res._header], null, 2));

      res.end(result1);
    }
  });
});


server.listen(port, host, function() {
  console.log(`Server running at http://${host}:${port}`
  	);
});