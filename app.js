const http = require('http');
const fs = require('fs');

const port = 3000;
const hostname = "localhost"

const server = http.createServer(function(req, res){
      fs.readFile("./public/index.html", "utf8", function(err, data) {
      if(err){res.writeHead(404); res.end("404 not found");}
      else {
        var htmlOut = data;
        var reqData = JSON.stringify(req.url)+JSON.stringify(req.method)
          +JSON.stringify(req.httpVersion)+JSON.stringify(req.headers);
        var resData = JSON.stringify(res.statusMessage)
          +JSON.stringify(res.statusCode)+JSON.stringify(res._header);
        htmlOut = htmlOut.replace("{{ req }}", reqData);
        htmlOut = htmlOut.replace("{{ res }}", resData);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(htmlOut);
      }
    })
});

server.listen(port, hostname, function() {
  console.log("Server is running at http://localhost:3000");
  });
