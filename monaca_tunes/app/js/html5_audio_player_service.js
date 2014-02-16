(function() {
	var myApp = angular.module('myApp');

	myApp.factory('PlayerFactory', function($rootScope, CordovaMediaPlayer, HTML5AudioPlayer) {		
		

		var Player = function() {
		
			this.getPlayer = function() {
				if(window.device){
					console.log('using cordova player');
					return CordovaMediaPlayer;
				}else{
					console.log('using HTML5 player');
					return HTML5AudioPlayer;
				}
			}

		};

		return new Player();
	});
})();