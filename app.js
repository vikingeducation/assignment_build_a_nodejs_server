const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer(function(req, res){
	fs.readFile('./public/index.html', 'utf8',  function(err, data){
		if(err){
			res.writeHead(404);
			res.end("404 Page Not Found");
		}else{
			resVar = JSON.stringify({statusMessage: res.statusMessage, 
				statusCode: res.statusCode,
				header: res._header}, null, 2);
			reqVar = JSON.stringify({url: req.url,
				method: req.method,
				httpVersion: req.httpVersion,
				headers: req.headers}, null, 2);
			let data2 = data.replace(/{{ res }}/, resVar);
			let data3 = data2.replace(/{{ req }}/, reqVar);
			res.writeHead(200, {
				     'Content-Type': 'text/html'
			});
			res.end(data3);
		}
	});
});
server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
