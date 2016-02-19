(function() {
	'use strict';
	angular.module('about').controller('aboutCtrl', aboutCtrl);
	aboutCtrl.$inject = ['$scope'];

	function aboutCtrl($scope){
		$scope.about = "About";


	}
}());
