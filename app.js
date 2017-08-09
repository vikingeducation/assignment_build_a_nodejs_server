var http = require("http");
var fs = require("fs");
var filePath = "./public/index.html";

var port = 3000;
var host = 'localhost';

var replacePreWith = function (req, res, data){
  var reqPropertiesToFilter = ["url", "method", "httpVersion", "headers"];
  var resPropertiesToFilter = ["statusMessage", "statusCode", "_header"];
  var reqPropertiesValues = {};
  var resPropertiesValues = {};
  var jsonStringReqValues;
  var jsonStringResValues;

  for (var i = 0; i< reqPropertiesToFilter.length; i++) {
    reqPropertiesValues[reqPropertiesToFilter[i]] = req[reqPropertiesToFilter[i]];
  }
  for (var i = 0; i< resPropertiesToFilter.length; i++) {
    resPropertiesValues[resPropertiesToFilter[i]] =res[resPropertiesToFilter[i]];
  }

  jsonStringReqValues = JSON.stringify(reqPropertiesValues, null, 2);
  jsonStringResValues = JSON.stringify(resPropertiesValues, null, 2);

  data = data.replace(/{{ req }}/i, jsonStringReqValues);
  data = data.replace(/{{ res }}/i, jsonStringResValues);

  return data;
};

var server = http.createServer (function(req,res){
  fs.readFile(filePath, 'utf8', function (err,data){
    if (err){

    }
    else {
      res.writeHead(200,{
        "Content-Type": "text/html"
      });
      res.end(replacePreWith( req, res, data));
    }
  });
});

server.listen(port, host, function() {
  console.log(`Listening at http://${ host }:${ port }`);

});
