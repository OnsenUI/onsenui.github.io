function TabbarController($scope, $rootScope){
	$scope.active = {};
	$scope.active.tab1 = true;
	$scope.active.tab2 = false;

	$rootScope.$broadcast('hide:toolbar');
}