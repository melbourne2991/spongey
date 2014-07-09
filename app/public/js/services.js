var services = angular.module('app.services', []);

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