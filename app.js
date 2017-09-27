"use strict";

const http = require('http'),
	fs = require('fs');

let server = http.createServer((req, res) => {
	fs.readFile('./public/index.html', 'utf8', function(err, data) {
		if (err) {
			res.writeHead(404);
			res.end("404 - Not Found");
		} else {
			res.writeHead(200, {
				"Content-Type": "text/html"
			});
			res.end(data);
		}
	});
});

server.listen(3000, 'localhost', function() {
	console.log("Listening at http://localhost:3000");
});