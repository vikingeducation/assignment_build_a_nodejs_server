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
            res.end(data);
        }
    });

});


server.listen(port, path, function() {
    console.log(`Server listening at ${path}:${port}. URL is https://vikingcodeschoolworkspace-rttomlinson.c9users.io/`);
});