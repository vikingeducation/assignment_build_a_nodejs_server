
let http = require('http');
let fs = require('fs');

let port = 3000;
let host = 'localhost';

let wantedReqProperties = ["url", "method", "httpVersion", "headers"];
let wantedResProperties = ["statusMessage", "statusCode", "_header"];

let server = http.createServer((req, res) => {
  fs.readFile('./public/index.html', 'utf8', (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("404 Not Found");
    } else {
      res.writeHead(200, {
        "Content-Type":"text/html"
      });

      let request = wantedReqProperties.map((property) => {
        return { [property] : req[property] };
      });
      let response = wantedResProperties.map((property) => {
        return { [property] : res[property] };
      });

      let newData = data.replace("{{ req }}", JSON.stringify(request))
                        .replace("{{ res }}", JSON.stringify(response));

      res.end(newData);
    }
  });
});

server.listen(port, host, () => {
  console.log(`http://${host}:${port}`);
});
