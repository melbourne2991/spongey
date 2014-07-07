directives.directive('postListings', ['postsFactory', '$state', function(spongeFactory, $state) {
	return {
		templateUrl: 'partials/post_listings.html',
		scope: {
			rollingNavigation: '='
		},
		controller: function($scope, $element, $attrs) {
			
		},
		link: function(scope, element, attrs) {

		}
	}
}]);