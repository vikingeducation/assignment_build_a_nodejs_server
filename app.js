var http = require("http");
var fs = require("fs");

var path = "./public/index.html";

var server = http.createServer
(
	(req, res) =>
	{
		fs.readFile
		(
			path, (err, data) =>
			{
				if (err)
				{
					res.end("404 file not found");
				}
				else
				{
					res.end(data);
				}
			}
		)
	}
);

var host = "localhost";
var port = 3000;

server.listen
(
	port, host, () =>
	{
		console.log(`Listening at http://${host}:${port}`);
	}
);

