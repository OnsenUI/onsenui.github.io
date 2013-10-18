function PlaylistController($scope){
	$scope.showPlaylist = function(){
		$scope.ons.navigator.pushPage('music/list.html', 'Selected playlist');
	}
}