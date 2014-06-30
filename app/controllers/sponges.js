Sponge = require('../models/Sponge');

var SpongesController = module.exports = {}

SpongesController.getSponge = function(req, res) {
	var slug = req.params.slug;

	Sponge.findOne({slug: slug}).populate('sponges').exec(function(err, sponge) {
		if(err) console.log(err);
		res.json(sponge);
	});
}