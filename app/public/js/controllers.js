var controllers = angular.module('app.controllers', ['app.services']);

controllers.controller('MainController', ['$scope', '$state', 'spongeFactory', 'postFactory', function($scope, $state, spongeFactory, postFactory) {
	var slug;

	if(!$state.params.path) {
		slug = 'master';
	} else {
		slug = '' + $state.params.path;
	}

	spongeFactory.getSponge(slug).then(function(result) {
		$scope.childSponges = result.data.sponges;

		postFactory.getPosts(result.data._id).then(function(result) {
			console.log(result);
			$scope.posts = result.data;
		});
	});
}]);