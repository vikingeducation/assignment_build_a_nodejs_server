const http = require('http');
const fs = require('fs');

const port = 3000;
const host = 'localhost';

var server = http.createServer(function(req, res){

  fs.readFile('./public/index.html', 'utf8', function(err, data){
    if (err) {
      res.writeHead(404);
      res.end('404 thats no moon')
    } else {
      res.writeHead(200, {
        "Content-Type": "text/html"
      });

      //map the properties because req and res are huge circular objects
      var reqProperties = {};

        reqProperties.url = req.url;
        reqProperties.method = req.method;
        reqProperties.httpVersion = req.httpVersion;
        reqProperties.headers = req.headers;

      var resProperties = {};

        resProperties.statusMessage = res.statusMessage,
        resProperties.statusCode = res.statusCode,
        resProperties._header = res._header

      //replace res and req with JSON object data
      data = data.replace(//replace
        "{{ req }}",//this
        JSON.stringify(reqProperties, null, 2)//with this
      );

      data = data.replace(
        "{{ res }}",
        JSON.stringify(resProperties, null, 2)
      );

      res.end(data);//end

    }
  });
});

server.listen(port, host, function() {
  console.log(`Listening at http://${ host }:${ port }`);
});
