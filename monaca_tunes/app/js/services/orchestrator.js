(function() {
	var myApp = angular.module('myApp');

	myApp.factory('Orchestrator', function(PlaylistManager, $rootScope, PlayerFactory) {

		var Orchestrator = Class.extend({
			init: function() {
				var that = this;
				$rootScope.$on('play:ended', function() {
					console.log('play:ended received');
					that.playNext();	
				});
			},

			playNext: function(){
				PlaylistManager.selectedPlaylist.goToNextTrack();
				this.play();
			},

			playPrevious: function(){
				PlaylistManager.selectedPlaylist.goToPreviousTrack();
				this.play();
			},

			play: function() {
				this.currentTrack = PlaylistManager.selectedPlaylist.currentTrack;
				$rootScope.$broadcast('play:music', PlaylistManager.selectedPlaylist.currentTrack);
				PlayerFactory.getPlayer().play(this.currentTrack.audio);
			},

			pause: function(){
				PlayerFactory.getPlayer().pause();
			}

		});
		return new Orchestrator();
	});
})();