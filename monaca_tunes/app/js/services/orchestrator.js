(function() {
	var myApp = angular.module('myApp');

	myApp.factory('Orchestrator', function(PlaylistManager, $rootScope, Player) {

		var Orchestrator = Class.extend({
			init: function() {
				var that = this;
				$rootScope.$on('play:ended', function() {
					console.log('play:ended received');
					that.playNext();	
				});
			},

			playNext: function(){
				PlaylistManager.selectedPlaylist.getNextTrack();
				this.play();
			},

			playPrevious: function(){
				PlaylistManager.selectedPlaylist.getPreviousTrack();
				this.play();
			},

			play: function() {
				$rootScope.$broadcast('play:music', PlaylistManager.selectedPlaylist.currentTrack);
				Player.play(PlaylistManager.selectedPlaylist.currentTrack.audio);
			},

			pause: function(){
				Player.pause();
			}

		});
		return new Orchestrator();
	});
})();