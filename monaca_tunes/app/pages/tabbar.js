(function() {

	var app = angular.module('myApp');
	app.controller('TabbarController', ['$scope', '$rootScope', 'Data', '$timeout',
		function($scope, $rootScope, Data, $timeout) {
			$scope.$on('music-detail', function(event, music) {
				$timeout(function() {
					$scope.bg = music.album_image;
				}, 600);
			});

			$scope.$on('exit-detail', function() {
				$scope.bg = "";
			});

			// $scope.status = {
			// 	tab1: false,
			// 	tab2: false,
			// 	tab3: false,
			// 	tab4: false 
			// };

			// var defaultTab1 = 'assets/icons/playlist_icon.png';
			// var defaultTab2 = 'assets/icons/artist_icon.png';
			// var defaultTab3 = 'assets/icons/music_icon.png';
			// var defaultTab4 = 'assets/icons/info_icon.png';

			// $scope.icons = {
			// 	tab1: 'assets/icons/playlist_icon.png',
			// 	tab2: 'assets/icons/artist_icon.png',
			// 	tab3: 'assets/icons/music_icon.png',
			// 	tab4: 'assets/icons/info_icon.png',
			// }

			// $scope.activateTab = function(tab){
			// 	resetTabs();
			// 	$scope.status[tab] = true;

			// 	var icon = $scope.icons[tab];
			// 	var icon_cut = icon.substring(0, icon.length - 4);
			// 	var icon_on = icon_cut + '_on.png';
			// 	$scope.icons[tab] = icon_on;
			// }

			// function resetTabs(){
			// 	$scope.status.tab1 = false;
			// 	$scope.status.tab2 = false;
			// 	$scope.status.tab3 = false;
			// 	$scope.status.tab4 = false;

			// 	$scope.icons.tab1 = defaultTab1;
			// 	$scope.icons.tab2 = defaultTab2;
			// 	$scope.icons.tab3 = defaultTab3;
			// 	$scope.icons.tab4 = defaultTab4;
			// }

			// $scope.activateTab('tab1');
		}
	]);
})();