var app = angular.module('app', ['SelectV2']);
app.controller('basiccontroller', function ($scope) {
    $scope.options = ['abc', 'def', 'ghi'];
});
