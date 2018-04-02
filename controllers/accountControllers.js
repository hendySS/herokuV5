var mongoose = require('mongoose'),
  People = mongoose.model('Identitas');

  exports.Start = function(req, res){
    var People1 = new People({
        _id: new mongoose.Types.ObjectId(),
        name: "coba1",
        email: "coba1@",
    });
      
      
    People1.save(function(err){
        if(err){
          console.log(err);
        }

        res.sendFile('./index.html', {root: 'public'});
    });
  }