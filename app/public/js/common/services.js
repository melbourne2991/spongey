var services = angular.module('commonModule.services', []);

services.factory('spongeFactory', ['$http', function($http) {
		return {
			getSponge: function(slug) {
				return $http.get('/api/sponge/' + slug);
			}
		}
	}]);