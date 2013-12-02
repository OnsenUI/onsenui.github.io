(function() {
	var myApp = angular.module('myApp');

	myApp.factory('BasePlaylist', function(LocalStorageArrayUtil) {

		var BasePlaylist = Class.extend({
			init: function() {
				this.tracks = [];
				this.currentTrack = null;
				this.currentPage = 0;
				this.perPage = 10;
				this.busy = false;
				this.noMore = false;
				this.favoriteArrayUtil = new LocalStorageArrayUtil('Favorites');
			},

			favoriteCurrentTrack: function(){
				var defer = $.Deferred();
				if(this.currentTrack){
					this.favoriteArrayUtil.addUnique(this.currentTrack, 'id');
					defer.resolve();
				}else{
					return defer.reject('current track is null!');
				}

				return defer.promise();
			},

			getNextData: function() {
				// interface that all children of this class must implement
			},

			next: function() {
				var defer = $.Deferred();
				if (this.busy) {
					defer.reject();
				}
				var that = this;
				this.busy = true;
				this.skip = this.currentPage * this.perPage;

				this.getNextData().then(function(tracks) {
					if (tracks.length > 0) {
						that.tracks = that.tracks.concat(tracks);
						that.currentPage++;
					} else {
						that.noMore = true;
					}

					that.busy = false;
					defer.resolve(that.tracks);
				});

				return defer.promise();
			}
		});

		return BasePlaylist;
	});
})();