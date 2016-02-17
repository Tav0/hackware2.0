(function() {
	'use strict';
	angular.module('about').controller('aboutCtrl', aboutCtrl);
	aboutCtrl.$inject = ['$scope', '$window'];

	function aboutCtrl($scope, $window){
		$scope.link = function() {
			$window.location.href = 'https://google.com';
		};
	}
}());
