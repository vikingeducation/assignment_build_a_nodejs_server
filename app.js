var http = require('http');
var fs = require('fs');

var port = 3000;
var host = "localhost";

var server = http.createServer(function(req, res){
	fs.readFile("./public/index.html", "utf8", function(err, data) {
		if(err) {
			res.writeHead(404);
		} else {
			reqObj = JSON.stringify({
				url: req.url,
				method: req.method,
				httpVersion: req.httpVersion,
				headers: req.headers
			}, null, 2);
			resObj = JSON.stringify({
				statusMessage: res.statusMessage,
				statusCode: res.statusCode,
				_header: res._header
			}, null, 2);
			res.writeHead(200, {
				"Content-type": "text/html"
			});
			data = data.replace("res", resObj);
			data = data.replace("req", reqObj);
			res.end(data);
			console.log(req.url);
		}
	})
});


server.listen(port, host, function(){
	console.log(`Server now running at http://${host}:${port}`);
})