(function() {
	var myApp = angular.module('myApp');

	myApp.factory('BasePlaylist', function(LocalStorageArrayUtil, $timeout) {

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

			setCurrentTrack: function(track){
				this.currentTrack = track;
				this.calculateCurrentTrackIndex();
			},

			getNextTrack: function(){				
				this.currentTrackIndex++;
				if(this.currentTrackIndex >= this.tracks.length){
					this.currentTrackIndex = 0;
				}

				this.currentTrack = this.tracks[this.currentTrackIndex];
				return this.currentTrack;
			},

			getPreviousTrack: function(){
				this.currentTrackIndex--;
				if(this.currentTrackIndex < 0){
					this.currentTrackIndex = this.tracks.length - 1;
				}

				this.currentTrack = this.tracks[this.currentTrackIndex];
				return this.currentTrack;
			},

			calculateCurrentTrackIndex: function(){
				var track;
				for (var i = 0; i < this.tracks.length; i++) {
					track = this.tracks[i]
					if(track.id === this.currentTrack.id){
						this.currentTrackIndex = i;
						return;
					}
				};				
			},

			exist: function(track){
				var defer = $.Deferred();
				var that = this;
				var exist;
				$timeout(function(){
					exist = that.favoriteArrayUtil.exist(track, 'id');
					defer.resolve(exist);
				});
				
				return defer.promise();
			},

			unFavoriteCurrentTrack: function(){
				var defer = $.Deferred();
				if(this.currentTrack){
					this.favoriteArrayUtil.remove(this.currentTrack, 'id');
					defer.resolve();
				}else{
					return defer.reject('current track is null!');
				}

				return defer.promise();
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