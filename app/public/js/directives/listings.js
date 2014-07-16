directives.directive('profileListings', ['profileFactory', '$state', function(profileFactory, $state) {
	return {
		templateUrl: 'templates/partials/profile_listings',
		controller: function($scope, $element, $attrs) {
			profileFactory.getProfiles().then(function(result) {
				var profiles = result.data;

				// Merge skills into string
				_.forEach(profiles, function(item, i) {
					var skills_string = '';

					_.forEach(item.profile.skills, function(skill, i) {
						i === 0 ? skills_string = skill : skills_string = skills_string + ', ' + skill;
					});

					item.profile.skills = skills_string;
					console.log(skills_string);
				});

				// Create grid array
				var profile_grid = [];

				// Divide by 4
				var splicer = function() {
					profile_grid.push(profiles.splice(0, 2));
					if(profiles.length > 0) splicer();
				}

				splicer();

				$scope.profile_grid = profile_grid;
			});
		},
		link: function(scope, element, attrs) {

		}
	}
}]);