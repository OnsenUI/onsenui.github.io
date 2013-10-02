function Page1Controller($scope, Data){
    $scope.items = Data.items;

    $scope.showDetail = function(index){
        var selectedItem = Data.items[index];
        Data.selectedItem = selectedItem;
        $scope.ons.navigator.pushPage('page2.html', selectedItem.title);
    }
}