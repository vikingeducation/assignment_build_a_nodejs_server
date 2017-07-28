var http = require('http');
var port = 3000;
var hostname = 'localhost'

http.createServer(function(req,res) {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World!\n');
})

.listen(port, hostname, function() {
	console.log(`server running at http://${hostname}:${port}/`);
});