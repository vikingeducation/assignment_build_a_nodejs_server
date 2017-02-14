const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;
const path = "./public/index.html";

const server = http.createServer( (req, res) => {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      res.writeHead(400, {"Content-Type": "text/plain"});
      res.end("404 Not Found");
    } else {

      let myReq = {};
      ["url", "method", "httpVersion", "headers"].forEach( (key) => {
        myReq[key] = req[key];
      });
      myReq = JSON.stringify(myReq, null, 2);
      let myRes = {};
      ["statusMessage", "statusCode", "_header"].forEach( (key) => {
        myRes[key] = res[key];
      });
      myRes = JSON.stringify(myRes, null, 2);

      res.writeHead(200, {"Content-Type": "text/html"});
      data = data.replace("{{ req }}", myReq);
      data = data.replace("{{ res }}", myRes);
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
