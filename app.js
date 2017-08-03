var http = require('http');

var port = 3000;
var hostname = 'localhost';

var server = http.createServer(function(req,res) {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World!');

});

server.listen(port, hostname, function() {
	console.log('Server running at http://${hostname}:${port}/')
});

