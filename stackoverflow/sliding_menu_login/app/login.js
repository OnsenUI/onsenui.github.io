function LoginController($scope){
	$scope.login = function(id, password){
		$scope.ons.screen.presentPage('sliding_menu.html');
	}
}