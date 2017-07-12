var http = require('http');
var fs = require('fs');


var host = 'localhost';
var port = 3000;


var server = http.createServer(function(req, res) {

	fs.readFile('./public/index.html', 'utf8', function(err, data) {
		if (err) {
			res.writeHead(404);
			res.end('404 not found');
		} else {
			res.writeHead(200, {
				'Content-Type': 'text/html'
			});

			var request = {
				'req.url': req.url,
				'req.method': req.method,
				'req.httpVersion': req.httpVersion,
				'req.headers': req.headers,
			};

			var response = {
				'res.statusMessage': res.statusMessage,
				'res.statusCode': res.statusCode,
				'res._header': res._header,
			};

			data = data.replace('req', JSON.stringify(request, null, 2) );
			data = data.replace('res', JSON.stringify(response, null, 2) );

			res.end(data);
		}
	});
});


server.listen(port, host, function(){

	console.log('listening at http://' + host + ':' + port);

});