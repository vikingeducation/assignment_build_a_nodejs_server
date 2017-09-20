//
// 2) Outputting HTML
//

'use strict';

const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 3001;

const server = http.createServer(function(req,res) {
	fs.readFile(__dirname + '/public/index.html', 'utf8', function(err,data) {
		if (err) {
			res.writeHead(404);
			res.end("File not found");
		} else {
			res.writeHead(200,
				{'Content-Type': 'text/html'});
			res.end(data);
		};
	});	
});

server.listen(port, hostname, function () {
	console.log(`Listening on http://${hostname}:${port}/`)
});
