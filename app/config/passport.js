var passport 		= require('passport');
var LocalStrategy 	= require('passport-local');
var FacebookStrategy = require('passport-facebook');
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

// passport.use(new FacebookStrategy({
// 	clientID: '',
// 	clientSecrete: '',
// 	callbackURL: ''
// }, function(token, refreshToken, profile, done) {
// 	process.nextTick(function() {
// 		User.findOne({'facebook.id': profile.id}, function(err, user) {
// 			if(err)
// 				return done(err);

// 			if(user) {
// 				return done(null, user);
// 			} else {
// 				var user = new User();

// 				user.facebook.id    		= profile.id;
// 				user.facebook.token 		= token;
// 				user.profile.first_name 	= user.facebook.first_name  = profile.name.giveName;
// 				user.profile.last_name 		= user.facebook.last_name  	= profile.name.familyName;
// 				user.profile.email 			=  user.facebook.email 		= profile.emails[0].value;

// 				user.profile.email = user.facebook.email;
// 				user.profile.first_name = user.facebook.first_name;
// 				user.profile.last_name = user.facebook.last_name;

// 				user.save(function(err) {
// 					if(err)
// 						throw err;

// 					return done(null, user);
// 				});
// 			}
// 		});
// 	});
// }));

module.exports = passport;