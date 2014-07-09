directives.directive('listings', ['postFactory', '$state', function(spongeFactory, $state) {
	return {
		templateUrl: 'templates/partials/listings',
		scope: {
			listings: '='
		},
		controller: function($scope, $element, $attrs) {
			setTimeout(function() {
				console.log($scope.listings)
			}, 5000)
		},
		link: function(scope, element, attrs) {

		}
	}
}]);