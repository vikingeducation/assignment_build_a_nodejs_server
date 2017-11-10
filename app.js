var http= require('http');
var fs=require('fs');

var port=3000;
var host='localhost';


var server = http.createServer((req, res) => {
  fs.readFile('./public/index.html', 'utf-8', function(err, data){
    if (err){
      res.writeHead(404);
      res.end("File not Found");
    }
    else{
      var reqObj={
        url:req.url,
        method:req.method,
        version:req.httpVersion,
        header:req.headers
      };
      var reqString=JSON.stringify(reqObj, null, 2);
      res.writeHead(200,{
        "Content-Type": "text/html"
      });
      data=data.replace("{{ req }}", reqString);
      var resObj = {
        statusMessage:res.statusMessage,
        statusCode:res.statusCode,
        _header:res._header
      };
      var resString=JSON.stringify(resObj, null, 2);
      data=data.replace("{{ res }}", resString);
      res.end(data);


    }
  });
});

server.listen(port, host, function(){
  console.log(`Server is Running and Listening at http://${ host }:${ port }`);
});