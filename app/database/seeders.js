var _		= require('lodash');
var Sponge  = require('../models/Sponge');
var mongoose 	= require('mongoose');

var buildSponges = function(seeder, count, parent) {
	var seed = seeder[count];
	var sponge = new Sponge({
		name = seed.name
	})

	if(seed.children && parent) {
		sponge.children = [];
		sponge.parent = parent._id;
		buildSponges(seed.children, 0, sponge);
	} else if ()
}

// var saveAndCall = function(sponge, seed, parent, count) {
// 	count++;
// 	console.log(count);
// 	sponge.save(function() {
// 		buildSponges(seed, sponge, count);
// 	});
// }

// var buildSponges = function(seeders, parent, count) {

// 	if(seeders[count]) {
// 		seed = seeders[count];
// 	} else {
// 		count = 0;
// 		seeders = seed.children[count];

// 		if(!seed.children[count]) {
// 			return;
// 		}
// 	}

// 	seed = seeders[count];

// 	if(parent) {
// 		sponge = new Sponge({
// 			name: seed.name,
// 			parent: parent._id,
// 			sponges: []
// 		});

// 		parent.sponges.push(sponge);
// 		parent.save(function() {
// 			saveAndCall(sponge, seed, parent, count);
// 		});
// 	} else {
// 		sponge = new Sponge({
// 			name: seed.name,
// 			sponges: []
// 		});

// 		saveAndCall(sponge, seed, parent, count);
// 	}
// };

var sponge_seed =  [{
	name: 'master',
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




// var subSponges = function(master_sponge) {
// 	_.forEach(['Technology', 'Art', 'News', 'Politics'], function(sponge_name, i) {
// 		Sponge.findOne({ 'name': sponge_name}, function(err,  sponge) {
// 			if(err) return err;

// 			if(!sponge) {
// 				sponge = new Sponge({
// 					name: sponge_name,
// 					_parent: master_sponge._id
// 				});

// 				master_sponge.sponges.push(sponge);
// 				master_sponge.save();

// 				sponge.save();
// 			}
// 		});
// 	});
// }



// module.exports = function() {
// 	var sponge 

// 	Sponge.findOne({ 'name': 'Master' }, function(err, master_sponge) {
// 		if(err) return err;
		
// 		if(!master_sponge) {
// 			master_sponge = new Sponge({
// 				name: 'Master'
// 			});

// 			master_sponge.save(function() {
// 				subSponges(master_sponge);
// 			});
// 		} else {
// 			subSponges(master_sponge);
// 		}
// 	});
// }
