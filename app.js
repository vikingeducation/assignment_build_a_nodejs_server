var http = require('http');


var port = 3000;
var host = 'localhost';


var server = http.createServer(function (req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end("Hello World!") 

});



server.listen(port, host, function () {
  console.log(`Server: Live  ||  Listening: ${host}:${port}`)
});
