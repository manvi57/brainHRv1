'use strict';

var app = angular.module('app.contactUs',[]);

app.directive('contactUs',function() {
  return {
    restrict: 'AE',
    templateUrl: '/contactUs/contactUs.html'
  };
});

app.controller('contactUsController', function($http, $scope) {
});
