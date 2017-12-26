var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/todolist');
var Schema = mongoose.Schema;

var Todo = new Schema({
    content: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
},{ collection: 'todolist' });

module.exports = Todo;