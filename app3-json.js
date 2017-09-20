//
// 3) Displaying request and response data with JSON
//

'use strict';

const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 3001;

const server = http.createServer(function(req,res) {
		var reqSnip = {
			url: req.url,
			method: req.method,
			httpVersion: req.httpVersion,
			headers: req.headers
		};

		var resSnip = {
			statusMessage: res.statusMessage,
			statusCode: res.statusCode,
			header: res._header
		};

		/*
		//this won't work because objects are circular structure, ie, too big
		//thus need to "downsize" it 
		var myJsonReqSnip = JSON.stringify(req, null, 2);
		var myJsonResSnip = JSON.stringify(res, null, 2);
		*/

		/*
		//looks minified
		var myJsonReqSnip = JSON.stringify(reqSnip);
		var myJsonResSnip = JSON.stringify(resSnip);
		*/

		//thus pretty print it
		var myJsonReqSnip = JSON.stringify(reqSnip, null, 2);
		var myJsonResSnip = JSON.stringify(resSnip, null, 2);

/*
		res.writeHead(200,
			//using mime-type = application/json seems to produce errors
			{'Content-Type': 'application/json'});
		res.end(myJsonReqSnip + '\n\n' + myJsonResSnip);
*/		

		fs.readFile(__dirname + '/public/index.html', 'utf8', function(err,data) {
		if (err) {
			res.writeHead(404);
			res.end("File not found");
		} else {
			res.writeHead(200,
				{'Content-Type': 'text/html'});
			data = data.replace('{ req }', myJsonReqSnip).replace('{ res }', myJsonResSnip);
			res.end(data);
		};
	});	
});

server.listen(port, hostname, function () {
	console.log(`Listening on http://${hostname}:${port}/`)
});
