var http = require('http');

var host = "localhost"
var port = 3000;

server = http.createServer(function(req, res){
	res.writeHead(200, {
		"Content-Type": "text"
	});
	res.end("Hello World!");
});

server.listen(port, host, function(){
	console.log("Server is listening at http://${host}:${port}");
});