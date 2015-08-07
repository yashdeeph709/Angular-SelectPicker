(function() {
   var app = angular.module('SelectV2', []);
   app.directive('selectv2', function($timeout) {
      return {
         restrict: 'E',
         templateUrl: 'partials/select.html',
         scope: {
            options: "=options"
         },
         require: '?ngModel',
         replace: true,
         link: function(scope, elem, attrs, ngModelCtrl) {
            scope.selected = scope.options[0];
            console.log(elem);
            scope.open = function() {
               if (scope.class === "open") {
                  scope.class = '';
                  return;
               }
               scope.class = "open";
            }
            scope.select = function(index) {
               scope.selected = scope.options[index];
               scope.open();
            }
         }
      }
   });
})();
