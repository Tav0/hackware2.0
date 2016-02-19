(function() {
	'use strict';
	angular.module('contact').controller('contactCtrl', contactCtrl);
	contactCtrl.$inject = ['$scope'];

	function contactCtrl($scope){
		$scope.contact = "contact";

		$scope.facebook = 'https://www.facebook.com/HackWare-426489770840939/';
        $scope.twitter = 'https://twitter.com/hack_ware';
        $scope.email = 'mailto:admin@hackware.io';


        $scope.linkModelFunc = function (url){
			//console.log('link model function');
			$window.location = url;
		}
        $scope.linkModelFunc1 = function (url){
            //console.log('link model function');
            $window.location = url;
        }
        $scope.linkModelFunc2 = function (url){
            //console.log('link model function');
            $window.location = url;
        }
	}
}());
