(function() {
	'use strict';
	angular.module('inventory', ['ngResource'])
		.config(function($stateProvider){

			var inventory = {
				url: '/inventory',
				views: {
					'main@home' : {
						controller : 'inventoryCtrl',
						templateUrl: 'scripts/inventory/partials/inventory.html'
					}
				}
			};

			var left = {
				url: '/',
				views: {
					'main@home' : {
						controller : 'homeCtrl',
						templateUrl: 'scripts/home/partials/home.html'
					}
				}
			};

			$stateProvider.state('home.inventory', inventory);
			$stateProvider.state('home.inventory.left', left);

		});
}());
