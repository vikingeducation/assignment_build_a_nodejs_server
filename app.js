const http = require("http");
const fs = require("fs");

const hostname = "localhost"
const port = 3000

const server = http.createServer(function(req, res) {
	fs.readFile("./public/index.html", "utf8", function(error, data) {
		if (error) {
			res.writeHead(404);
			res.end("404 File Not Found");
		} else {
			res.statusCode = 200;
			res.setHeader("Content-Type", "text/html")
			res.end(data);
		}
	})
});

server.listen(port, hostname, function() {
	console.log(`Server is running at http://${hostname}:${port}`);
});