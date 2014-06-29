module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('index', {modules: ['navigation']});
	});

	return app;
}