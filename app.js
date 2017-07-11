const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer( ( req, res )=> {
  /*res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end("Hello World!");*/
  debugger;

  fs.readFile('./public/index.html', 'utf8', function(err, data) {
    if (err) {
      res.writeHead(404);
      res.end("404 Not Found");
    } else {
      res.writeHead(200, {
        "Content-Type": "text/html"
      });
      var response_obj = {
        'res.statusCode': res.statusCode,
        'res.statusMessage': res.statusMessage,
        'res._header': res._header
      }
      var request_obj = {
        "req.url": req.url,
        "req.method": req.method,
        "req.httpVersion": req.httpVersion,
        "req.headers": req.headers
      }
      debugger;
      var response_string = JSON.stringify( response_obj, null, 2 );
      var request_string = JSON.stringify( request_obj, null, 2 );
      data = data.replace( "res", response_string );
      data = data.replace( "req", request_string );
      res.end(data);
      debugger;
    }
  });
})

server.listen( port, hostname, () => {
  console.log( `Server running at https://${ hostname }:${ port }`);
})

/*
JSON.stringify(value[, replacer[, space]])

JSON.stringify(object, null, 2)

str.replace(regexp|substr, newSubstr|function)

regexp (pattern)
A RegExp object or literal. The match or matches are replaced with newSubStr or the value returned by the specified function.

substr (pattern)
A String that is to be replaced by newSubStr. It is treated as a verbatim string and is not interpreted as a regular expression. Only the first occurrence will be replaced.

newSubStr (replacement)
The String that replaces the substring specified by the specified regexp or substr parameter. A number of special replacement patterns are supported; see the "Specifying a string as a parameter" section below.

function (replacement)
A function to be invoked to create the new substring to be used to replace the matches to the given regexp or substr. The arguments supplied to this function are described in the "Specifying a function as a parameter" section below.

Return value
A new string with some or all matches of a pattern replaced by a replacement.




You should output the following properties from the req object:

req.url
req.method
req.httpVersion
req.headers
You should output the following properties from the res object:

res.statusMessage
res.statusCode
res._header


*/
