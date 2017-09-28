'use strict';

var app = angular.module('app.textSlideShow', ['ngAnimate']);

app.directive('textSlideShow', function ($http) {
  return {
    restrict: 'AE',
    templateUrl: '/textSlideShow/textSlideShow.html',
    link: function(scope, element, attrs) {
      if(attrs.content) {
        scope.slideContentLink = eval(attrs.content);
      }
      else{
        scope.slideContentLink = attrs.contentLink;
        $http.get(scope.slideContentLink).then( function(response) {
              scope.slideContent = response.data;
            });
      }
      scope.slideTimeOut = attrs.timer;
      scope.slideTotal = attrs.panes;
    }
  };
});

app.controller('textSlideShowController',function($scope, $timeout, $http){

  $scope.range = function(maxRange){
    var i;
    var input = [];
    for (i=0; i<maxRange; i++){
      input.push(i);
    }
    return input;
  };

  $scope.slideInit = function(){
    $scope.slidePane = ['shownSlide'];
    $scope.slideDot = ['shownDot'];
    for (var i = 1; i < $scope.slideTotal; i++) {
      $scope.slidePane.push('hiddenSlide');
      $scope.slideDot.push('hiddenDot');
    }
    $scope.slideTimer = $timeout(function(){
    $scope.changeSlideTo(0);
    },$scope.slideTimeOut);
  };
  $scope.slideInit();

  $scope.getSlideContent = function(){
    $http.get($scope.slideContentLink).then( function(response) {
          $scope.slideContent = response.data;
    });
  };

  $scope.changeSlideTo = function(currentSlide) {
    $timeout.cancel($scope.slideTimer);
    for (var i = 0; i < $scope.slideTotal; i++) {
      $scope.slidePane[i] = 'hiddenSlide';
      $scope.slideDot[i] = 'hiddenDot';
    }
    if (currentSlide >= $scope.slideTotal) {currentSlide = 0;}
    if (currentSlide < 0) {currentSlide = $scope.slideTotal - 1;}
    $scope.slidePane[currentSlide] = 'shownSlide';
    $scope.slideDot[currentSlide] = 'shownDot';
    $scope.slideTimer = $timeout(function(){
      $scope.changeSlideTo(currentSlide+1);
    },$scope.slideTimeOut);
  };
});
