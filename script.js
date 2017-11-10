$(function() {
   $('.press-down').click (function() {
     $('html, body').animate({scrollTop: $('section.flex-container').offset().top }, 'slow');
     return false;
   });
 });
