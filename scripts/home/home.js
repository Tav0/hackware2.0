(function () {
	'use strict';
	angular.module('home', ['ngResource'])
	.config(function($stateProvider){

		var home = {
			url: '/',
			views: {
				'main@home' : {
					controller : 'homeCtrl',
					templateUrl: 'scripts/home/partials/home.html'
				}
			}
		};

		$stateProvider.state('home.site', home);
	});
}());
