"use strict";

const http = require('http'),
	fs = require('fs');

let server = http.createServer((req, res) => {
	fs.readFile('./public/index.html', 'utf8', function(err, data) {
		if (err) {
			res.writeHead(404);
			res.end("404 - Not Found");
		} else {
			res.writeHead(200, {
				"Content-Type": "text/html"
			});

			let reqArray = ["url", "method", "httpVersion", "headers"],
				reqObjectArray = [],
				resArray = ["statusMessage", "statusCode", "_header"],
				resObjectArray = [];

			for (var item in reqArray) {
				reqObjectArray.push({[reqArray[item]]: req[reqArray[item]]});
			};

			for (var item in resArray) {
				resObjectArray.push({[resArray[item]]: res[resArray[item]]});
			};

			let newData = data.replace("{{ req }}", JSON.stringify(reqObjectArray));
			newData = newData.replace("{{ res }}", JSON.stringify(resObjectArray));
			
			res.end(newData);
		}
	});
});

server.listen(3000, 'localhost', function() {
	console.log("Listening at http://localhost:3000");
});