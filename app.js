// require libraries
var http = require('http');
var fs = require('fs');

// set up vars
var host = 'localhost';
var port = 3000;


// create a server
var server = http.createServer(function(request, response){
  // set up simple server
  fs.readFile('./public/index.html', 'utf8', function(err, data) {
    if (err) {
      response.writeHead(404);
      response.end("404 Whoops! That page is nowhere to be found.");
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });

      // capture incoming request data in an object
      var requestObj = {
        "request.url": request.url,
        "request.method": request.method,
        "request.httpVersion": request.httpVersion,
        "request.headers": request.headers
      }

      // capture response data in an object
      var responseObj = {
        'response.statusCode': response.statusCode,
        'response.statusMessage': response.statusMessage,
        'response._header': response._header
      }

      // output JSON objects info into strings
      var requestOutput = JSON.stringify( requestObj, null, 2 );
      var responseOutput = JSON.stringify( responseObj, null, 2 );

      // reassign values of html variables to new data string content
      data = data.replace( "request", requestOutput );
      data = data.replace( "response", responseOutput );

      // pass the data to the view
      response.end(data);
    }
  });
});


// enable the server to run
server.listen(port, host, function(){
  console.log(`Listening at http://${ host }:${ port }`);
});