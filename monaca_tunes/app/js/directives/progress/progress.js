(function() {

    var directiveModule = angular.module('myApp.directives');
    directiveModule.directive("onsProgress", ['$timeout',
        function($timeout) {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    value: "@",
                    max: "@"
                },
                templateUrl: 'js/directives/progress/progress.tpl',
                link: function($scope, element, attributes) {

                    function calculatePercentage(){
                        if($scope.max <= 0) {
                            $scope.percentage = 0;
                        }else{
                            $scope.percentage = Math.ceil($scope.value / $scope.max * 100) + '%';
                        }
                    }

                    $scope.$watch('value', function(){                        
                        calculatePercentage();
                    });

                    $scope.$watch('max', function(){
                        calculatePercentage();
                    });                


                }
            }
        }
    ]);
})();