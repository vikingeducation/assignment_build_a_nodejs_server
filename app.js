const http = require('http');
const fs = require('fs');
const port = 3000;
const hostname = 'localhost';

http.createServer(function(req,res) {
	fs.readFile('./public/index.html', 'utf8', function(err, data) {
		if(err) {
			res.writeHead(404);
			res.end('404 Not Found');
		} else {
			let require = {
				"url": req.url,
				"method" : req.method,
				"httpVersion": req.httpVersion,
				"headers": req.headers
			};


			require = JSON.stringify( require, null, 2);

			let respond = {};
			["statusMessage", "statusCode", "_header"].forEach( function(element) {
				respond[element] = res[element];
			});

			respond = JSON.stringify(respond, null, 2);

			res.writeHead(200, {"Content-Type": "text/html"});

			data = data.replace("{{ req }}", require);
			data = data.replace("{{ res }}", respond);
			res.end(data);
		}
	});
})

.listen(port, hostname, function() {
	console.log(`server running at http://${hostname}:${port}/`);
});