var _		= require('lodash');
var Sponge  = require('../models/Sponge');
var mongoose 	= require('mongoose');

var buildSponges = function(seeder, count, parent) {
	if(!count) {
		var count = 0
	}

	if(!seeder[count]) {
		return;
	}

	var seed = seeder[count];

	var sponge = new Sponge({
		name: seed.name
	});

	// console.log(seed.name);

	if(seed.children && parent) {
		sponge.children = [];
		sponge.parent = parent._id;

		sponge.save(function() {
			parent.sponges.push(sponge);
			parent.save(function() {
				buildSponges(seed.children, 0, sponge);
			});
		})
	} else if (seed.children && !parent) {
		sponge.children = [];

		if(seed.is_master) {
			sponge.is_master = true;
		}

		sponge.save(function() {
			buildSponges(seed.children, 0, sponge);
		})	
	} else if (parent && !seed.children) {
		sponge.parent = parent._id;

		sponge.save(function() {
			parent.sponges.push(sponge);
			parent.save(function() {
				buildSponges(seed.children, 0, sponge);
			});
		});
	}

	count++

	buildSponges(seeder, count, parent);
}

var sponge_seed =  [{
	name: 'master',
	is_master: true,
	children: 	
		[
			{
				name: 'technology', 
				children: [{name: 'programming', children: false}]
			},
			{
				name: 'art',
				children: [{name: 'monet', children: false}]
			},
			{
				name: 'news',
				children: [{name: 'asia', children: false }, {name: 'economics', children:false}]
			},
			{
				name: 'politics',
				children: [{name: 'domestic', children: false }, {name: 'international', children: false}]
			}
		]
}];

module.exports = function() {
	mongoose.connection.collections['sponges'].drop(function(err) {
		buildSponges(sponge_seed, false, 0);
	})
};
