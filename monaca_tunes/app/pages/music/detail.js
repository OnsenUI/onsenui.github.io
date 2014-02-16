/*===================================================================
Play Music
===================================================================*/

(function() {

    var app = angular.module('myApp');

    app.controller('musicPlayController', ['$scope', '$rootScope', 'PlaylistManager', 'PlayerFactory', 'Orchestrator', '$timeout',
        function($scope, $rootScope, PlaylistManager, PlayerFactory, Orchestrator, $timeout) {

            var favoriteList = PlaylistManager.getPlaylist('Favorites');

            function init(){                
                $scope.volume = 50;                
                $scope.player = PlayerFactory.getPlayer();
                $scope.playlist = PlaylistManager.selectedPlaylist;
                                
                if($scope.playlist.currentTrack){
                    if($scope.player.status != $scope.player.MEDIA_RUNNING || Orchestrator.currentTrack.id != $scope.playlist.currentTrack.id){
                        Orchestrator.play();
                    }else{
                        setBackgroundImage();
                    }                 
                    checkFavorite();
                }else{
                    $scope.playlist.goToNextTrack();
                    setBackgroundImage();
                }                       
            }

            function setBackgroundImage(){
                $timeout(function() {                   
                     $scope.bg = $scope.playlist.currentTrack.album_image.replace('200.jpg', '600.jpg');                    
                 }, 1000);
            }

            $scope.$on('play:music', function(event, music) {                
                 setBackgroundImage();
            });

            function checkFavorite(){
                favoriteList.exist($scope.playlist.currentTrack).done(function(favorited){
                    $scope.$apply(function(){
                        $scope.isFavorited = favorited;
                    });
                });
            }

            init();
            

            $scope.$on('$destroy', function() {
                $rootScope.$broadcast('exit-detail');
                $scope.bg = '';
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
                if ($scope.player.status === $scope.player.MEDIA_STARTING || $scope.player.status === $scope.player.MEDIA_RUNNING) {
                    $scope.player.pause();
                } else {
                    Orchestrator.play();
                    setTimeout(function() {
                        $scope.player.setVolume($scope.volume);
                    }, 0);
                }
            };

            $scope.next = function(){
                Orchestrator.playNext();
                checkFavorite();
            };

            $scope.previous = function(){
                Orchestrator.playPrevious();
                checkFavorite();
            };

            $scope.dragDown = function() {
                if ($scope.volume > 0) {
                    $scope.volume--;
                    setTimeout(function() {
                        $scope.player.setVolume($scope.volume);
                    }, 0);

                }
            };

            $scope.dragUp = function() {
                if ($scope.volume < 100) {
                    $scope.volume++;
                    setTimeout(function() {
                        $scope.player.setVolume($scope.volume);
                    }, 0);
                }
            };
        }
    ]);
})();