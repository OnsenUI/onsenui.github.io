/*===================================================================
Play Music
===================================================================*/

(function() {

    var app = angular.module('myApp');

    app.controller('musicPlayController', ['$scope', '$rootScope', 'PlaylistManager', 'Player',
        function($scope, $rootScope, PlaylistManager, Player) {

            $scope.volume = 50;
            $scope.player = Player;
            $scope.music = PlaylistManager.selectedMusic;

            var favoriteList = PlaylistManager.getPlaylist('Favorites');
            favoriteList.exist($scope.music).done(function(favorited){
                $scope.$apply(function(){
                    $scope.isFavorited = favorited;
                });
            });
            
            $scope.ons.tabbar.setTabbarVisibility(false);

            $scope.$on('$destroy', function() {
                $rootScope.$broadcast('exit-detail');
                $scope.ons.tabbar.setTabbarVisibility(true);
            });

            $scope.toggleFavorite = function() {
                if($scope.isFavorited){
                    PlaylistManager.selectedPlaylist.unFavoriteCurrentTrack().done(function(){
                        $scope.isFavorited = false;
                    });
                }else{
                    PlaylistManager.selectedPlaylist.favoriteCurrentTrack().done(function(){
                        $scope.isFavorited = true;
                    });
                }
                
            };

            $scope.playOrPause = function(src) {
                console.log('play or pause');
                if (Player.status === Player.MEDIA_STARTING || Player.status === Player.MEDIA_RUNNING) {
                    Player.pause();
                } else {
                    Player.play(src, $scope);
                    setTimeout(function() {
                        Player.setVolume($scope.volume);
                    }, 0);
                }
            };

            $scope.next = function(){
                var nextTrack = PlaylistManager.selectedPlaylist.getNextTrack();
                $scope.music = nextTrack;
            };

            $scope.previous = function(){
                var previousTrack = PlaylistManager.selectedPlaylist.getPreviousTrack();
                $scope.music = previousTrack;
            };

            $scope.dragDown = function() {
                if ($scope.volume > 0) {
                    $scope.volume--;
                    setTimeout(function() {
                        Player.setVolume($scope.volume);
                    }, 0);

                }
            };

            $scope.dragUp = function() {
                if ($scope.volume < 100) {
                    $scope.volume++;
                    setTimeout(function() {
                        Player.setVolume($scope.volume);
                    }, 0);
                }
            };

        }
    ]);
})();