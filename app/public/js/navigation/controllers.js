var controllers = angular.module('navigationModule.controllers', ['commonModule.services']);

controllers.controller('navigationController', ['$scope', 'spongeFactory', function($scope, spongeFactory) {
	spongeFactory.getSponge('master').then(function(result) {
		$scope.navItems = result.data.sponges;	
	});
}]);