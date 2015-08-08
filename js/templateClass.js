function main(attrs) {
   var template = angular.element("<div>");
   template.addClass("btn-group bootstrap-select");
   template.append(valueHolder());
   template.append(dropDown());
   return template;
}

function valueHolder() {
   var valholder = angular.element("<button>");
   valholder.addClass("btn dropdown-toggle btn-default");
   var span1 = angular.element("<span>");
   var span2 = angular.element("<span>");
   span1.addClass("filter-option pull-left");
   span1.text("hello selectv2");
   span2.addClass("caret");
   valholder.append(span1);
   valholder.append(span2);
   return valholder;
}

function dropDown() {
   var dropdown = angular.element("<div>");
   dropdown.addClass("dropdown-menu open")
   dropdown.append(searchInput());
   dropdown.append(listOfOptions());
   return dropdown;
}

function searchInput() {
   var searchinput = angular.element("<input>");
   var searchbox = angular.element("<div>");
   searchbox.addClass("bs-searchbox");
   searchinput.addClass("form-control");
   searchinput.attr("ng-model", "selectv2.searchtext");
   searchbox.append(searchinput);
   return searchbox;
}

function listOfOptions() {
   var list = angular.element("<ul>");
   list.addClass("dropdown-menu inner");
   for (var i = 0; i < 10; i++) {
      var li = angular.element("<li>");
      var span = angular.element("<span>");
      span.addClass("text");
      span.text(i);
      li.append(span);
      list.append(li);
   }
   return list;
}
