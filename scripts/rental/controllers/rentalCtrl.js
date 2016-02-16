(function() {
	'use strict';
	angular.module('rental').controller('rentalCtrl', rentalCtrl);
	rentalCtrl.$inject = ['$scope'];

	function rentalCtrl($scope){
		$scope.rental = "Rental";
	}
}());
