$('document').ready(function () {
  $('.navbar').sticky()
  $(".home-banner-text, .home-banner-text small").fitText();


  $(".to-top").click(function () {
    $("body,html").animate({
      scrollTop: 0
    }, 600);
  });
  $(".to-top").hide();
  $(window).scroll(function () {
    if ($(window).scrollTop() > 250) {
      $(".to-top").show();
    } else {
      $(".to-top").hide();
    }
  });

  $(".banner-button").click(function () {
    $("body,html").animate({
      scrollTop: 900
    }, 600);
  });


});