var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var LikesFromSchema = new Schema({
	'username' : String,
	'messageId' : String
});

module.exports = mongoose.model('LikesFrom', LikesFromSchema);
