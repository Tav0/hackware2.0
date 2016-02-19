(function () {
	'use strict';
	angular.module('faq', ['ngResource'])
	.config(function($stateProvider){

		var faq = {
			url: '/faq',
			views: {
				'main@home' : {
					controller : 'faqCtrl',
					templateUrl: 'scripts/faq/partials/faq.html'
				}
			}
		};

		var down = {
			url: '/',
			views: {
				'main@home' : {
					controller : 'homeCtrl',
					templateUrl: 'scripts/home/partials/home.html'
				}
			}
		};
		$stateProvider.state('home.faq', faq);
		$stateProvider.state('home.faq.down', down);

	});
}());
