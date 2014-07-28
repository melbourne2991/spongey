var FeedItem = require('../models/FeedItem');
var mongoose = require('mongoose');

var FeedItemsController = module.exports = {};

FeedItemsController.createFeedItem = function(req, res) {
	var feed_item = new FeedItem({
		user: mongoose.Types.ObjectId(req.user._id),
		content: req.body.content
	});

	feed_item.save(function(err) {
		if(err) {
			res.json(err);
		} else {
			FeedItem.findById(feed_item._id, 'user content created_at updated_at')
				.populate('user')
				.exec(function(err, results) {
					if (err) console.log(err);
					res.json(results)
				});
		}
	});
}

FeedItemsController.getFeedItems = function(req, res) {
	var limit = req.query.multiplier,
		skip  = req.query.page * limit;

	FeedItem.find({})
		.select('user content created_at')
		.limit(limit)
		.skip(skip)
		.populate('user')
		.sort({created_at: 'desc'})
		.exec(function(err, feed_items) {
			res.json(feed_items);
		});
}

FeedItemsController.getFeedItem = function(req, res) {

}