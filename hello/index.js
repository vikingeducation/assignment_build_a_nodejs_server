"use strict";

const express = require("express");
const app = express();
const path = "0.0.0.0";
const port = 8080;

app.get("/", function (request, response) {
    response.send("Hello Viking!");
});

app.listen(port, path, function() {
    console.log(`Server started on ${port} at path ${path} baby`);
});