var app = angular.module('app', ['SelectV2']);
app.controller('basiccontroller', function($scope, $timeout) {
   $scope.data = {};
   $scope.data.options = ['veg', 'vege', 'veget', 'vegeta', 'nonveg', 'vegeqt', 'vegeqta', 'vegeqtsa'];
   $scope.data.catagories = ['veg', 'nonveg'];
});
