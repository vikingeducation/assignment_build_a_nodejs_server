var http = require('http');
var port = 3000;
var host = 'localhost';
var fs = require('fs');

var server = http.createServer(function(req,res){
	fs.readFile('./public/index.html','utf8',function(err,data){
		if(err){
			res.writeHead(404);
			res.end("This page under construction. Check back next week.")
		}else{
			res.writeHead(200,{
				"Content-Type":'text/html'
			});
			res.end(data);
		}
	});		
});

server.listen(port,host,function(){
	console.log("It's working! IT'S WORKING!!!")
});


