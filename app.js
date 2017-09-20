//
// Setup HTTP server
//

'use strict';

const http = require('http');

const hostname = 'localhost';
const port = 3001;

const server = http.createServer(function(req,res) {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.end('Hello World!\n');
});

server.listen(port, hostname, function () {
	console.log(`Listening on http://${hostname}:${port}/`)
});
