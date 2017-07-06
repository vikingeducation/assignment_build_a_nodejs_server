const http = require("http");

const hostname = "localhost"
const port = 3000

const server = http.createServer(function(req, res) {
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/plain");
	res.end("Hello World!")
});

server.listen(port, hostname, function() {
	console.log(`Server is running at http://${hostname}:${port}`);
});