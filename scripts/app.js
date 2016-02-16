(function () {
	'use strict';

	function startup($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider,$uiViewScrollProvider) {
		$urlRouterProvider.otherwise('/'); // default route points to the MAIN module.
		$httpProvider.defaults.useXDomain = true;
		$httpProvider.defaults.withCredentials = true;
		$httpProvider.defaults.transformRequest = function (data) {
			if (data === undefined) {
				return data;
			}
			return JSON.stringify(data);
		};

		$locationProvider.html5Mode(true);
		$uiViewScrollProvider.useAnchorScroll();

		var index = {
			views : {
				'@' : {
					templateUrl: 'scripts/common/partials/skeleton.html'
				}
			}
		};

		$stateProvider.state('home', index);

		//$stateProvider
		//	.state('home', {
		//		url: "/",
		//		abstract: true,
		//		templateUrl: "scripts/common/partials/skeleton.html",
		//		controller: 'homeCtrl'
		//	})
		//	.state('home.faq', {
		//		url: "/faq",
		//		views: {
		//			'menuContent': {
		//				templateUrl: "scripts/faq/partials/faq.html",
		//				controller: "faqCtrl"
		//			}
		//		}
		//	})
	}

	angular.module('board', [
		'ngCookies',
		'ngAnimate',
		'viewhead',
		'ui.router',
		'ui.bootstrap',
		'home',
		'about',
		'faq',
		'rental',
		'contact'
	]).config([
		'$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider',
		'$uiViewScrollProvider', startup]);
}());
