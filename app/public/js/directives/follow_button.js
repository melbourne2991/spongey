directives.directive('followButton', ['connectionFactory', '$state', function(connectionFactory, $state) {
	return {
		template: 	  '<div class="green follow button" data-ng-click="createConnection()">'
					+ '<span class="plus">+</span><span class="text">Follow</span>'
					+ '</div>',
		scope: {
			followButton: '='
		},
		transclude: true,
		controller: function($scope, $element, $attrs) {
			var connection_id = $scope.followButton;

			$scope.createConnection = function() {
				connectionFactory.createConnection(connection_id);
			}	
		},
		link: function(scope, element, attrs) {

		}
	}
}]);