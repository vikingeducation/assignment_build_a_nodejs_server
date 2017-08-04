var http = require('http');
var fs = require('fs');

var port = 3000;
var hostname = 'localhost';

var server = http.createServer(function(req,res) {
	
	fs.readFile('./public/index.html', 'utf8', function(err, data){
		if (err) {
			res.writeHead(404);
			res.end('404 Not Found');
		} else {
			res.writeHead(200, {
				'Content-Type': 'text/html'
			});
			var reqData = {
				'url': req.url,
				'method': req.method,
				'httpVersion': req.httpVersion,
				'headers': req.headers
			}
			var resData = {
				'statusMessage': res.statusMessage,
				'statusCode': res.statusCode,
				'_header': res._header

			};
			res.end(data
				.replace('{{req}}', JSON.stringify(reqData, null, 2))
				.replace('{{res}}', JSON.stringify(resData, null, 2)));
		}

	});

});

server.listen(port, hostname, function() {
	console.log('Server running at http://${hostname}:${port}/')
});

