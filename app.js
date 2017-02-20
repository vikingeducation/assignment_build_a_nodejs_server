"use strict";

const http = require("http");
const path = "0.0.0.0";
const port = 8080;



const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "content-Type" : "text/plain"
    });
    res.end("You got it");
});


server.listen(port, path, function() {
    console.log(`Server listening at ${path}:${port}. URL is https://vikingcodeschoolworkspace-rttomlinson.c9users.io/`);
});