// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
// $(document).foundation();




$(function(){

  // MENU-TRIGGER
  $('.menu-trigger').click(function(e) {
    e.preventDefault();

    $('body').toggleClass('main-menu-opened');
    $(this).toggleClass('active');
  });




  if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
  }



  // STICKY HEADER

  var $blockStickyMode = 0;

  $(document).on('scroll', function() {
    if (!$blockStickyMode) {
      setHeaderSticky();
    }
  });
  $('body').on('scroll', function() {
    if (!$blockStickyMode) {
      setHeaderSticky();
    }
  });

  setHeaderSticky();

  function setHeaderSticky() {
    var st = $(document).scrollTop();
    if (st == 0) st = $(window).scrollTop();
    // console.log(
    //   '.inner-content' + '::'+$('.inner-content').scrollTop()+
    //   ', .page-container' + '::'+$('.page-container').scrollTop()+
    //   ', .page-content' + '::'+$('.page-content').scrollTop()+
    //   ', body' + '::'+$('body').scrollTop()+
    //   ', html' + '::'+$('html').scrollTop()+
    //   ', window' + '::'+$(window).scrollTop()+
    //   ', document' + '::'+$(document).scrollTop());

    if (st > 0) {
      $('body').addClass('header-sticky');
      if (st >= $(window).height() - 90) {
        $('body').addClass('after-1-screen');
      } else {
        $('body').removeClass('after-1-screen');
      }
    } else {
      $('body').removeClass('after-1-screen header-sticky');
    }
  }




});