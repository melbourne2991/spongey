'use strict';

// Declare app level module which depends on filters, and services
angular.module('app', [
	'ui.router',
	'app.services',
	'app.directives',
	'app.controllers'
]).config(function($stateProvider) {
	$stateProvider
	.state('index', {
		url: '',
		controller: function() {
			console.log('lol');
		}
	})
	.state('sponge', {
		url: '/sponge/:slug',
		controller: 'MainController'
	});

});
