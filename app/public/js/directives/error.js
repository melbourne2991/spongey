// directives.directive('errorView', ['$state', function($state) {
// 	return {
// 		scope: {
// 			errorView: '@',
// 		},
// 		template: 	function(element, scope) {
// 			var element = jQuery(element);
// 			var template = '<span data-ng-class="errClass">{{ errMsg }}</span>';

// 			return element.is('input') ? false : template;
// 		},
// 		controller: function($scope, $element, $attrs) {
// 			var errObj 	= $scope.errorView;
// 			var el 		 	= jQuery($element);

// 			try {
// 				var errObj = jQuery.parseJSON(errObj);
// 			} catch(err) {
// 				if(typeof errObj === 'string') {
// 					$scope.message = errObj;
// 				} else {
// 					throw new Error('Must be String or Object');
// 				}
// 			}

// 			$scope = errObj;
// 		},
// 		link: function(scope, element, attrs) {
// 			var element = jQuery(element);

// 			if(element.is('input')) {
// 				element.attr('placeholder', scope.errPlaceholder);
// 			}
// 		}
// 	}
// }]);