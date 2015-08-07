  var app = angular.module('SelectV2', []);
  app.controller('basiccontroller', function ($scope) {
      $scope.options = ['abc', 'def', 'ghi'];
  });
  app.directive('selectv2', function ($timeout) {
      return {
          restrict: 'E',
          templateUrl: 'partials/select.html',
          scope: {
              options: "=options"
          },
          require: '?ngModel',
          replace: true,
          link: function (scope, elem, attrs, ngModelCtrl) {
              scope.open = function () {
                      console.log("open called");
                      if (scope.class === "open") {
                          scope.class = '';
                          return;
                      }
                      scope.class = "open";
                  }
                  //for ngmodel
              if (ngModelCtrl) {
                  $timeout(function () {
                      ngModelCtrl.$render = function () {
                          editor.setValue(ngModelCtrl.$viewValue);
                      }
                  })
              }

          }
      }
  });
