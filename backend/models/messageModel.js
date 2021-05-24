var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var messageSchema = new Schema({
	'text' : String,
	'path' : String,
	'likes': Number,
	'dislikes' : Number,
	'views' : Number,
	'time': Date,
	'author' : String
});

module.exports = mongoose.model('message', messageSchema);
