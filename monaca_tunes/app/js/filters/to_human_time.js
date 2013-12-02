(function() {
	'use strict';

	var filterModule = angular.module('myApp.filters');

	filterModule.filter("human_time", function() {
		return function(sec) {
			sec = sec || 0;
			if (sec === 0) {
                return "0:00";
            } else {
                var minute = Math.floor(sec / 60);
                var second = Math.floor(sec - minute * 60);
                second = second < 10 ? "0" + second : second;  // add 0 if < 10
                return minute + ":" + second;
            }

		};
	});
})();