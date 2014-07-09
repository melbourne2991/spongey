mongoose = require('mongoose');
Post = require('../models/Post');

var PostsController = module.exports = {}

PostsController.getPosts = function(req, res) {
	var obj = {_parent:  mongoose.Types.ObjectId(req.query.sponge)};

	Post.find(obj).select('title created_at content').limit(15).skip(0).sort({created_at: 'asc'}).exec(function(err, posts) {
		res.json(posts);
	});
}

PostsController.getPost = function(req, res) {
	var permalink = req.param(0);

	Post.findOne({permalink: permalink}).populate('sponges').exec(function(err, sponge) {
		if(err) console.log(err);
		res.json(sponge);
	});
}

PostsController.createPost = function(req, res) {
	var	post = new Post({
		title: req.body.title,
		content: req.body.content,
		_parent: mongoose.Types.ObjectId(req.body._parent)
	});

	console.log(req.body);

	post.save(function(err) {
		if(err && err.errors) {
			res.json(err.errors);
			return;
		} else if(err) {
			console.log(err);
			return;
		}

		res.json(post);
	});
}