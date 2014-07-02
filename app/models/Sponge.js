var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	name: {type: String, required: true},
	created_at: {type: Date, default: Date.now},
	updated_at: {type: Date, default: Date.now},
	_parent: {type: mongoose.Schema.Types.ObjectId, ref: 'Sponge'},
	sponges: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Sponge' }],
	slug: {type: String},
	permalink: {type: String}
});

var convertToSlug = function(that) {
	if(!that.slug) {
		that.slug = that.name.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
	}
};

var buildPermalink = function(that, next) {
	mongoose.model('Sponge', schema).findOne({ _id: that._parent }, function(err, parent) {
		if(parent) {
			that.permalink = parent.permalink + '/' + that.slug;
		} else if(!that.permalink) {
			that.permalink = that.slug;
		}

		next();
	});
};

var updateTimestamps = function(that) {
	that.updated_at = new Date();

	if(!that.created_at) {
		that.created_at = that.updated_at;
	}

	that.slug = this.name
};

schema.pre('save', function (next) {
	updateTimestamps(this);
	convertToSlug(this);
	buildPermalink(this, next);
});



module.exports = mongoose.model('Sponge', schema);
