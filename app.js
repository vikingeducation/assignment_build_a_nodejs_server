let http = require('http');
let fs = require('fs');

let port = 3000;
let host = 'localhost';



let server = http.createServer((req, res) => {
	fs.readFile('./public/index.html', 'utf-8', function( err, data ) {
		res.writeHead (200, {'Content-Type': 'text/html' });
		res.end(data);
	});
})

server.listen(port, host, function(){
	console.log( `Server Running at ${host} ${port}` );
});

