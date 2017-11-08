'use strict';

var app = angular.module('app.contactUs',[]);

app.directive('contactUs',function() {
  return {
    restrict: 'AE',
    templateUrl: '/contactUs/contactUs.html'
  };
});

app.controller('contactUsController', function($http, $scope) {
  $scope.saveContactInfo = function () {/*
    $http.post('/contact-us-post',{
      name: $scope.contactName,
      email: $scope.contactEmail,
      phone: $scope.contactPhone,
      message: $scope.contactMessage
    });
    console.log('post request sent');
    */
  };
});
