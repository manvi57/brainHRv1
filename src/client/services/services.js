'use strict';

var app = angular.module('app.services',[]);

app.directive('services',function() {
  return {
    restrict: 'AE',
    templateUrl: '/services/services.html'
  };
});
