var http = require("http");
var fs = require("fs");

var port = "4001";
var host = "127.0.0.1";

var server = http.createServer(function(req,res){
	fs.readFile("./public/index.html","utf8", function(err,data){
		if(err){
			res.writeHead(404);
			res.end("404 not found");
		}
		else{
			res.writeHead(200, {
				"Content-Type": "text/html"
			});
			res.end(data);
		}
	})
});

server.listen(port, host, function(){
	console.log(`Listening on port ${port} and host ${host}`);
})