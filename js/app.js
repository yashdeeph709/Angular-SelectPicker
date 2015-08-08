var app = angular.module('app', ['SelectV2']);
app.controller('basiccontroller', function($scope) {
   $scope.data.options = ['veg', 'vege', 'veget', 'vegeta', 'vegeta'];
   $scope.data.catagories = ['veg', 'nonveg'];
});
