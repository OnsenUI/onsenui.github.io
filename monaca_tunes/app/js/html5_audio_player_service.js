(function() {
	var myApp = angular.module('myApp');

	myApp.factory('Player', function($rootScope) {		
		var MEDIA_STARTING = 1;
		var MEDIA_RUNNING = 2;
		var MEDIA_PAUSED = 3;
		var MEDIA_ENDED = 4;
		var MEDIA_UNKOWN = 5;


		var Player = function() {
			this.MEDIA_UNKOWN = MEDIA_UNKOWN;
			this.MEDIA_STARTING = MEDIA_STARTING;
			this.MEDIA_RUNNING = MEDIA_RUNNING;
			this.MEDIA_PAUSED = MEDIA_PAUSED;
			this.MEDIA_ENDED = MEDIA_ENDED;

			this.kicked = '';
			this.status = Player.MEDIA_UNKOWN;

			this.play = function(src) {
				var that = this;
				this.currentPosition = 0;
				this.media = new Audio();
				this.media.src = src;
				// if (!this.dance) {
				// 	this.dancer = new Dancer();
				// }

				// this.dancer.load(this.media);
				// this.dancer.play();				
				this.status = MEDIA_STARTING;

				this.media.addEventListener('play', $.proxy(this.onPlay, this));
				this.media.addEventListener('pause', $.proxy(this.onPause, this));
				this.media.addEventListener('ended', $.proxy(this.onEnded, this));
				this.media.addEventListener('timeupdate', $.proxy(this.onTimeUpdate, this));
				this.media.addEventListener('error', $.proxy(this.onError, this));
				this.media.addEventListener('loadeddata', $.proxy(this.onLoadedData, this));
				this.media.addEventListener('canplaythrough', $.proxy(this.onCanPlayThrough, this));
				
				// this.media.addEventListener('progress', $.proxy(this.onProgress, this));
				this.media.load();
				this.media.play();
			};

			this.onError =  function(e){
				console.log('error', e);
			},

			this.onCanPlayThrough = function(e){
				console.log('can play through');
				var that = this;
				$rootScope.$apply(function() {
					that.status = MEDIA_RUNNING;
				});
			},

			this.onLoadedData = function(e){
				console.log('loaded data');
			},

			this.onPlay = function() {
				console.log('playing');
				
			};

			this.onPause = function() {
				var that = this;
				$rootScope.$apply(function() {
					that.status = MEDIA_PAUSED;
				});
			};

			this.onEnded = function() {
				var that = this;
				$rootScope.$broadcast('play:ended');
				$rootScope.$apply(function() {
					that.status = MEDIA_ENDED;
				});
			};

			this.onTimeUpdate = function() {
				var that = this;
				$rootScope.$apply(function() {
					that.currentPosition = that.media.currentTime;
				});
			};

			// this.onProgress = function() {
			// 	console.log('progress', event);
			// 	var that = this;
			// 	$rootScope.$apply(function() {
			// 		that.buffered = that.media.buffered.end(0);
			// 	});
			// };


			this.pause = function() {
				this.media.pause();
				// if (this.dancer.isPlaying()) {
				// 	this.dancer.pause();
				// }
			};

			this.setVolume = function(vl) {
				vl = vl / 100;
				if (this.media) {
					this.media.volume = vl;
				}
			};

		};

		return new Player();
	});
})();