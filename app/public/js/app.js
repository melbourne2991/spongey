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
		url: '',
		abstract: true,
		template: 'templates/default'
	})
	.state('default.sponge', {
		url: '/sponge/{path:.*}',
		templateUrl: 'templates/sponge/view',
		controller: 'SpongeController'
	});
}]);
