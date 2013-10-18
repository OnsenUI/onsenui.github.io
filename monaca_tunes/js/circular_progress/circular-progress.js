var directiveModule = angular.module('myApp.directives', []);
directiveModule.directive("circularProgress", ['$timeout', function ($timeout) {
    return {
        restrict: 'E',
        replace: false,
        scope: {
            percentage: "@"
        },
        templateUrl: 'js/circular_progress/circular_progress.html',
        link: function (scope, element, attributes) {

            var wrapper = element;
            var progressRadial = element.find('.progress-radial');
            
            var css;
            var degree;

            scope.$watch('percentage', function(){
                var roundedPercentage = Math.round(scope.percentage);
                scope.roundedPercentage = roundedPercentage;
                if(roundedPercentage < 50){
                    degree = 3.6 * roundedPercentage + 90;
                    css = "linear-gradient(90deg, #2f3439 50%, transparent 50%, transparent), linear-gradient(" + degree + "deg, #25b5c2 50%, #2f3439 50%, #2f3439)";
                    progressRadial.css('background-image', css);
                }else{
                    degree = 3.6 * roundedPercentage - 270;
                       css = "linear-gradient(" + degree + "deg, #25b5c2 50%, transparent 50%, transparent), linear-gradient(270deg, #25b5c2 50%, #2f3439 50%, #2f3439)";
                    progressRadial.css('background-image', css);
                }
                                
            });
                        
        

            // ctx.beginPath();
            // ctx.strokeStyle = '#99CC33';
            // ctx.lineCap = 'square';
            // ctx.closePath();
            // ctx.fill();
            // ctx.lineWidth = 10.0;            

            // ctx.beginPath();
            // ctx.arc(x, y, radius, startAngle, endAngle, counterClockwise);
            // ctx.lineWidth = 15;

            //   // line color
            // ctx.strokeStyle = 'black';
            // ctx.stroke();
            

            // draw(0.9);
        }
    }
}]);