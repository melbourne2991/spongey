var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	feedItem: { type: mongoose.Schema.Types.ObjectId, ref: 'FeddItem'},
	_parent_comment:  { type: mongoose.Schema.Types.ObjectId, ref: 'Comment'},
	comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
	user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	content: {type: String, required: true},
	created_at: {type: Date, default: Date.now},
	updated_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Comment', schema);
