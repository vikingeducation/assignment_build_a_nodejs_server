var http = require('http');
var fs = require('fs');

var port = 3000;
var host = "localhost";

var server = http.createServer(function(req, res){
	fs.readFile("./public/index.html", "utf8", function(err, data) {
		if(err) throw err;
		res.writeHead(200, {
			"Content-type": "text/html"
		});
		res.end(data);
	})
});


server.listen(port, host, function(){
	console.log(`Server now running at http://${host}:${port}`);
})