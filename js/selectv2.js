   var app = angular.module('SelectV2', []);
   app.run(function($templateCache) {
      var strVar = "";
      strVar += "<div class=\"btn-group bootstrap-select\" ng-class=\"class\">";
      strVar += "   <button type=\"button\" class=\"btn dropdown-toggle btn-default\">";
      strVar += "      <span class=\"filter-option pull-left\">{{selected}}<\/span> &nbsp;";
      strVar += "      <span class=\"caret\"><\/span>";
      strVar += "   <\/button>";
      strVar += "   <div class=\"dropdown-menu open\" style=\"max-height: 337px; overflow: hidden; min-height: 42px;\">";
      strVar += "      <div class=\"bs-searchbox\">";
      strVar += "         <input type=\"text\" ng-model=\"selectv2.searchtext\" class=\"form-control\" autocomplete=\"off\">";
      strVar += "      <\/div>";
      strVar += "   <\/div>";
      strVar += "<\/div>";
      strVar += "";
      $templateCache.put('selectv2.html', strVar);
   });

   app.directive('selectv2', function($timeout, $document) {
      return {
         restrict: 'E',
         templateUrl: "selectv2.html",
         scope: {
            options: "=options",
            catagories: "=catagories"
         },
         replace: true,
         link: linkFn
      }

      function linkFn(scope, element, attrs) {
         scope.selected = attrs.default;
         var x = attrs.maxopt - 1;
         open = function(e) {
            element.toggleClass("open");
         }
         scope.select = function(id) {
            $timeout(function() {
               if (attrs.multi && scope.selected !== attrs.default) {
                  if (x > 0) {
                     console.log(x);
                     scope.selected = scope.selected + "," + scope.options[id];
                     x--;
                  } else {
                     //callback should be user defined
                     alert("max exceeded");
                  }
               } else {
                  scope.selected = scope.options[id];
               }
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
         list(ul, scope, attrs);
         var dropdown = angular.element(element.children()[1]);
         dropdown.append(ul);
         button.bind("click", open);
      }

      function list(ul, scope, attr) {
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
                     angular.element(this).addClass("selected");
                     if (attr.multi) {
                        angular.element(angular.element(li.children()[0]).children()[1]).toggleClass("check-mark");
                     }
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
                  var li = angular.element(this).addClass("selected");
                  angular.element(this).addClass("selected");
                  if (attr.multi) {
                     angular.element(angular.element(li.children()[0]).children()[1]).toggleClass("check-mark");
                  }
                  scope.select(index);
               });
            }
            ul.append(li);
         }
      }
   });
