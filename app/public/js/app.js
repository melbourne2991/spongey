'use strict';

// Declare app level module which depends on filters, and services
angular.module('app', [
	'ui.router',
	'app.services',
	'app.directives',
	'app.controllers'
]).config(['$stateProvider', function($stateProvider) {
	$stateProvider
	.state('index', {
		url: '',
		controller: 'SpongeController'
	})
	.state('sponge', {
		url: '/sponge/{path:.*}',
		controller: 'SpongeController'
	});
}]);
