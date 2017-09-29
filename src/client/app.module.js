'use strict';

var app = angular.module('app',[
  'app.layout',
  'app.aboutUs',
  'app.clients',
  'app.services',
  'app.login',
  'ngAnimate',
]);

/*owl carousel slide show */
$(document).ready(function(){
  $('.owl-carousel').owlCarousel(
    {
      items: 1,
      autoplay: true,
      autoplayTimeout: 4000,
      lazyLoad: true,
      smartSpeed: 600,
      loop: true
    });
});
