(function () {
	'use strict';
	angular.module('rental', ['ngResource'])
	.config(function($stateProvider){

		var faq = {
			url: '/rental',
			views: {
				'main@home' : {
					controller : 'rentalCtrl',
					templateUrl: 'scripts/rental/partials/rental.html'
				}
			}
		};

		$stateProvider.state('home.rental', faq);
	});
}());
