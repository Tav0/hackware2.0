(function() {
	'use strict';
	angular.module('faq').controller('faqCtrl', faqCtrl);
	faqCtrl.$inject = ['$scope'];

	function faqCtrl($scope){
		$scope.faq = "FAQ";
	}
}());
