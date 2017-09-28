'use strict';

var app = angular.module('app.layout',[]);

app.directive('bhrBanner',function() {
  return {
    restrict: 'AE',
    templateUrl: '/layout/bhrBanner.html'
  };
});

app.directive('contentNavBar',function() {
  return {
    restrict: 'AE',
    templateUrl: '/layout/contentNavBar.html'
  };
});

app.directive('socialNavBar',function() {
  return {
    restrict: 'AE',
    templateUrl: '/layout/socialNavBar.html'
  };
});
