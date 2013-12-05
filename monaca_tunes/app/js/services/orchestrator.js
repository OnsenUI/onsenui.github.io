(function() {
	var myApp = angular.module('myApp');

	myApp.factory('Orchestrator', function(PlaylistManager, $rootScope, Player) {

		var Orchestrator = Class.extend({
			init: function() {
				var that = this;
				$rootScope.$on('play:ended', function() {
					console.log('play:ended received');
					PlaylistManager.selectedPlaylist.getNextTrack();
					that.play();
				});
			},

			play: function() {
				Player.play(PlaylistManager.selectedPlaylist.currentTrack.audio);
			},

			pause: function(){
				Player.pause();
			}

		});
		return new Orchestrator();
	});
})();