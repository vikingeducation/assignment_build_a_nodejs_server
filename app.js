"use strict";

const http = require("http");
const fs = require("fs");


const path = "0.0.0.0";
const port = 8080;



const server = http.createServer((req, res) => {
    
    if (req.method == 'POST') {
        var p = new Promise(function(resolve, reject) {
            let body = [];
            req.on("data", function (chunk) {
                body.push(chunk);
            }).on("end", function() {
                body = Buffer.concat(body).toString();
                resolve(body);
            }).on("error", function (error) {
                reject(error.stack);
            });
        });
    }
    let reqForHTML = {};
    let resForHTML = {};
    fs.readFile("./public/index.html", "utf8", (err, data) => {
        
        if (err) {
            res.writeHead(404);
            res.end("Soz, that file could not be found.");
            
        } else {
            res.writeHead(200, {
            "content-Type" : "text/html"
            });
            reqForHTML.url = req.url;
            reqForHTML.method = req.method;
            reqForHTML.httpVersion = req.httpVersion;
            reqForHTML.headers = req.headers;
            
            resForHTML.statusCode = res.statusCode;
            resForHTML.statusMessage = res.statusMessage;
            resForHTML._header = res._header;
            resForHTML["Query submitted by login form"] = require("url").parse(req.url, true).query; //Can also use the queryString module's .parse method
            
            
            if (req.method == "GET") {
                reqForHTML = JSON.stringify(reqForHTML, null, 2);
                resForHTML = JSON.stringify(resForHTML, null, 2);
                data = data.replace("{{req}}", reqForHTML);
                data = data.replace("{{res}}", resForHTML);
                res.end(data);
            } else if (req.method == "POST") {
                p.then(function onFulfilled(body) {
                    reqForHTML.body = body;
                    reqForHTML = JSON.stringify(reqForHTML, null, 2);
                    resForHTML = JSON.stringify(resForHTML, null, 2);
                    data = data.replace("{{req}}", reqForHTML);
                    data = data.replace("{{res}}", resForHTML);
                    res.end(data);
                });
            }


            
            
        }
    });

});


server.listen(port, path, function() {
    console.log(`Server listening at ${path}:${port}. URL is https://vikingcodeschoolworkspace-rttomlinson.c9users.io/`);
});



/*emitter.on("close", (data) => {
    if buffer {
        buffer.toString();
    }
})

/*req.on("end", (data) => {
    if buffer {
        buffer.toString();
    }
})

req.on("data", (data) => {
    get a piece of the buffer
});



*/