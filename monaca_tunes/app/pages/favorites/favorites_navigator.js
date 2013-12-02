(function() {

	var app = angular.module('myApp');

	app.controller('FavoritesController', ['$scope', '$rootScope', 'PlaylistManager',
		function($scope, $rootScope, PlaylistManager) {
			var selectedPlaylist = PlaylistManager.getPlaylist('Favorites');
			PlaylistManager.selectedPlaylist = selectedPlaylist;						
		}

	]);
})();