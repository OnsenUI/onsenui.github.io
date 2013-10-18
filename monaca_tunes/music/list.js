function MusicListController($scope, $rootScope){
	$scope.playMusic = function(){
		$rootScope.$broadcast('show-detail');
	}
}