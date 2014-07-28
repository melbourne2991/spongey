var Comment = require('../models/Comment');
var mongoose = require('mongoose');

var CommentsController = module.exports = {};

CommentsController.createComment = function(req, res) {
	var comment = new Comment({
		user: mongoose.Types.ObjectId(req.user._id),
		content: req.body.content
	});

	comment.save(function(err) {
		err ? res.json(err) : res.json(comment);

		if(err) {
			res.json(err);
		} else {
			comment.user = req.user;
			res.json(user);
		}
	});
}

CommentsController.getComments = function(req, res) {
	var limit = req.query.multiplier,
		skip  = req.query.page * limit;

	Comment.find({})
		.select('user content created_at')
		.limit(limit)
		.skip(skip)
		.populate('user')
		.sort({created_at: 'desc'})
		.exec(function(err, comments) {
			res.json(comments);
		});
}

CommentsController.getComment = function(req, res) {

}