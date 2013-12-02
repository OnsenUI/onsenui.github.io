(function() {
	var myApp = angular.module('myApp');

	myApp.factory('Player', function() {
		var MEDIA_UNKOWN = 0;
		var MEDIA_STARTING = 1;
		var MEDIA_RUNNING = 2;
		var MEDIA_PAUSED = 3;
		var MEDIA_ENDED = 4;


		var Player = function() {
			this.MEDIA_UNKOWN = MEDIA_UNKOWN;
			this.MEDIA_STARTING = MEDIA_STARTING;
			this.MEDIA_RUNNING = MEDIA_RUNNING;
			this.MEDIA_PAUSED = MEDIA_PAUSED;
			this.MEDIA_ENDED = MEDIA_ENDED;

			this.kicked = '';
			this.status = Player.MEDIA_UNKOWN;

			this.play = function(src, $scope) {
				var that = this;
				this.currentPosition = 0;
				this.$scope = $scope;
				this.media = new Audio();
				this.media.src = src;
				this.dancer = new Dancer();
				// this.dancer.fft( fft, { 
				// 	fillStyle: '#25b5c2',
				// 	count: 30,
				// 	width: 10 
				// });
				// this.kick = this.dancer.createKick({
				// 	threshold: 0.2,
				// 	onKick: function() {
				// 		console.log('kicked!');
				// 		$scope.$apply(function(){
				// 			that.kicked = 'kicked';
				// 		});
				// 	},
				// 	offKick: function() {
				// 		// console.log('-');
				// 		$scope.$apply(function(){
				// 			that.kicked = '';
				// 		});
				// 	}
				// }).on();
				this.dancer.load(this.media);
				this.dancer.play();
				this.status = MEDIA_STARTING;

				this.media.addEventListener('play', $.proxy(this.onPlay, this));
				this.media.addEventListener('pause', $.proxy(this.onPause, this));
				this.media.addEventListener('ended', $.proxy(this.onEnded, this));
				this.media.addEventListener('timeupdate', $.proxy(this.onTimeUpdate, this));
				// this.media.addEventListener('progress', $.proxy(this.onProgress, this));
			};

			this.onPlay = function() {
				console.log('playing');
				var that = this;
				this.$scope.$apply(function() {
					that.status = MEDIA_RUNNING;
				});
			};

			this.onPause = function() {
				var that = this;
				this.$scope.$apply(function() {
					that.status = MEDIA_PAUSED;
				});
			};

			this.onEnded = function() {
				var that = this;
				this.$scope.$apply(function() {
					that.status = MEDIA_ENDED;
				});
			};

			this.onTimeUpdate = function() {
				var that = this;
				this.$scope.$apply(function() {
					that.currentPosition = that.media.currentTime;
				});
			};

			// this.onProgress = function() {
			// 	console.log('progress', event);
			// 	var that = this;
			// 	this.$scope.$apply(function() {
			// 		that.buffered = that.media.buffered.end(0);
			// 	});
			// };


			this.pause = function() {
				if (this.media && this.dancer.isPlaying()) {
					this.dancer.pause();
				}
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