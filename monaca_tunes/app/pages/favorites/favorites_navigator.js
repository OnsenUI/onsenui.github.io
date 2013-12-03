(function() {

	var app = angular.module('myApp');

	app.controller('FavoritesController', ['$scope', '$rootScope', 'PlaylistManager',
		function($scope, $rootScope, PlaylistManager) {
			var selectedPlaylist = PlaylistManager.getPlaylist('Favorites');
			PlaylistManager.selectedPlaylist = selectedPlaylist;			

			$scope.title = "Favorites";

			// $rootScope.$on('music-detail', function(selectedMusic){
			// 	console.log('favorites play');
			// 	$scope.title = "Playing";				
			// });
		}

	]);
})();