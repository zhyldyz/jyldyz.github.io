$(document).ready(function() {
  var touch  = $('.btn-toggle');
  var menu  = $('.menu');

  $(touch).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
  });

  $(window).resize(function(){
    var w = $(window).width();
    if(w > 650 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });

});