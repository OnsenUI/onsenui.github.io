(function() {
	var myApp = angular.module('myApp');

	myApp.factory('CordovaMediaPlayer', function($rootScope) {		
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

				// for offline
				if(window.device && window.device.platform.toLowerCase() === "android"){
					src = "file:///sdcard/Monaca/" + src;
				}

				if(this.status <= MEDIA_RUNNING){
					this.pause();
				}

				var that = this;
				this.currentPosition = 0;
                this.media =  new Media(src,
					$.proxy(this.onMediaSuccess, this),
					$.proxy(this.onMediaError, this),
					$.proxy(this.onMediaStatus, this)
                );
				
				this.media.play();
			};

			this.onMediaSuccess = function(){
				console.log('media success');
			};

			this.onMediaStatus = function(status){
				console.log('on media status' + status);
				if(status === Media.MEDIA_STARTING){
					this.onPlay();
				}else if(status === Media.MEDIA_RUNNING){
					this.onCanPlay();
				}else if(status === Media.MEDIA_PAUSED){
					this.onPause();
				}else if(status === Media.MEDIA_STOPPED){
					this.onEnded();
				}
			};

			this.onError =  function(e){
				console.log('error', e);
			};

			this.onCanPlay = function(e){
				console.log('can play');
				var that = this;
				setTimeout(function(){
					$rootScope.$apply(function() {
						that.status = MEDIA_RUNNING;
					});
				}, 0);
				this.startMediaTimer();
			};

			this.onCanPlayThrough = function(e){
				console.log('can play through');				
			};

			this.onLoadedData = function(e){
				console.log('loaded data');
			};

			this.onPlay = function() {
				console.log('onPlay');
				var that = this;
				// $rootScope.$apply(function(){
					that.status = MEDIA_STARTING;
				// });				
			};

			this.startMediaTimer = function() {
				var that = this;
				if (this.mediaTimer == null) {
					this.mediaTimer = setInterval(function() {
						// get my_media position
						that.media.getCurrentPosition(
							// success callback
							function(position) {
								if (position > -1) {
									$rootScope.$apply(function() {
										that.currentPosition = position;
									});
								}
							},
							// error callback
							function(e) {
								console.log("Error getting pos=" + e);
							}
						);
					}, 1000);
				}
			};

			this.stopMediaTimer = function(){
				if(this.mediaTimer){
					clearInterval(this.mediaTimer);
					this.mediaTimer = null;
				}
			};

			this.onPause = function() {
				console.log('on paused');
				var that = this;
				setTimeout(function(){
					$rootScope.$apply(function() {
						that.status = MEDIA_PAUSED;
					});
				}, 0);


				this.stopMediaTimer();
			};

			this.onEnded = function() {
				console.log('on ended');
				var that = this;
				$rootScope.$broadcast('play:ended');
				setTimeout(function(){
					$rootScope.$apply(function() {
						that.status = MEDIA_ENDED;
					});
				}, 0);

				this.stopMediaTimer();
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
					this.media.setVolume(vl);
				}
			};

		};

		return new Player();
	});
})();