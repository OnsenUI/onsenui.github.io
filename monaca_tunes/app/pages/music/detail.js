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
            
            $scope.ons.tabbar.setTabbarVisibility(false);

            $scope.$on('$destroy', function() {
                $rootScope.$broadcast('exit-detail');
                $scope.ons.tabbar.setTabbarVisibility(true);
            });

            $scope.favorite = function() {
                PlaylistManager.selectedPlaylist.favoriteCurrentTrack();
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