var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var peoples = new Schema({
    name:{
        type:String
    },
    email:{
        type:String
    }
})

module.exports = mongoose.model('Identitas', peoples);