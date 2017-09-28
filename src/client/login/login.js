'use strict';

// angular.module('app.login', ['ngResource','ngCookies'])
var app = angular.module('app.login',[]);
app.directive('login',function(){
          return{
          restrict:'AE',
          templateUrl: 'login/login.html'
        };
      });
app.controller('loginController',function($scope)
        {
          $scope.title = "Login"
          // $scope.login = function(){
          //
          // }
        });



// app.service('getData',fucntion(){
//         this.getData = function(){
//             $http({
//                 method: 'GET',
//                 url: 'http://localhost:'
//             }).success(function(data){
//                 return data;
//             }).error(function(){
//                 alert("error")})
//         }
//   });
//
// app.service('',function(){
//
// });
//
// app.service('validate',fucntion(){
//
// });
