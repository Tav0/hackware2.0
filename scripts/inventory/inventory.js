(function () {
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

		$stateProvider.state('home.inventory', inventory);
	});
}());
