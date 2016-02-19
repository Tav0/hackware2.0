(function () {
	'use strict';
	angular.module('about', ['ngResource'])
	.config(function($stateProvider){

		var about = {
			url: '/about',
			views: {
				'main@home' : {
					controller : 'aboutCtrl',
					templateUrl: 'scripts/about/partials/about.html'
				}
			}
		};

		var right = {
			url: '/',
			views: {
				'main@home' : {
					controller : 'homeCtrl',
					templateUrl: 'scripts/home/partials/home.html'
				}
			}
		};

		$stateProvider.state('home.about', about);
		$stateProvider.state('home.about.right',right);
	});
}());
