(function() {
	'use strict';
	angular.module('home').controller('homeCtrl', homeCtrl);
	homeCtrl.$inject = ['$scope'];

	function homeCtrl($scope){
		//Use it later.
		$scope.motto = "Hardware";
		$scope.bywho = "for hackers, by hackers";
	}
}());
