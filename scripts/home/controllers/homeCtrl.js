(function() {
	'use strict';
	angular.module('home').controller('homeCtrl', homeCtrl);
	homeCtrl.$inject = ['$scope'];

	function homeCtrl($scope){
		$scope.site = "Hackware";
	}
}());
