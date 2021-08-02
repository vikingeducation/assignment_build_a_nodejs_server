var http = require("http");

var server = http.createServer
(
	(req, res) =>
	{
		res.end("Hello World!");
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

