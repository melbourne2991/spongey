directives.directive('loginDirective', ['loginFactory', '$state', function(loginFactory, $state) {
	return {
		templateUrl: 'templates/partials/login_directive',
		controller: function($scope, $element, $attrs) {
			var user = $scope.user = {
				username: '',
				password: ''
			};

			var errors = $scope.errors = {};

			var setError = function(key, value, errors) {
				typeof key === 'object' ? errors = key : errors[key] = value;
			}

			$scope.login = function() {
				errors = $scope.errors = {};

				if (user.username != '' && user.password != '') {
					loginFactory.postLogin($scope.user).then(function(results) {
						if(loginFactory.user && !loginFactory.user.error) {
							$state.go('default');
						} else if(loginFactory.user.error) {
							setError('username', loginFactory.user.error, errors);
							console.log($scope.errors);
						}
					});
				} else if(user.username === '' && user.password === '') {
					setError('username', 'Username Required', errors);
					setError('password', 'Password Required', errors);
				} else if(user.username === '') {
					setError('username', 'Username Required', true, errors);
				} else if(user.password === '') {
					setError('password', 'Password Required', errors);
				}
			}
		},
		link: function(scope, element, attrs) {

		}
	}
}]);