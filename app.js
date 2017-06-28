var http = require('http');
var port = 3000;
var host = 'localhost';

var server = http.createServer(function(req,res){
	res.writeHead(200,{
		"Content-Type":'text/plain'
	});
	res.end("Hello World!!!");
});

server.listen(port,host,function(){
	console.log("It's working! IT'S WORKING!!!")
});

