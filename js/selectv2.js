   var app = angular.module('SelectV2', []);
   app.directive('selectv2', function($timeout, $document) {
      return {
         restrict: 'E',
         templateUrl: "partials/select.html",
         scope: {
            options: "=options",
            catagories: "=catagories"
         },
         replace: true,
         link: linkFn
      }

      function linkFn(scope, element, attrs) {
         scope.selected = attrs.default;
         open = function(e) {
            element.toggleClass("open");
         }
         scope.select = function(id) {
            console.log("select called" + id)
            $timeout(function() {
               scope.selected = scope.options[id];
            });
            element.removeClass("open");
         }
         var button = angular.element(element.children()[0]);
         if (!attrs.livesearch) {
            var input = angular.element(element.children()[1]);
            input.children()[0].remove();
         }
         var ul = angular.element("<ul>");
         ul.addClass("dropdown-menu inner");
         list(ul, scope);
         var dropdown = angular.element(element.children()[1]);
         dropdown.append(ul)
         button.bind("click", open);
      }

      function list(ul, scope) {
         for (var i = 0; i < scope.options.length; i++) {
            var li = angular.element("<li>");
            if (scope.catagories !== undefined) {
               if (scope.catagories.indexOf(scope.options[i]) === -1) {
                  var a = angular.element("<a class='opt'>");
                  a.append(angular.element("<span class='text'>" + scope.options[i] + ""));
                  a.append(angular.element("<span class='glyphicon glyphicon-ok check-mark'>"));
                  li.append(a)
                  li.attr("index", i);
                  li.bind("click", function(e) {
                     var index = angular.element(this).attr("index");
                     scope.select(index);
                  });
               } else {
                  i !== 0 ? ul.append(angular.element("<li class='divider'>")) : null;
                  li.addClass("dropdown-header");
                  li.append(angular.element("<span class='text'>" + scope.options[i] + ""))
               }
            } else {
               var a = angular.element("<a class='opt'>");
               a.append(angular.element("<span class='text'>" + scope.options[i] + ""));
               a.append(angular.element("<span class='glyphicon glyphicon-ok check-mark'>"));
               li.append(a);
               li.attr("index", i);
               li.bind("click", function(e) {
                  var index = angular.element(this).attr("index");
                  scope.select(index);
               });
            }
            ul.append(li);
         }
      }

   });
