var mongoose = require('mongoose');
var TodoSchema = require('../schemas/todo');
var TodoBox = mongoose.model('TodeBox',TodoSchema);

module.exports = TodoBox;
