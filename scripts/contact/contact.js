(function () {
	'use strict';
	angular.module('contact', ['ngResource'])
	.config(function($stateProvider){

		var contact = {
			url: '/contact',
			views: {
				'main@home' : {
					controller : 'contactCtrl',
					templateUrl: 'scripts/contact/partials/contact.html'
				}
			}
		};

		$stateProvider.state('home.contact', contact);
	});
}());
