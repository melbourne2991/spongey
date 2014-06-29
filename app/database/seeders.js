var _		= require('lodash');
var Sponge  = require('../models/Sponge');

var subSponges = function(master_sponge) {
	_.forEach(['Technology', 'Art', 'News', 'Politics'], function(sponge_name, i) {
		Sponge.findOne({ 'name': sponge_name}, function(err,  sponge) {
			if(err) return err;

			if(!sponge) {
				sponge = new Sponge({
					name: sponge_name,
					_parent: master_sponge._id
				});

				master_sponge.sponges.push(sponge);
				master_sponge.save();

				sponge.save();
			}
		});
	});
}

module.exports = function() {
	var sponge 

	Sponge.findOne({ 'name': 'Master' }, function(err, master_sponge) {
		if(err) return err;
		
		if(!master_sponge) {
			master_sponge = new Sponge({
				name: 'Master'
			});

			master_sponge.save(function() {
				subSponges(master_sponge);
			});
		} else {
			subSponges(master_sponge);
		}
	});
}
