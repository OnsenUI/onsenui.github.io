(function() {

	var app = angular.module('myApp');

	app.controller('FeaturedController', ['$scope', '$rootScope', 'PlaylistManager',
		function($scope, $rootScope, PlaylistManager) {
			var selectedPlaylist = PlaylistManager.getPlaylist('Featured');
			PlaylistManager.selectedPlaylist = selectedPlaylist;			

			$scope.title = "Featured";

			$rootScope.$on('music-detail', function(selectedMusic){
				console.log('play');
				$scope.title = "Playing";				
			});
		}		

	]);
})();