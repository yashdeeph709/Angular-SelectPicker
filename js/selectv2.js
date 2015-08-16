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
      strVar += "         <input type=\"text\" ng-change=\"search()\" ng-model=\"searchtext\" class=\"form-control\" autocomplete=\"off\">";
      strVar += "      <\/div>";
      strVar += "   <\/div>";
      strVar += "<\/div>";
      strVar += "";
      $templateCache.put('selectv2.html', strVar);
   });
   app.directive('selectv2', function($timeout, $document) {
      //Directive Defination Object
      return {
         restrict: 'E',
         templateUrl: "selectv2.html",
         require: '?ngModel',
         scope: {
            options: "=options",
            catagories: "=catagories"
         },
         replace: true,
         link: linkFn
      }
      //Link
      function linkFn(scope, element, attrs, ngModelCtrl) {
         scope.selected = attrs.default;
         element.attr("id", Math.floor(Math.random() * 1000));
         $document.on("click", function(event) {
            var elementid = angular.element(angular.element(event.toElement).parent()).attr("id")
            var id = element.attr("id");
            if (id !== elementid) {
               element.removeClass("open");
            }
         });
         //template generator
         dropdown(scope.options, scope.catagories, attrs.livesearch, element, select);
         //waiting for model mutation and regenration
         scope.$watch(scope.options, function(oldvalue, newvalue) {
            console.log("line 35:change seen by directive in model")
            if (oldvalue !== newvalue) {
               dropdown(scope.options, scope.catagories, attrs.livesearch, element, select);
            }
         });
         //this function works for search
         scope.search = function() {
               console.log("search called" + scope.searchtext)
               var result = findMatches(scope.searchtext, scope.options);
               console.log("line 46:search called with searchtext" + scope.searchtext + "matcher resulted in");
               console.log(result);
               if (angular.isDefined(result[0])) {
                  dropdown(result, scope.catagories, attrs.livesearch, element, select);
               } else {
                  result.push("Nothing found");
                  dropdown(result, scope.catagories, attrs.livesearch, element, select);
               }
            }
            //findMatches function that searches a value with array items
         function findMatches(text, items) {
            var result = [];
            var textlen = text.length;
            for (var i = 0; i < items.length; i++) {
               console.log("checking for " + items[i].slice(0, textlen) + " and " + text);
               if (text === items[i].slice(0, textlen)) {
                  result.push(items[i]);
               }
            }
            return result;
         }
         //dropdown opening logic
         var button = angular.element(element.children()[0]);
         button.bind("click", function(e) {
            angular.element(element.children()[1]).toggleClass("bounce");
            element.toggleClass("open");
         });

         ngModelCtrl.$render = function() {
            console.log("line 36: render called by angular with " + ngModelCtrl.$viewValue);
            $timeout(function() {
               if (angular.isDefined(ngModelCtrl.$viewValue)) {
                  scope.selected = ngModelCtrl.$viewValue;
               }
            });
         }

         function select(value) {
            console.log("line 47:select called!");
            if (attrs.multi && scope.selected !== ngModelCtrl.$viewValue) {
               console.log("line 50:multi select on and not first click");
               scope.selected = scope.selected + "," + value;
            } else {
               console.log("line 65:single select is on");
               scope.selected = value;
            }
            ngModelCtrl.$setViewValue(scope.selected);
            ngModelCtrl.$render();
            element.removeClass("open");
            return true;
         }
      } //link function over
   });
   /* Templater class that hold the whole functions */
   function Templater() {}
   Templater.prototype.dropdown = dropdown;
   Templater.prototype.genList = genList;
   Templater.prototype.li = li;
   Templater.prototype.insideLi = insideLi;
   Templater.prototype.livesearch = livesearch;
   Templater.prototype.bind = bind;

   //function that generates dropdown
   function dropdown(options, catagories, search, element, select) {
      console.log("line 89:drop down render called")
      var dropdown = angular.element(element.children()[1]);
      var list = genList(options, catagories);
      livesearch(search, element);
      bind(list, select);
      angular.element(angular.element(element.children()[1]).children()[1]).remove();
      dropdown.append(list);
   }

   //function that generates unordered list
   function genList(options, catagories) {
      var ul = angular.element("<ul>");
      ul.addClass("dropdown-menu inner");
      for (var i = 0; i < options.length; i++) {
         ul.append(li(options, catagories, i));
      }
      return ul;
   }

   //FUNCTION DEDICATED FOR GENERATING LIST ITEMS AND BINDING CLICK EVENT TO THEM;
   function li(options, catagories, i) {
      var li = angular.element("<li>");
      if (angular.isDefined(catagories) && catagories.indexOf(options[i]) !== -1) {
         li.addClass("dropdown-header");
         li.append(angular.element("<span class='text'>" + options[i] + ""))
      } else {
         li.append(insideLi(options, i));
         li.attr("index", i);
      }
      return li;
   }

   function insideLi(options, i) {
      var a = angular.element("<a class='opt'>");
      a.append(angular.element("<span class='text'>" + options[i] + ""));
      a.append(angular.element("<span class='glyphicon glyphicon-ok check-mark'>"));
      return a;
   }

   function livesearch(search, element) {
      if (!search) {
         var input = angular.element(element.children()[1]);
         input.children()[0].remove();
      }
   }

   function bind(ul, select) {
      for (var i = 0; i < ul.children().length; i++) {
         var li = angular.element(ul.children()[i]);
         li.bind("click", function(e) {
            var value = angular.element(this).text();
            if (typeof select !== "function") {
               console.log("not a callback");
               return;
            }
            select(value);
         });
      }
   }
