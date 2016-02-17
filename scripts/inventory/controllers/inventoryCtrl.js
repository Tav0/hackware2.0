(function() {
	'use strict';
	angular.module('inventory').controller('inventoryCtrl', inventoryCtrl);
	inventoryCtrl.$inject = ['$scope'];

	function inventoryCtrl($scope){
		$scope.inventory = "Inventory";
	}
}());
