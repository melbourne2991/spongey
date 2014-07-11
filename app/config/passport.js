var passport 		= require('passport');
var LocalStrategy 	= require('passport-local');
var User 			= require('../models/User');

passport.use(new LocalStrategy(function(username, password, done) {
	User.findOne({ username: username}, function(err, user) {
		if(err) return done(err);

		if(!user) {
			return done(null, false, { message: 'Could not find a user with that username'});
		}

		if(user.validPassword(password)) {
			return done(null, user);
		} else {
			return done(null, false, { message: 'Incorrect Password' });
		}
	});
}));

module.exports = passport;