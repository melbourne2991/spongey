var directives = angular.module('navigationModule.directives', ['commonModule.services']);

directives.directive('rollingNavigation', ['spongeFactory', function(spongeFactory) {
	return {
		templateUrl: 'partials/rolling_navigation.html',
		scope: {
			currentItems: '='
		},
		controller: function($scope, $element, $attrs) {
			spongeFactory.getSponge('master').then(function(result) {
				$scope.items = result.data.sponges;	
			});
		},
		link: function(scope, element, attrs) {

		}
	}
}]);