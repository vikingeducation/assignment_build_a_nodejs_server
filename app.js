"use strict";

const http = require("http");
const fs = require("fs");


const path = "0.0.0.0";
const port = 8080;



const server = http.createServer((req, res) => {
    
    
    fs.readFile("./public/index.html", "utf8", (err, data) => {
        
        if (err) {
            res.writeHead(404);
            res.end("Soz, that file could not be found.");
            
        } else {
            res.writeHead(200, {
            "content-Type" : "text/html"
            });
            let reqForHTML = {};
            reqForHTML.url = req.url;
            reqForHTML.method = req.method;
            reqForHTML.httpVersion = req.httpVersion;
            reqForHTML.headers = req.headers;
            reqForHTML = JSON.stringify(reqForHTML, null, 2);
            
            let resForHTML = {};
            resForHTML.statusCode = res.statusCode;
            resForHTML.statusMessage = res.statusMessage;
            resForHTML._header = res._header;
            resForHTML["Query submitted by login form"] = require("url").parse(req.url, true).query;
            resForHTML = JSON.stringify(resForHTML, null, 2);
            
            
            data = data.replace("{{req}}", reqForHTML);
            data = data.replace("{{res}}", resForHTML);
            
            res.end(data);
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