(function () {
	'use strict';

	angular.module('home')
		.factory('dashFactory', dashFactory);

	dashFactory.$inject = [];

	function dashFactory() {
		var dashFctry = {},
			state = 'all',
			legend = '';

			dashFctry.setMainChartState = function(tmpState){
				state = tmpState;
			};

			dashFctry.getMainChartState = function(){
				return state;
			};

			dashFctry.setLegend = function(obj){
				legend = obj;
			};

			dashFctry.getLegend = function(){
				return legend;
			};

		return dashFctry;
	}

}());
