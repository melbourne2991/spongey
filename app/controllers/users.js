User = require('../models/User');

var UsersController = module.exports = {};

UsersController.getProfiles = function(req, res) {
	User.find({}).select('profile').limit(15).skip(0).sort({created_at: 'asc'}).exec(function(err, profiles) {
		res.json(profiles);
	});
}