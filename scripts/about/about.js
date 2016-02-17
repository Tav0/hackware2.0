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

		$stateProvider.state('home.about', about);
	});
}());
