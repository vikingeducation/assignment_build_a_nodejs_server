var http = require('http');
var fs = require('fs');


var port = 3000;
var host = 'localhost';


var server = http.createServer(function (req, res) {
  fs.readFile('./public/index.html', 'utf8', function (err,data) {
    request_obj = {URL: req.url, METHOD: req.method,
                  'HTTP VERSION':req.httpVersion, HEADERS: req.headers};
    result_obj = {STATUS:res.statusMessage, CODE:res.statusCode,
                  HEADER:res._header}

    if (err) {
        res.writeHead(404);
        res.end("404 Not Found");
    } else {
        res.writeHead(200, {
          "Content-Type" : "text/html"
        });
        data = data.replace('{{ req }}', JSON.stringify(request_obj, null, 5));
        data = data.replace('{{ res }}', JSON.stringify(result_obj, null, 5));
        res.end(data);
    }
  })
});



server.listen(port, host, function () {
  console.log(`Server: Live  ||  Listening: ${host}:${port}`)
});
