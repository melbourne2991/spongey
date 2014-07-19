directives.directive('feed', ['feedItemsFactory', '$state', function(feedItemsFactory, $state) {
	return {
		templateUrl: 'templates/partials/feed',
		controller: function($scope, $element, $attrs) {
			feedItemsFactory.getFeedItems(1).then(function(data) {

			});

			$scope.inputs = {
				content: ''
			} 

			$scope.submitInput = function() {
				feedItemsFactory.createFeedItem($scope.inputs);
			}
		},
		link: function(scope, element, attrs) {

		}
	}
}]);