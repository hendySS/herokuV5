var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.get("/", function(req, res){
    res.send("welcome to nodejs in heroku ! ");
});

app.listen(port);

console.log("server running in port" + port);