$(document).ready(function() {
   // Stuff to do as soon as the DOM is ready
   var width = $(window).width(), height = $(window).height();
   if ((width <= 768)) {
       $('.visible').hide();
       $('.hidden').show();
   } else {
      $('.hidden').hide();
      $('.visible').show();
   }
});
