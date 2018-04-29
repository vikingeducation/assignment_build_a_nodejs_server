
/*
  cd Documents/Viking/Node/node_server
*/

const http = require(`http`),
      fs = require(`fs`),
      hostname = `127.0.0.1`,
      port = 3000;

/*const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader(`Content-Type`, `text/plain`);
  res.end(`Hello World\n`);
});*/

const server = http.createServer((req, res) => {
  fs.readFile(`public/index.html`, `utf8`,(err, data) => {
    if (err) {
      res.writeHead(404);
      res.end(`404 File Not Found`);
    } else {
      res.writeHead(200, {
        "Content-Type": `text/html`
      });
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});





























// spacing
