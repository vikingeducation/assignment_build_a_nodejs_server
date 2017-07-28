const http = require('http');
const fs = require('fs');
const port = 3000;
const hostname = 'localhost'

http.createServer(function(req,res) {
	fs.readFile('./public/index.html', 'utf8', function(err, data) {
		if(err) {
			res.writeHead(404);
			res.end('404 Not Found');
		} else {
			res.writeHead(200, {
				"Content-Type": "text/html"
			});
			res.end(data);
		}
	});
})

.listen(port, hostname, function() {
	console.log(`server running at http://${hostname}:${port}/`);
});