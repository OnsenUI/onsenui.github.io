function HomeNavigator($scope, $timeout) {

	$scope.$on('hide:toolbar', function() {
		$scope.ons.navigator.setToolbarVisibility(false);
		$scope.bg = "";
	});

	$scope.$on('show-detail', function() {
		$scope.ons.navigator.pushPage('music/detail.html', 'Detail');
		$timeout(function(){
			$scope.ons.navigator.setToolbarVisibility(true);
		}, 0);

		$scope.bg = "images/test_artwork.png";
	});
}