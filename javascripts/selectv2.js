var use;
(function() {
   var app = angular.module('SelectV2', []);
   app.directive('selectv2', function($timeout, $document) {
      return {
         restrict: 'E',
         templateUrl: "partials/select.html",
         scope: {
            options: "=options",
            catagories: "=catagories",
         },
         replace: true,
         link: function(scope, element, attrs) {
            scope.selected = attrs.default;
            open = function(e) {
               element.toggleClass("open");
            }
            select = function(id) {
               scope.selected = scope.options[index];
               element.removeClass("open");
            }
            var button = angular.element(element.children()[0]);
            if (!attrs.livesearch) {
               var input = angular.element(element.children()[1]);
               input.children()[0].remove();
            }
            var ul = angular.element("<ul>");
            ul.addClass("dropdown-menu inner");
            for (var i = 0; i < scope.options.length; i++) {
               var li = angular.element("<li>");
               if (i % 2 !== 0) {
                  var a = angular.element("<a class='opt'>");
                  a.append(angular.element("<span class='text'>" + scope.options[i] + ""))
                     .append(angular.element("<span class='glyphicon glyphicon-ok check-mark'>"));
                  li.append(a)
               } else {
                  li.append(angular.element("<span class='text'>" + scope.options[i] + ""))
               }
               ul.append(li);
            }
            var dropdown = angular.element(element.children()[1]);
            dropdown.append(ul)
            button.bind("click", open);
         }
      }
   });
})();
