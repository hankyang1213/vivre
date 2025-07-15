$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
        responsive:{
            0:{
            items:1
            },
            600:{
            items:1
            },
        }
})

$(function () {
  $('.bars').click(function (e) {
    e.preventDefault();
    $('.bars').toggleClass('active');
    $('.slider').slideToggle();
  });
});
