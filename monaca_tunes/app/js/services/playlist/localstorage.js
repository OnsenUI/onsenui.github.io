(function() {
	var myApp = angular.module('myApp');

	myApp.factory('LocalStoragePlaylist', function(BasePlaylist, LocalStorageArrayUtil) {

		var LocalStoragePlaylist = BasePlaylist.extend({
			init: function(playlistName) {
				this._super();
				this.playlistName = playlistName;
				this.localStorageUtil = new LocalStorageArrayUtil(this.playlistName);
			},

			getNextData: function() {
				var defer = $.Deferred();
				var that = this;

				setTimeout(function() {
					// if (that.currentPage > 0) {
					// 	// defer.resolve([]);
					// 	defer.resolve(that.tracks);
					// } else {
						var tracks = that.localStorageUtil.getArray();
						defer.resolve(tracks);
					// }
				}, 0);

				return defer.promise();
			}
		});

		return LocalStoragePlaylist;
	});
})();