var http = require('http');
var fs = require('fs');

var port = 3000;
var host = 'localhost';

var server = http.createServer( function(req, res) {
  fs.readFile( './public/index.html', 'utf8', function(err, data) {
    if (err) {
      res.writeHead(404);
      res.end('Page not Found 404');
    } else {
      res.writeHead(200, {
        "Content-Type": 'text/html'
      });
      var requests = {
        'Method is: ': req.method,
        'HTTP Version is : ': req.httpVersion,
        'Request Header is: ': req.headers,
        'URL is: ': req.url
      };

      var responses = {
        'Status Message is: ': res.statusMessage,
        'Status Code is: ': res.statusCode,
        'Response Header is: ': res._header
      }

      var strRes = '';
      var strReq = '';
      for(var key in responses) {
        strRes += key + JSON.stringify(responses[key], null, 2) + ' \n ';
      }
      for(var key in requests) {
        strReq += key + JSON.stringify(requests[key], null, 2) + ' \n';
      }
      var newData = data.replace('{{ res }}', strRes ).replace('{{ req }}', strReq )
      res.end(newData);
    }
  })
});

server.listen(port, host, function() {
  console.log(`Listening at http://${ host }:${ port }/`);
});
