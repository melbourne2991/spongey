'use strict';

// Declare app level module which depends on filters, and services
angular.module('app', [
	'ui.router',
	'app.services',
	'app.directives',
	'app.controllers'
]).config(['$stateProvider', function($stateProvider) {
	$stateProvider
	.state('default', {
		templateUrl: 'templates/sponges/view',
		url: '',
		controller: 'MainController'
	})
	.state('sponge', {
		templateUrl: 'templates/sponges/view',
		url: '/sponge/{path:.*}',
		controller: 'MainController'
	})
}]);
