const http = require('http');
const fs = require('fs');

const hostName = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
	fs.readFile('./public/index.html', 'utf-8', (err, data) => {
		if (err) {
			res.writeHead(404);
			res.end('404 Not Found');
		} else {
			res.writeHead(200, {
				'Content-Type': 'text/html'
			});
			res.end(data);
		}
	});
});

server.listen(port, hostName, () => {
	console.log(`Server running at http://${hostName}:${port}/`);
});