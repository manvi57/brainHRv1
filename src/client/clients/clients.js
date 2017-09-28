'use strict';

var app = angular.module('app.clients',[]);

app.directive('clients',function() {
  return {
    restrict: 'AE',
    templateUrl: '/clients/clients.html'
  };
});
