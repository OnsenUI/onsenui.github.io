/*===================================================================
Musiclist
===================================================================*/
(function() {

	var app = angular.module('myApp');

	app.controller('musiclistController', ['$scope', '$rootScope', 'PlaylistManager',
		function($scope, $rootScope, PlaylistManager) {

			$scope.playlist = PlaylistManager.selectedPlaylist;
			$scope.isLoading = true;

			function loadMusic() {
				$scope.playlist.next().then(function(tracks) {
					$scope.$apply(function() {
						$scope.musics = tracks;
						$scope.isLoading = false;
					});
				});
			}

			loadMusic();			


			$scope.playMusic = function(music, index) {
				var selectedMusic = music;				
				PlaylistManager.selectedPlaylist.setCurrentTrack(music);
				PlaylistManager.selectedMusic = selectedMusic;								
				$scope.ons.navigator.pushPage('pages/music/detail.html', 'Play');
			}			

		}

	]);
})();