const fs = require("fs");

const express = require("express");
const app = express();

const hostname = "localhost"
const port = 3000

app.set("view engine", "hbs");

app.get("/", function(req, res) {
	res.statusMessage = "Everything's fine?"
	reqSimple = {
		"url": req.url,
		"method": req.method,
		"httpVersion": req.httpVersion,
		"headers": req.headers
	};

	resSimple = {
		"statusMessage": res.statusMessage,
		"statusCode": res.statusCode,
		"_header": res._header
	};

	res.render("index", {
		req: JSON.stringify(reqSimple, null, 2),
		res: JSON.stringify(resSimple, null, 2)
	});
});

app.listen(port, hostname, function() {
	console.log(`Server is running at http://${hostname}:${port}`);
});