module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('index', {modules: ['navigation']});
	});

	app.get('/templates/*', function(req, res) {
		res.render('templates/' + req.params[0]);
	});

	return app;
}