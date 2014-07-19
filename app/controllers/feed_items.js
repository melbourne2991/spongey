var FeedItem = require('../models/FeedItem');

var FeedItemsController = module.exports = {};

FeedItemsController.createFeedItem = function(req, res) {
	console.log('req body coming up');
	console.log(req.body);

	var feed_item = new FeedItem({
		user: req.user,
		content: req.body.content
	});

	feed_item.save();
}

FeedItemsController.getFeedItems = function(req, res) {
	FeedItem.find(function(items) {
		res.send(items);
	});
}

FeedItemsController.getFeedItem = function(req, res) {
	res.send('hello yes coon');
}