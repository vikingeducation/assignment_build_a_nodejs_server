
/*
  cd Documents/Viking/Node/node_server
*/

const http = require(`http`),
  fs = require(`fs`),
  hostname = `127.0.0.1`,
  port = 3000;

const server = http.createServer((req, res) => {
  fs.readFile(`public/index.html`, `utf8`, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end(`404 File Not Found`);
    } else {
      res.writeHead(200, {
        "Content-Type": `text/html`
      });

      let requested = {
        url: req.url,
        method: req.method,
        httpVersion: req.httpVersion,
        headers: req.headers
      };

      let responses = {
        statusMessage: res.statusMessage,
        statusCode: res.statusCode,
        header: res._header
      };

      let modified = data
        .replace(/{{ req }}/, JSON.stringify(requested, null, 1))
        .replace(/{{ res }}/, JSON.stringify(responses, null, 1));

      res.end(modified);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// spacing
