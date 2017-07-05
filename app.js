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
			req_obj = {
				"url":req.url, 
				"method":req.method,
				"httpversion":req.httpVersion,
				"headers":req.headers
				}

			res_obj = {
				"statusMessage": res.statusMessage,
				"statusCode": res.statusCode,
				"header": res._header
			}

			res.writeHead(200, {
				"Content-Type": "text/html"
			});
			res.end(data.replace(
				"{{ req }}", JSON.stringify(req_obj, null, 2)).
			replace("{{ res }}", JSON.stringify(res_obj, null, 2)));

		}
	})
});

server.listen(port, host, function(){
	console.log(`Listening on port ${port} and host ${host}`);
})