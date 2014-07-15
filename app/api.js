var SpongesController = require('./controllers/sponges');
var PostsController = require('./controllers/posts');
var UsersController = require('./controllers/users')

module.exports = function(express) {
	var api = express.Router();

	api.get('/sponge/*', SpongesController.getSponge);
	api.post('/sponge', SpongesController.createSponge);

	api.get('/posts', PostsController.getPosts);
	api.post('/post', PostsController.createPost);

	api.get('/profiles', UsersController.getProfiles)
	
	return api;
}