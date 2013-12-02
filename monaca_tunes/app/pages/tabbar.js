(function() {

	var app = angular.module('myApp');
	app.controller('TabbarController', ['$scope', '$rootScope', 'Data', '$timeout',
		function($scope, $rootScope, Data, $timeout) {
			$scope.$on('music-detail', function(event, music) {				
				$timeout(function() {					
					$scope.bg = music.album_image.replace('200.jpg', '600.jpg');					
				}, 300);
			});

			$scope.$on('exit-detail', function() {
				$scope.bg = "";
			});			
		}
	]);
})();