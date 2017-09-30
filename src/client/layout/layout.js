'use strict';

var app = angular.module('app.layout',['smoothScroll', 'ngDialog']);

app.controller('layoutController',function($scope, ngDialog){
  $scope.openLoginPage = function () {
    ngDialog.open({
      template: 'login/login.html',
      className: 'ngdialog-theme-default'
    });
  };
});

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
