(function() {
	'use strict';
	angular.module('inventory').controller('inventoryCtrl', inventoryCtrl);
	inventoryCtrl.$inject = ['$scope','$window'];

	function inventoryCtrl($scope,$window){
		$scope.inventory = "Inventory";

		$scope.hcpurl = 'http://hackalliance.io';

		$scope.linkModelFunc = function(url) {
			console.log('link model function');
			$window.location = url;
		};
	}
}());
