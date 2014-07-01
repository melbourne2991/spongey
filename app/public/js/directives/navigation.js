directives.directive('rollingNavigation', ['spongeFactory', '$state', function(spongeFactory, $state) {
	return {
		templateUrl: 'partials/rolling_navigation.html',
		scope: {
			currentItems: '='
		},
		controller: function($scope, $element, $attrs) {
			if(!$state.params.path) {	
				spongeFactory.getSponge('master').then(function(result) {
					$scope.item_lists = [];
					$scope.item_lists.push(result.data.sponges);

					console.log($scope.item_lists);
					$scope.current_items = 0;
				});
			} else {
				spongeFactory.getSponge($state.params.path).then(function(result) {
					$scope.item_lists = [];
					$scope.item_lists.push(result.data.sponges);

					console.log($scope.item_lists);
					$scope.current_items = 0;
				});
			}

			$scope.changeState = function(slug) {
				$state.transitionTo('sponge', {path: slug})			}
		},
		link: function(scope, element, attrs) {

		}
	}
}]);