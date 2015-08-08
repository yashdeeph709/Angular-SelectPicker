(function() {
   var app = angular.module('SelectV2', []);
   app.directive('selectv2', function($timeout) {
      return {
         restrict: 'E',
         templateUrl: 'partials/select.html',
         scope: {
            options: "=options",
            catagories: "=catagories"
         },
         replace: true,
         link: function(scope, elem, attrs) {
            scope.selected = scope.options[0];
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
