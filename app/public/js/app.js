'use strict';

// Declare app level module which depends on filters, and services
angular.module('app', [
	'ui.router',
	'app.services',
	'app.directives',
	'app.controllers'
]).config(['$httpProvider', '$stateProvider', function($httpProvider, $stateProvider) {
	$stateProvider
		.state('default', {
			templateUrl: '/templates/user_home',
			url: ''
		})
		.state('connections', {
			template: '<div id="profile_listings" data-profile-listings=""></div>',
			url: '/connections'
		})
		.state('login', {
			template: '<div id="login" data-login-directive=""></div>',
			url: '/login'
		});

	// Middlewares
	$httpProvider.interceptors.push(function($injector) {
		return {
			request: function(config) {
				return config;
			},
			response: function(response) {
				return response;
			},
			responseError: function(response) {
				if(response.status === 403) $injector.get('$state').go('login');
			}
		}
	});
}]);