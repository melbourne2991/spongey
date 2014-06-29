'use strict';

// Declare app level module which depends on filters, and services
angular.module('navigationModule', [
  'ui.router',
  'commonModule',
  'navigationModule.services',
  'navigationModule.directives',
  'navigationModule.controllers'
]).
config(['$stateProvider', function($stateProvider) {
	
}]);
