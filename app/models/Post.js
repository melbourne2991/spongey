var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	title: {type: String, required: true},
	content: {type: String, required: true},
	created_at: {type: Date, default: Date.now},
	updated_at: {type: Date, default: Date.now},
	_content_type: {type: mongoose.Schema.Types.ObjectId, ref: 'ContentType'},
	_parent: {type: mongoose.Schema.Types.ObjectId, ref: 'Sponge'},
});

module.exports = mongoose.model('Post', schema);

var updateTimestamps = function(that) {
	that.updated_at = new Date();

	if(!that.created_at) {
		that.created_at = that.updated_at;
	}
}

schema.pre('save', function (next) {
	updateTimestamps(this);
	next();
});