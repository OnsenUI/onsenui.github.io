(function() {
	var myApp = angular.module('myApp');
	var PLAYLIST_KEY = 'monaca_tunes:playlist';

	myApp.factory('PlaylistManager', function(Featured, LocalStoragePlaylist) {

		var PlaylistManager = function() {

			this.init = function() {
				var playlists = localStorage.getItem(PLAYLIST_KEY);
				if (playlists) {
					this.playlists = JSON.parse(playlists);
				} else {
					this.initializePlaylist();
				}

				this.playlistServices = [];
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

			this.getPlaylist = function(playlistName) {
				var playlistService;

				if (!this.playlistServices[playlistName]) {
					if (playlistName === "Featured") {
						playlistService = new Featured();
					} else {
						playlistService = new LocalStoragePlaylist(playlistName);
					}

					this.playlistServices[playlistName] = playlistService;
				} else {
					playlistService = this.playlistServices[playlistName];
				}

				return playlistService;
			};

			this.init();
		};


		var playlistManager = new PlaylistManager();
		return playlistManager;
	});
})();