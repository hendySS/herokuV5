var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

var mongoose = require("mongoose");
var bodyParse = require("body-parser");
var User = require('./models/account');

var path = require("path");

//mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://List:12345@ds227459.mlab.com:27459/tes');

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + 'public/index.html'));
});

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended : false}));
//app.use(session({secret:"kajsdkasjdhaskjshsdf", resave:false, saveUninitialized:true}));

var routes = require('./routes/accountRoute');

routes(app);

app.listen(port);

console.log("server running in port" + port);