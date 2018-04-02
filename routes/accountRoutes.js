module.exports = function(app){
    var todoList = require('../controllers/accountControllers');

    app.route('/')
        .get(todoList.Start);
}