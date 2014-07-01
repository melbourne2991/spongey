directives.directive('rollingNavigation', ['spongeFactory', '$state', function(spongeFactory, $state) {
	return {
		templateUrl: 'partials/rolling_navigation.html',
		scope: {
			rollingNavigation: '='
		},
		controller: function($scope, $element, $attrs) {
			
		},
		link: function(scope, element, attrs) {

		}
	}
}]);