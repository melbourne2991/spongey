Sponge = require('../models/Sponge');

var SpongesController = module.exports = {}

SpongesController.getSponge = function(req, res) {
	var permalink = req.param(0);

	Sponge.findOne({permalink: permalink}).populate('sponges').exec(function(err, sponge) {
		if(err) console.log(err);
		res.json(sponge);
	});
}

SpongesController.createSponge = function(req, res) {
	var name   = req.body.name
		parent = req.body._parent;
		
	var	sponge = new Sponge({
			name: name,
			_parent: parent
		});

	sponge.save(function(err) {
		if(err.errors) {
			res.json(errors);
			return;
		} else if(err) {
			console.log(err);
			return;
		}

		res.json({success: true});
	});
}