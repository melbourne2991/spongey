var FeedItem = require('../models/FeedItem');

var FeedItemsController = module.exports = {};

FeedItemsController.createFeedItem = function(req, res) {
	var feed_item = new FeedItem({
		user: req.user,
		content: req.body.content
	});

	feed_item.save(function(err) {
		err ? res.json(err.errors) : res.json(true);
	});
}

FeedItemsController.getFeedItems = function(req, res) {
	FeedItem.find(function(items) {
		res.send(items);
	});
}

FeedItemsController.getFeedItem = function(req, res) {
	res.send('hello yes coon');
}