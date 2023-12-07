$(function () {
  
  $('.header__btn').on('click', function() {
    $('.rightside-menu').removeClass('rightside-menu--hide')
  })
  $('.rightside-menu__close').on('click', function() {
    $('.rightside-menu').addClass('rightside-menu--hide')
  })

  $('.top__slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
  })
})