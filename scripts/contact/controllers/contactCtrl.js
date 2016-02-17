(function() {
	'use strict';
	angular.module('contact').controller('contactCtrl', contactCtrl);
	contactCtrl.$inject = ['$scope'];

	function contactCtrl($scope){
		$scope.contact = "contact";
	}
}());
