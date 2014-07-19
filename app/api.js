var SpongesController = require('./controllers/sponges');
var PostsController = require('./controllers/posts');
var UsersController = require('./controllers/users');
var FeedItemsController = require('./controllers/feed_items');
var authenticate = require('./authenticate');

module.exports = function(express) {
	var api = express.Router();

	api.get('/sponge/*', SpongesController.getSponge);
	api.post('/sponge', SpongesController.createSponge);

	// posts
	api.get('/posts', PostsController.getPosts);
	api.post('/post', PostsController.createPost);

	// profiles
	api.get('/profiles', UsersController.getProfiles);

	// feed items
	api.get('/feeditem', authenticate, FeedItemsController.getFeedItem);
	api.get('/feeditems', authenticate, FeedItemsController.getFeedItems);
	
	api.post('/feeditem', authenticate, FeedItemsController.createFeedItem)

	return api;
}