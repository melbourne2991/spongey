directives.directive('feed', ['feedItemsFactory', '$state', function(feedItemsFactory, $state) {
	return {
		templateUrl: 'templates/partials/feed',
		controller: function($scope, $element, $attrs) {
			feedItemsFactory.getFeedItems().then(function(results) {
				$scope.feedItems = results.data;
				console.log(results.data);
			});

			$scope.inputs = {
				content: ''
			} 

			$scope.submitInput = function() {
				feedItemsFactory.createFeedItem($scope.inputs).then(function(results) {
					if(results.error === true) {
						$scope.error = {

						};
					} else {

					}
				});
			}
		},
		link: function(scope, element, attrs) {

		}
	}
}]);