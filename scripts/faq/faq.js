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

		$stateProvider.state('home.faq', faq);
	});
}());
