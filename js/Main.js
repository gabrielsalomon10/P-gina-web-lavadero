$(document).ready(function() {
    $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 800
      });
});

$(document).ready(function() {
    $('.images').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
      });
});

$('.subir').click( function(e){
  e.preventDefault;
  $('html', 'body').animate({
    scrollTop: 0
  }, 500);
  return false;
});


