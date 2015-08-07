  var app = angular.module('SelectV2', []);
  app.directive('selectv2', function () {
      return {
          restrict: "E",
          templateUrl: 'partials/select.html'
      }
  });
