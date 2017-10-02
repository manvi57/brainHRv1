'use strict';

var app = angular.module('app',[
  'app.layout',
  'app.aboutUs',
  'app.clients',
  'app.services',
  'app.login',
  'app.contactUs',
  'ngAnimate'
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

/* scroll to top button functions */

window.onscroll = function() {scrollFunction();};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('bhrGoTopButton').style.display = 'block';
    } else {
        document.getElementById('bhrGoTopButton').style.display = 'none';
    }
}
