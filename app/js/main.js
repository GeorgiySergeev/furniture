$(function () {

  $(".header__btn").on("click", function () {
    $(".rightside-menu").removeClass("rightside-menu--close");
  });
$(".rightside-menu__close").on("click", function () {
    $(".rightside-menu").addClass("rightside-menu--close");
  });

  $('.top__slider').slick({
    dots:true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2500,
  });

  
 var mixer = mixitup ('.gallery__inner', {
  load: {
    filter: '.bedroom'
}
 } )

 
});
 
//var mixitup = require('.galley__inner');