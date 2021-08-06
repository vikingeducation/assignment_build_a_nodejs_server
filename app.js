var http = require("http");
var fs = require("fs");

var path = "./public/index.html";

var server = http.createServer((req, res) => {
	fs.readFile(path, "utf8", (err, data) => {
		if (err) {
			res.end("404 file not found");
		} else {
			res.setHeader("Content-type", "text/html");
			reqFiltered = {
				"url": req.url,
				"method": req.method,
				"httpVersion": req.httpVersion,
				"headers": req.headers
			};
			resFiltered = {
				"statusMessage": res.statusMessage,
				"statusCode": res.statusCode,
				"_header": res._header
			};
			data = data.replace("{{ req }}", JSON.stringify(reqFiltered, null, 2));
			data = data.replace("{{ res }}", JSON.stringify(resFiltered, null, 2));
			res.end(data);
		}
	});
});

var host = "localhost";
var port = 3000;

server.listen(port, host, () =>	{
	console.log(`Listening at http://${host}:${port}`);
});

