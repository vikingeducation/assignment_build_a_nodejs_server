var http = require('http');
var fs = require('fs');
var stfry = require('json-stringify-safe');

var port = 3000;
var host = 'localhost';
var mydoc = fs.readFile('./Public/index.html');

var server = http.createServer(function(req, res) {
  fs.readFile('./Public/index.html', 'utf8', function(err, data) {
    if (err) {
      res.writeHead(404);
      res.end("404 Not Found");
    } else {

        //mydoc.getElementById("res").innerHTML = stfry(res);
      //mydoc.getElementById("req").innerHTML = stfry(req);
      res.writeHead(200, {
        "Content-Type": "text/html"
      });
      res.end(data);
      var req2 = stfry(req.url) + " url " + stfry(req.method)
+ " method " + stfry(req.httpVersion) + " httpVersion Then headers " + stfry(req.headers)
      ;

      var res2 = stfry(res.statusMessage) + " statusMessage " + stfry(req.statusCode)
+ " statusCode " + stfry(req._header) + "  headers ";

//String.prototype.replace( req, JSON.stringify(req, null, 2));
//String.prototype.replace( res, JSON.stringify(res, null, 2));
console.log(req2 + "did I change this");
console.log(res2 + "did I change this");
    }
  });
});


server.listen(port, host, function() {
  console.log(`Listening at http://${ host }:${ port }`);
});
