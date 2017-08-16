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

			let myRequest = {};
			["url", "method", "httpVersion", "headers"].forEach((e) => {
				// statements
				myRequest[e] = req[e];
			});

			myRequest = JSON.stringify(myRequest, null, 2);


			let myResponse = {};
			["statusMessage", "statusCode", "_header"].forEach( (e) => {
				// statements
				myResponse[e] = res[e];
			});

			myResponse = JSON.stringify(myResponse, null, 2);

			res.writeHead(200, {
				"Content-Type": "text/html"
			});

			data = data.replace("{{ req }}", myRequest);
			data = data.replace("{{ res }}", myResponse);

			res.end(data);
		}
	});
});

server.listen(port, () => {
	console.log(`Server running at localhost:${port}/`);
});