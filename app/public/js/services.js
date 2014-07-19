var services = angular.module('app.services', ['ui.router']);

services.factory('spongeFactory', ['$http', function($http) {
		return {
			getSponge: function(slug) {
				return $http.get('/api/sponge/' + slug);
			}
		}
	}]);

services.factory('postFactory', ['$http', function($http) {
		return {
			getPosts: function(sponge) {
				return $http.get('/api/posts?sponge=' + sponge);
			},
			createPost: function(data) {
				return $http.post('/api/post', data);
			}
		}
	}]);

services.factory('feedItemsFactory', ['$http', function($http) {
		return {
			getFeedItems: function(page) {
				return $http.get('/api/feeditems');
			},
			getFeedItem: function(data) {
				return $http.get('/api/feeditem');
			},
			createFeedItem: function(obj) {
				return $http.post('/api/feeditem', obj);
			}
		}
	}]);

services.factory('profileFactory', ['$http', function($http) {
		return {
			getProfiles: function() {
				return $http.get('/api/profiles');
			}
		}
	}]);

services.factory('loginFactory', ['$http', function($http) {
		return {
			postLogin: function(data) {
				var that = this;

				var promise = $http.post('/login', data).then(function(results) {
					that.user = results.data;
					return results;
				});

				return promise;
			},

			user: false
		}
	}]);
