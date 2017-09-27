"use strict";

const http = require('http');

let server = http.createServer((req, res) => {
	
	res.writeHead(200, {
		"Content-Type": "text/html"
	});
	res.end("<h1>Hello world!</h1>");
});

server.listen(3000, 'localhost', function() {
	console.log("Listening at http://localhost:3000");
});