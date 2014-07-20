var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	content: {type: String, required: true},
	created_at: {type: Date, default: Date.now},
	updated_at: {type: Date, default: Date.now},
});

module.exports = mongoose.model('FeedItem', schema);
