(function() {

	var app = angular.module('myApp');

	app.controller('FeaturedController', ['$scope', '$rootScope', 'PlaylistManager',
		function($scope, $rootScope, PlaylistManager) {
			var selectedPlaylist = PlaylistManager.getPlaylist('Featured');
			PlaylistManager.selectedPlaylist = selectedPlaylist;			
		}

	]);
})();