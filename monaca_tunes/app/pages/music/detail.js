/*===================================================================
Play Music
===================================================================*/

(function() {

    var app = angular.module('myApp');

    app.controller('musicPlayController', ['$scope', '$rootScope', 'PlaylistManager', 'Player', 'Orchestrator',
        function($scope, $rootScope, PlaylistManager, Player, Orchestrator) {

            function init(){
                $scope.volume = 50;
                $scope.player = Player;
                $scope.playlist = PlaylistManager.selectedPlaylist;

                var favoriteList = PlaylistManager.getPlaylist('Favorites');
                favoriteList.exist($scope.playlist.currentTrack).done(function(favorited){
                    $scope.$apply(function(){
                        $scope.isFavorited = favorited;
                    });
                });

                Orchestrator.play();
            }

            init();
            
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

            $scope.playOrPause = function() {
                console.log('play or pause');
                if (Player.status === Player.MEDIA_STARTING || Player.status === Player.MEDIA_RUNNING) {
                    Player.pause();
                } else {
                    Orchestrator.play();
                    setTimeout(function() {
                        Player.setVolume($scope.volume);
                    }, 0);
                }
            };

            $scope.next = function(){
                Orchestrator.playNext();
            };

            $scope.previous = function(){
                Orchestrator.playPrevious();
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