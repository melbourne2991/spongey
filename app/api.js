var SpongesController = require('./controllers/sponges');

module.exports = function(express) {
	var api = express.Router();

	api.get('/sponge/:slug', SpongesController.getSponge);

	return api;
}