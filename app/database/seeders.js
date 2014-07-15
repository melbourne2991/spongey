var _		= require('lodash');
var Sponge  = require('../models/Sponge');
var Post    = require('../models/Post');
var User 	= require('../models/User');
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

var buildPosts = function() {
	var titles = ['Old man with a mustache hugging a world cup while watching Brasil lose', 'Ohio firefighter invents a device that can be quickly deployed in a classroom, even by students, that will barricade the classroom door from an armed invader', 'Wow such elegance', 'If 7 billion competed in a single elimination rock paper scissor tournament, the winner would have only won 33 times in a row.']

	Sponge.find({}).exec(function(err, sponges) {
		_.forEach(sponges, function(sponge, i) {
			_.forEach(titles, function(title, i) {
				var post = new Post({
					title: title,
					content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. fusce magna risus, hendrerit viverra diam nec, faucibus pulvinar velit. suspendisse ut metus dolor. nullam bibendum condimentum nunc, a hendrerit sem lacinia suscipit. in vestibulum sagittis ligula ac vestibulum. nunc gravida elit eu posuere imperdiet. donec turpis odio, hendrerit quis risus a, ultrices consequat arcu. fusce facilisis lorem quis justo viverra facilisis. aliquam ullamcorper pulvinar sapien ac porttitor. nullam sit amet pellentesque metus. fusce fringilla, diam ac vehicula imperdiet, metus nisi pulvinar urna, eu fringilla ante sapien nec neque. nulla vitae mi sed est tempor eleifend quis ac urna. vivamus nec sapien nec turpis pharetra venenatis a a leo.',
					_parent: sponge
				});

				post.save(function(err) {
					if(err) throw err;
				})
			});
		});
	});
}

var buildUsers = function() {
	var seed_names = ['Jim', 'Joe', 'Freddy', 'Miguel', 'Pistachio', 'Brent', 'Tory', 'Rohan', 'Billy', 'Simba', 'Porcupine', 'Flumrail', 'Trent', 'Punch', 'Normal', 'Queldor', 'Frederson', 'Jimlon', 'Pondon', 'Shewp', 'Sugglar', 'Friedrick', 'Spoonson', 'Shubalaba', 'Skulljit', 'AssMan', 'Shiej', 'Sudda', 'Sugar', 'Bailey', 'Soothire', 'Oberdawg'];
	var seed_locations = ['Melbourne, Australia', 'Izzuzu, China', 'Rome, Italy', 'Paris, France', 'Gonzberg, Prushia', 'Ickmael, Arabia', 'London, UK', 'New York, USA', 'Washington, USA'];
	var seed_interests = ['Art', 'Design', 'Artificial Intelligence', 'Programming', 'UX Design', 'UI Design', 'Skiiing', 'Kayaking', 'Metalworks', 'Marketing', 'Gaming', 'Reading', 'Movies'];
	var seed_specialisations = ['Designer', 'Developer', 'Marketer', 'Big Data Scientist', 'Entrepreneur'];

	for(var i = 0; i < 20; i++) {
		var random = function(array) { return Math.floor(Math.random() * array.length); };
		var first_name 	= seed_names[random(seed_names)];
		var last_name 	= seed_names[random(seed_names)];
		var specialisations = [];

		var rnd = Math.floor(Math.random() * 3);

		for(var c = rnd; c < 3; c++) {
			var addSpecialisation = function() {
				var specialisation_to_add = seed_specialisations[random(seed_specialisations)];
				var exists = false;

				_.forEach(specialisations, function(specialisation, index) {
					if(specialisation === specialisation_to_add) {
						exists = false
					} 
				});

				if(!exists) {
					specialisations.push(specialisation_to_add);
				} else {
					addSpecialisation();
				}
			}

			addSpecialisation();
		}

		var user = new User({
			email: last_name + first_name + random(seed_names) + '@gmail.com',
			username: last_name + random(seed_names) + first_name,
			password: random(seed_names) + 'kdjs',
			profile: {
				first_name: first_name,
				last_name: last_name,
				location: seed_locations[random(seed_locations)],
				skills: specialisations,
				interests: [
					seed_interests[random(seed_interests)],
					seed_interests[random(seed_interests)],
					seed_interests[random(seed_interests)]
				]
			}
		});

		user.save(function(err) {
			if(err) console.log(err);
		});
	}
}

module.exports = function() {
	mongoose.connection.collections['sponges'].drop(function(err) {
		buildSponges(sponge_seed, false, 0);
	});

	mongoose.connection.collections['posts'].drop(function(err) {
		setTimeout(buildPosts, 4000);
	});

	mongoose.connection.collections['users'].drop(function(err) {
		buildUsers();
	});
};
