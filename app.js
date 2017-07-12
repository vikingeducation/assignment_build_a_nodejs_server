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
			res.end(data);
		}
	});
});


server.listen(port, host, function(){

	console.log('listening at http://' + host + ':' + port);

});