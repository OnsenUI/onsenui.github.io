(function() {

    var directiveModule = angular.module('myApp.directives');
    directiveModule.directive("circularProgress", ['$timeout',
        function($timeout) {
            return {
                restrict: 'E',
                replace: false,
                scope: {
                    percentage: "@"
                },
                templateUrl: 'js/directives/circular_progress/circular_progress.tpl',
                link: function(scope, element, attributes) {

                    var wrapper = element;
                    var progressRadial = element.find('.progress-radial');

                    var css;
                    var degree;

                    scope.$watch('percentage', function() {
                        var roundedPercentage = Math.round(scope.percentage);
                        scope.roundedPercentage = roundedPercentage;
                        if (roundedPercentage < 50) {
                            degree = 3.6 * roundedPercentage + 90;
                            css = "-webkit-linear-gradient(90deg, #2f3439 50%, transparent 50%, transparent), -webkit-linear-gradient(" + degree + "deg, #25b5c2 50%, #2f3439 50%, #2f3439)";
                            progressRadial.css('background-image', css);
                        } else {
                            degree = 3.6 * roundedPercentage - 270;
                            css = "-webkit-linear-gradient(" + degree + "deg, #25b5c2 50%, transparent 50%, transparent), -webkit-linear-gradient(270deg, #25b5c2 50%, #2f3439 50%, #2f3439)";
                            progressRadial.css('background-image', css);
                        }

                    });
                }
            }
        }
    ]);
})();