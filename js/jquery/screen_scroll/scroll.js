// source: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll

$(document).ready(function() {
  $("a").on('click', function(e) {
    if (this.hash !== '') {
      e.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});
