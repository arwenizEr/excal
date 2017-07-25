sQuery('.owl-stage-outer .owl-item:not(.cloned):first .item a img').attr('src', '//i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/bluray%2530indirim.jpg')

var owl = $('.owl-carousel');
owl.trigger('destroy.owl.carousel');

owl.html(owl.find('.owl-stage-outer').html()).removeClass('owl-loaded');

owl.owlCarousel({
 items: 1,
 navigation : true,
 nav: true,
 navText : ["",""],
 loop: true,
})
