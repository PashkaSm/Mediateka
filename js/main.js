$(document).ready(function ($) {

  $('.open').on('click', function (e) {
    $('.wrapper-items').toggle("slow", function () {
      $('arrow').css({ transform: 'rotate(90)' });
    });
  });
  $( window ).resize(function() {
    if ($( window ).width()>760)
    {
      $('.itemsNavbar').show()
    }
  });
  
  $('.burger').on('click', function (e) {
    $('.itemsNavbar').toggle("slow", function () {
      $('arrow').css({ transform: 'rotate(90)' });
    });
    $('.burger').toggleClass("active");
  });

  $('.itemNavbar').click(function () {
    $('.itemNavbar').each(function () {
      $(this).removeClass("active")
    })
    $(this).toggleClass("active")
  });
});