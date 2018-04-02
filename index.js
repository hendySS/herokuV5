var express = require("express");
var app = express();
var port = process.env.PORT || 3000;


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + 'public/index.html'));
});

app.listen(port);

console.log("server running in port" + port);