directives.directive('rollingNavigation', ['spongeFactory', function(spongeFactory) {
	return {
		templateUrl: 'partials/rolling_navigation.html',
		scope: {
			currentItems: '='
		},
		controller: function($scope, $element, $attrs) {
			spongeFactory.getSponge('master').then(function(result) {
				$scope.item_lists = [];
				$scope.item_lists.push(result.data.sponges);
				$scope.current_items = 0;
			});

			$scope.nextMenu = function() {

			}
		},
		link: function(scope, element, attrs) {

		}
	}
}]);