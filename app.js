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

			let reqObject = {
				url: req.url,
				method: req.method,
				httpVersion: req.httpVersion,
				headers: req.headers
			}

			let resObj = {
				statusMessage: res.statusMessage,
				statusCode: res.statusCode,
				header: res._header
			}

			let jsonReqObject = JSON.stringify(reqObject, null, 2);
			let jsonResObj = JSON.stringify(resObj, null, 2);

			let mapObj = {
				'{{ req }}': jsonReqObject,
				'{{ res }}': jsonResObj
			}

			data = data.replace(/{{ req }}|{{ res }}/g, (matched) => {
				return mapObj[matched];
			});

			res.end(data);
		}
	});
});

server.listen(port, hostName, () => {
	console.log(`Server running at http://${hostName}:${port}/`);
});