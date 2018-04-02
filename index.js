var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');

var People = require('./models/accountModels');

var bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Coba');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./routes/accountRoutes'); //importing route

routes(app); //register the route

/*app.get('/', function(req, res){
    res.send("Online with heroku");
});*/

app.listen(port);

console.log("server running in port " + port);