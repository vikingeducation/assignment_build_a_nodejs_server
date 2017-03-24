const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  fs.readFile('./public/index.html', 'utf8', (err, data) => {
    if (err) {
      res.writeHead(404, {
        'Content-Type': "text/plain"
      });
      res.end("404 File Not Found");
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      let { url, method, httpVersion, headers } = req;
      let my_req = { url: url, method: method, httpVersion: httpVersion, headers: headers };
      // var my_req = {};
      // var req_array = ["url", "method", "httpVersion", "headers"];
      // req_array.forEach(function(key) {
      //   my_req[key] = req[key];
      // });
      let { statusMessage, statusCode, _header } = res;
      let my_res = { statusMessage: statusMessage, statusCode: statusCode, _header: _header};
      // var my_res = {};
      // var res_array = ["statusMessage", "statusCode", "_header"];
      // res_array.forEach(function(key) {
      //   my_res[key] = res[key];
      // });
      res.end(data.replace("{{ req }}", JSON.stringify(my_req, null, 2)).replace("{{ res }}", JSON.stringify(my_res, null, 2)));
    }
  });
});

server.listen(port, hostname, function() {
  console.log(`listening at http://${ hostname }:${ port }`);
});
