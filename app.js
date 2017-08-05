// require libraries
var http = require('http');
var fs = require('fs');

// set up vars
var host = 'localhost';
var port = 3000;


// create a server
var server = http.createServer(function(request, response){
  fs.readFile('./public/index.html', 'utf8', function(err, data){
    if (err) {
      response.writeHead(404);
      response.end("Whoops! That page is nowhere to be found.");
    } else {
      response.writeHead(200, {
        "Content-Type": "text/html"
      });
      response.end(data);
    }
  });
});


// enable the server to run
server.listen(port, host, function(){
  console.log(`Listening at http://${ host }:${ port }`);
});