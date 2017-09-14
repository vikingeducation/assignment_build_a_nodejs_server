var http = require('http');

var server = http.createServer(function(req,res){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello Westeros and Essos!')
});


server.listen(3000, 'localhost');
console.log('now working and listening to port 3000');
