var app = angular.module('app', ['SelectV2']);
app.controller('basiccontroller', function($scope) {
   $scope.options = [{
      option: 'veg',
      class: 'dropdown-header'
   }, {
      option: 'vege'
   }, {
      option: 'veget',
      class: 'dropdown-header'
   }, {
      option: 'vegeta'
   }, {
      option: 'vegeta'
   }];
   $scope.catagories = ['veg', 'nonveg'];
});
