var app = angular.module('app', ['SelectV2']);
app.controller('basiccontroller', function($scope) {
   $scope.data = {};
   $scope.data.options = ['veg', 'vege', 'veget', 'vegeta', 'vegetsa', 'vegeqt', 'vegeqta', 'vegeqtsa'];
   $scope.data.catagories = ['veg', 'nonveg'];
});
