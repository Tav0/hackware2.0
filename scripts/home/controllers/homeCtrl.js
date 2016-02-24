(function() {
	'use strict';
	angular.module('home').controller('homeCtrl', homeCtrl);
	homeCtrl.$inject = ['$scope'];

	function homeCtrl($scope){
		$scope.site = "HackWare";
		$scope.content = "Hardware for hackers by hackers.";

	}
}());
