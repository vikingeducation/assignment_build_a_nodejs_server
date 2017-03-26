const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');
  // res.end('Hello World\n');
  fs.readFile('./public/index.html', 'utf8',
                      function(err, data){
                                          if (err) {
                                            res.writeHead(404);
                                            res.end("404 Not Found");
                                          }
                                          else {
                                            res.writeHead(200, {
                                              "Content-Type": "text/html"
                                            });

      var reqHeaderString = JSON.stringify(req.headers, ['host', 'connection', 'accept'], 1);
      reqHeaderString = reqHeaderString.replace(/\n/gi, "")
                                       .replace(/[\"]/g, "");

      var resHeaderString = res._header;
      resHeaderString = resHeaderString.replace(/\n/gi, ", ")
                                       .replace(/\r/gi, "")
                                       .substring(0, resHeaderString.length - 4);

      var myReqObject = {
        "req.url" : req.url,
        "req.method" : req.method,
        "req.httpVersion" : req.httpVersion,
        "req.headers" : reqHeaderString
      }

      var myResObject = {
        "res.statusCode" : res.statusCode,
        "res.statusMessage" : res.statusMessage,
        "res._header" : resHeaderString
      }

      var originalString = data;
      var reqReplacer = JSON.stringify(myReqObject, null, 4);
      var resReplacer = JSON.stringify(myResObject, null, 4);

      var newString = data.replace(/{{ req }}/, reqReplacer)
                          .replace(/{{ res }}/, resReplacer);

      res.end(newString);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
