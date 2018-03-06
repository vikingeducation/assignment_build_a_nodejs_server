var http = require('http'), host = 'localhost', port = 3000;
var fs = require('fs');

var server = http.createServer(function(req, res) {
  fs.readFile('./public/index.html', 'utf8', function(err, data) {
    if (err) {
      res.writeHead(404);
      res.end('404 Not Found');
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      let ReqProp = ['url', 'method', 'httpVersion', 'headers'];
      let ResProp = ['statusMessage', 'statusCode', '_header'];
      let request = ReqProp.map((prop) => {return { [prop] : req[prop] }; });
      let response = ResProp.map((prop) => {return { [prop] : res[prop] }; });
      let display = data.replace('{{ req }}', JSON.stringify(request))
        .replace('{{ res }}', JSON.stringify(response));
      res.end(display);
    }
  });
});

server.listen(port, host, function() {
  console.log('Listening at http://'+host+':'+port);
});
