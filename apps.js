const http = require('http');
const fs = require('fs');
const port = 3000;
const path = './public/index.html';

const server = http.createServer((req, res) => {
	fs.readFile(path, 'utf8', (err, data) => {
		if(err) {
			res.writeHead(404);
			res.end('404 Not Found');
		} else {
			res.writeHead(200, {
				"Content-Type": "text/html"
			});
			res.end(data)
		}
	})
});

server.listen(port, () => {
	console.log(`Server running at localhost:${port}/`);
});

module.exports = server;