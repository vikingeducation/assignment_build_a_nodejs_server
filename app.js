var http = require('http');
var port = 3000;
var host = 'localhost';
var fs = require('fs');
var reqData = {};
var resData = {};

var server = http.createServer(function(req,res){
	fs.readFile('./public/index.html','utf8',function(err,data){
		if(err){
			res.writeHead(404);
			res.end("This page under construction. Check back next week.")
		    } else {
		    res.writeHead(200, {'Content-Type': 'text/html'});
		    reqData.url = req.url;
		    reqData.method = req.method;
		    reqData.httpVersion = req.httpVersion;
		    reqData.headers = req.headers;
		    resData.statusMessage = res.statusMessage;
		    resData.statusCode = res.statusCode;
		    resData._header = res._header;
		    data = data.replace('{{ req }}', JSON.stringify(reqData));
		    data = data.replace('{{ res }}', JSON.stringify(resData));
		    console.log(data);
		    res.end(data);
		}
  	})
});	

server.listen(port,host,function(){
	console.log("It's working! IT'S WORKING!!!")
});


