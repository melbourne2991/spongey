Sponge = require('../models/Sponge');

var SpongesController = module.exports = {}

SpongesController.getSponge = function(req, res) {
	var slug = req.params.slug;

	Sponge.findOne({slug: slug}, function(err, sponge) {
		res.json(sponge);
	});
}