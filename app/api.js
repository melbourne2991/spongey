var SpongesController = require('./controllers/sponges');

module.exports = function(express) {
	var api = express.Router();

	api.get('/sponge/*', SpongesController.getSponge);
	api.post('/sponge', SpongesController.createSponge);
	
	return api;
}