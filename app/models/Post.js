var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	title: {type: String, required: true},
	content: {type: Text, required: true},
	created_at: {type: Date, default: Date.now},
	updated_at: {type: Date, default: Date.now},
	_content_type: {type: mongoose.Schema.Types.ObjectId, ref: 'ContentType'},
	_parent: {type: mongoose.Schema.Types.ObjectId, ref: 'Sponge'},
});

module.exports = mongoose.model('Post', schema);
