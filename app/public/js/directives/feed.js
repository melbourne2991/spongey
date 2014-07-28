directives.directive('feed', ['feedItemsFactory', '$state', function(feedItemsFactory, $state) {
	return {
		templateUrl: 'templates/partials/feed',
		controller: function($scope, $element, $attrs) {
			feedItemsFactory.getFeedItems().then(function(results) {
				$scope.feedItems = results.data;
			});

			$scope.inputs = {
				content: ''
			};
			
			$scope.reply = function(feedItem, replyTo) {
				if(!feedItem.state) feedItem.state =  {};
				if(!feedItem.state.comment) feedItem.state.commenting = false;

				var commentState = feedItem.state.commenting;	
						
				feedItem.state.commenting = commentState ? commentState = false : commentState = true;	
			}

			$scope.submitInput = function() {
				feedItemsFactory.createFeedItem($scope.inputs).then(function(results) {
					if(results.error && results.error === true) {
						$scope.error = {

						};
					} else {
						console.log(results.data);
						$scope.feedItems.push(results.data);
					}
				});
			}
		},
		link: function(scope, element, attrs) {

		}
	}
}]);