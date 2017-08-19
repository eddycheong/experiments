// source: https://www.w3schools.com/howto/howto_js_accordion.asp

$(document).ready(function() {
  $(".accordion-header-div, .accordion-header-button").click(function() {

    $(this).next().slideToggle(350);
  });
});
