directives.directive('loginDirective', ['loginFactory', '$state', function(loginFactory, $state) {
	return {
		templateUrl: 'templates/partials/login_directive',
		controller: function($scope, $element, $attrs) {
			$scope.user = {
				username: '',
				password: ''
			}

			$scope.login = function() {
				loginFactory.postLogin($scope.user).then(function(results) {
					if(loginFactory.user) $state.go('default');
				});
			}
		},
		link: function(scope, element, attrs) {

		}
	}
}]);