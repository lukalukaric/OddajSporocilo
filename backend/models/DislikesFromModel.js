var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var DislikesFromSchema = new Schema({
	'username' : String,
	'messageId' : String
});

module.exports = mongoose.model('DislikesFrom', DislikesFromSchema);
