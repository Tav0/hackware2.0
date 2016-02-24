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
        var up = {
            url: '/',
            views: {
                'main@home' : {
                    controller : 'homeCtrl',
                    templateUrl: 'scripts/home/partials/home.html'
                }
            }
        };

		$stateProvider.state('home.contact', contact);
        $stateProvider.state('home.contact.up',up);

    });
}());
