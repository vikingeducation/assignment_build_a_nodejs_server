let http = require('http');
let fs = require('fs');

let port = 3000;
let host = 'localhost';

let server = http.createServer((req, res) => {
	fs.readFile('./public/index.html', 'utf-8', function( err, data ) {
		
		res.writeHead (200, {'Content-Type': 'text/html' });
		
		res.end(
			data
			 .replace(/{{ res }}/, JSON.stringify(res.statusMessage+" "+res.statusCode+" "+res._header, null, 2) )
			 .replace(/{{ req }}/, JSON.stringify(req.url+" "+req.method+" "+req.httpVersion+" "+req.headers, null, 2))
		);
	});
})

server.listen(port, host, function(){
	console.log( `Server Running at ${host} ${port}` );
});

