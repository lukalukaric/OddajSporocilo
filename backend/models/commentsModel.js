var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var commentsSchema = new Schema({
	'comment' : String,
	'username' : String,
	'idMessage' : String
});

module.exports = mongoose.model('comments', commentsSchema);
