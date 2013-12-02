(function() {
	var myApp = angular.module('myApp');
	var PLAYLIST_KEY = 'monaca_tunes:playlist';

	myApp.factory('PlaylistManager', function(Featured, LocalStoragePlaylist) {

		var PlaylistManager = function() {

			this.init = function() {
				var playlists = localStorage.getItem(PLAYLIST_KEY);
				if (playlists) {
					this.playlists = JSON.parse(playlists);
				}else{
					this.initializePlaylist();
				}
			};

			this.initializePlaylist = function() {
				this.playlists = [{
					name: 'Featured'
				}, {
					name: 'Favorites'
				}];
				this.savePlaylist();
			};

			this.savePlaylist = function() {
				localStorage.setItem(PLAYLIST_KEY, JSON.stringify(this.playlists));
			};

			this.getPlaylist = function(playlistName){
				if(playlistName === "Featured"){
					if(!this.featured){
						this.featured = new Featured();
					}
					return this.featured;
				}

				return new LocalStoragePlaylist(playlistName);
			};

			this.init();
		};


		var playlistManager = new PlaylistManager();
		return playlistManager;
	});
})();