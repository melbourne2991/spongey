directives.directive('profileListings', ['profileFactory', '$state', function(profileFactory, $state) {
	return {
		templateUrl: 'templates/partials/profile_listings',
		controller: function($scope, $element, $attrs) {
			profileFactory.getProfiles().then(function(result) {
				var profiles = result.data;
				var profile_grid = [];

				var splicer = function() {
					profile_grid.push(profiles.splice(0, 2));
					if(profiles.length > 0) splicer();
				}

				splicer();

				$scope.profile_grid = profile_grid;

				console.log(profile_grid);
			});
		},
		link: function(scope, element, attrs) {

		}
	}
}]);