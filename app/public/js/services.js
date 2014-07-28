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
			getFeedItems: function(page, multiplier) {
				page = page || 0;
				multiplier = multiplier || 10;

				console.log(page);
				console.log(multiplier);

				return $http.get('/api/feeditems?page=' + page + '&multiplier=' + multiplier);
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


services.factory('connectionFactory', ['$http', function($http) {
		return {
			createConnection: function(data) {
				var promise = $http.post('/api/connection', {_connectee_id: data}).then(function(results) {
					return results.data;
				}.bind(this));

				return promise;
			},
			getConnections: function(data) {
				var promise = $http.get('/api/connections').then(function(results) {
					this.connections = results.data;
					return results.data;
				}.bind(this));
			},

			connections: false
		}
	}]);