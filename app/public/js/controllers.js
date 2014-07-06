var controllers = angular.module('app.controllers', ['app.services']);

controllers.controller('SpongeController', ['$scope', '$state', 'spongeFactory', function($scope, $state, spongeFactory) {
	var slug;

	if(!$state.params.path) {
		slug = 'master';
	} else {
		slug = '' + $state.params.path;
	}

	spongeFactory.getSponge(slug).then(function(result) {
		$scope.childSponges = result.data.sponges;
	});
}]);