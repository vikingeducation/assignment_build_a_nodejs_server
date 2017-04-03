var http = require('http');
var fs = require('fs');
var qs = require('querystring');


var port = 3000;
var host = 'localhost';


var server = http.createServer(function(req, res) {
  fs.readFile('./public/index.html', 'utf8', function(err, data) {
    if (err) {
      res.writeHead(404);
      res.end("404 Not Found");
    } else {


      var body = '';

      req.on('data', function(chunk){
        body += chunk;
      });

      req.on('end', function(){
        let requestData = {};
        let responseData = {};
        var bodyData = qs.parse(body);

        requestData.url = req.url;
        requestData.method = req.method;
        requestData.httpVersion = req.httpVersion;
        requestData.headers = req.headers;
        requestData.username = bodyData.username;
        requestData.password = bodyData.password;

        responseData.statusMessage = res.statusMessage;
        responseData.statusCode = res.statusCode;
        responseData._header = res._header;

        res.writeHead(200, {
          "Content-Type": "text/html"
        });
        res.end(data.replace('{{ req }}', JSON.stringify(requestData,null,2))
                    .replace('{{ res }}', JSON.stringify(responseData, null, 2)));
      });


    }
  });
});


server.listen(port, host, function() {
  console.log(`Listening at http://${ host }:${ port }`);
});
