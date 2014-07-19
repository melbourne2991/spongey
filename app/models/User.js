var mongoose = require('mongoose');
var bcrypt	 = require('bcrypt');

var schema = new mongoose.Schema({
	email: { type: String, required: true },
	username: { type: String, required: true },
	password: { type: String, required: true },
	connections: {type: Array},
	profile: {
		first_name: { type: String },
		last_name: { type: String },
		location: { type: String },
		skills: { type: Array },
		job_role: { type: String }
	},
	facebook: {
		id: { type: String },
		token: { type: String },
		email: { type: String },
		first_name: { type: String },
		last_name: { type: String }
	},
	created_at: {type: Date, default: Date.now},
	updated_at: {type: Date, default: Date.now}
});

schema.statics.generateHash = function(password) {
	var salt = bcrypt.genSaltSync(10);
	return bcrypt.hashSync(password, salt);
};

schema.methods.validPassword = function(password) {
	var hash = this.password;
	return bcrypt.compareSync(password, hash);
};

module.exports = mongoose.model('User', schema);

