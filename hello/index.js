"use strict";

const express = require("express");
const app = express();
const path = "0.0.0.0";
const port = 8080;
app.set("view engine", "hbs");

app.use(function (request, response, next) {
    console.log(request.url + "-" + new Date());
    next();
})


app.get("/names/:name", function (request, response) {
    const name = request.params.name;
    response.render(`hello.hbs`, { "name" : name });
});


app.get("/", function (request, response) {
    response.render("hello.hbs", { "name": "Viking"}); //Set default value to Viking, all values need to be a string. Does HBS attempt to turn everything into a string?
});


app.listen(process.env.PORT || port, function() {
    console.log(`Server started on ${port} at path ???`);
});