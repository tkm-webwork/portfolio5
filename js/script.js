/*==========================================
# drawer header
===========================================*/
jQuery(function(){
  jQuery('#js-icon').on('click',function(e){
    e.preventDefault();
    jQuery(this).toggleClass('is-active');
    jQuery('#js-drawer').toggleClass('is-active');
    jQuery('#js-bg').toggleClass('is-active');
    jQuery('#js-logo').toggleClass('is-active');
  
    return false;
  });
});

/*==========================================
# smooth scroll
===========================================*/
jQuery(function(){
  jQuery('a[href^="#"]').click(function() {
    // .headerクラスがついた要素の高さを取得
    let header = jQuery(".header").innerHeight();
    let speed = 300;
    let id = jQuery(this).attr("href");
    let target = jQuery("#" == id ? "html" : id);
    // トップからの距離からヘッダー分の高さを引く
    let position = jQuery(target).offset().top - header;
    // その分だけ移動すればヘッダーと被りません
    jQuery("html, body").animate(
      {
        scrollTop: position
      },
      speed
    );
    return false;
  });
});

/*==========================================
# header opacity change
===========================================*/
// 参考URL
// https://webcat.work/header-color-change/
var mvh = jQuery('.top').height();

$(window).scroll(function() {
  var top = jQuery(window).scrollTop();
  if (mvh < top) {
    jQuery('.header').css('background-color', 'rgba(255,255,255,0.8)');
    } else {
    jQuery('.header').css('background-color', 'rgba(255,255,255,0.2)');
  }
});

/*==========================================
# accordion faq
===========================================*/
jQuery(function(){
  jQuery('.js-accordion').click(function() {
    jQuery(this).next().slideToggle(300);
    jQuery(this).children('.faq-icon').toggleClass( 'is-open' );
  });
});

/*==========================================
# slick results
===========================================*/
jQuery(function(){
  jQuery('#js-slick').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
});

/*==========================================
# submit color change
===========================================*/
jQuery(function(){
  let $submit = $( '#js-submit')
  $( '#js-form input' ).on( 'change', function(){
    if(
      $( '#js-form input[type="text"]' ).val() !== "" && true
    ) {
      // 全て入力されたとき
      $submit.prop( 'disabled', false )
      $submit.addClass( '-active' )
    } else {
      // 入力されていないとき
      $submit.prop( 'disabled', true )
      $submit.removeClass( '-active' )
    }
  });
});
