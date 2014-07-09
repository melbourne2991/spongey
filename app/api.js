var SpongesController = require('./controllers/sponges');
var PostsController = require('./controllers/posts')

module.exports = function(express) {
	var api = express.Router();

	api.get('/sponge/*', SpongesController.getSponge);
	api.post('/sponge', SpongesController.createSponge);

	api.get('/posts', PostsController.getPosts);
	api.post('/post', PostsController.createPost)
	
	return api;
}