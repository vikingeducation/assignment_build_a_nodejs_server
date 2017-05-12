var http = require('http');
var fs = require('fs');

var port = 3000;
var host = '0.0.0.0';

var server = http.createServer(function(req, res){
  var request = {
    'url':req.url,
    'method':req.method,
    'httpVersion':req.httpVersion,
    'headers':req.headers
  };
  var results = {
    'statusMessage': res.statusMessage,
    'statusCode': res.statusCode,
    'header': res._header
  }
  fs.readFile('./public/index.html', 'utf8', function(err, data){
    if (err){
      res.end('error of some kind')
    } else {
      data = data.replace("{{ req }}", JSON.stringify(request, null, 2));
      data = data.replace("{{ res }}", JSON.stringify(results, null, 2));
      res.writeHead(200, {
        "Content-Type": 'text/html'
      });
      res.end(data);
    }
  });
});

server.listen(port, host, function(){
  console.log(`Listening on http://${host}: ${port}`)
});
