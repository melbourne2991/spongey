var User = require('./models/User');

module.exports = function(app, passport) {
	app.get('/', function(req, res, next) {
		console.log('---here is the user---');
		console.log(req.user);
		next();
	}, function(req, res) {
		res.render('index', {modules: ['navigation']});
	});

	app.get('/templates/*', function(req, res) {
		res.render('templates/' + req.params[0]);
	});

	app.post('/uploader', function(req, res) {

	});

	app.post('/user', function(req, res, next) {
		var data 			  = req.body;
		var unhashed_password = data.password;

		data.password = User.generateHash(unhashed_password);

		var user = new User(data);

		user.save(function(err) {
			if(err) {
				console.log(err);
			} else {
				res.send('user saved!');
			}
		});
	});

	app.post('/login', function(req, res, next) {
		passport.authenticate('local', { session: true }, function(err, user, info) {
			if(!user) {
				res.json(info);
			} else {
				req.logIn(user, function(err) {
					if(err) res.send(err);
					res.send(user);
				});
			}
		})(req, res, next);
	});

	return app;
}