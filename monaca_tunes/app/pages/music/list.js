/*===================================================================
Musiclist
===================================================================*/
(function() {

	var app = angular.module('myApp');

	app.controller('musiclistController', ['$scope', '$rootScope', 'PlaylistManager',
		function($scope, $rootScope, PlaylistManager) {

			$scope.playlist = PlaylistManager.selectedPlaylist;
			$scope.playlist.next().then(function(tracks){
				$scope.$apply(function(){
					$scope.musics = tracks;
				});
			});

			$scope.playMusic = function(music, index) {
				var selectedMusic = music;
				PlaylistManager.selectedPlaylist.currentTrack = music;
				PlaylistManager.selectedMusic = selectedMusic;
				// PlaylistManager.selectedMusicIndex = index + 1;
				// PlaylistManager.selectedMusicSum = $scope.musics.length;
				// PlaylistManager.selectedMusicList = $scope.musics;
				// PlaylistManager.showMusicNumber = PlaylistManager.selectedMusicIndex + '/' + $scope.musics.length;

				$rootScope.$broadcast('music-detail', selectedMusic);
				$scope.ons.navigator.pushPage('pages/music/detail.html', PlaylistManager.showMusicNumber);
			}
			
		}

	]);
})();