/**
 * statuspage.io indicator
 */

var sp = new StatusPage({ pageId: '9404kdk7lkn7'});

sp.getStatus({
  success: function(data) {
    $('.color-description').text(data.status.description);
    $('.color-dot').addClass(data.status.indicator);
  }
});


/**
 * parallax backgrounds
 * used on homepage and careers
 */
function parallax(){
  if( $("#js-parallax-window").length > 0 ) {
    var plxBackground = $("#js-parallax-background");
    var plxWindow = $("#js-parallax-window");

    var plxWindowTopToPageTop = $(plxWindow).offset().top;
    var windowTopToPageTop = $(window).scrollTop();
    var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;

    var plxBackgroundTopToPageTop = $(plxBackground).offset().top;
    var windowInnerHeight = window.innerHeight;
    var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
    var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
    var plxSpeed = 0.35;

    plxBackground.css('top', - (plxWindowTopToWindowTop * plxSpeed) + 'px');
  }
}

/**
 * change nav background on scroll
 */
(function() {
  var $b = $('body');
  var $w = $(window);
  var priced = false;
  var $sd = $('.scrolldown');
  var is = {
    top: undefined,
  };
  
  $(window).scroll(function() {
    var st = $w.scrollTop();

    var is_top = (st <= 14);
    if(is_top != is.top) {
      $b.toggleClass('scrolled', !is_top);
      is.top = is_top;
    }

  }).trigger('scroll');

})();

/**
 * smooth scroll for page anchors
 */
(function (jQuery) {
  jQuery.mark = {
    jump: function (options) {
      var defaults = {
        selector: 'a.scroll-on-page-link'
      };
      if (typeof options == 'string') defaults.selector = options;
      var options = jQuery.extend(defaults, options);
      return jQuery(options.selector).click(function (e) {
        var jumpobj = jQuery(this);
        var target = jumpobj.attr('href');
        var thespeed = 1000;
        var offset = jQuery(target).offset().top;
        jQuery('html,body').animate({
          scrollTop: offset
        }, thespeed, 'swing')
        e.preventDefault();
      })
    }
  }
})(jQuery);



$(document).ready(function() {
  
  if ($("#js-parallax-window").length) {
    parallax();
  }

  
  $('.js-menu-trigger,.js-menu-screen').on('click touchstart',function (e) {
    $('.navigation-menu').toggleClass('is-visible');
    e.preventDefault();
  });



  
  
  $.mark.jump();

});


$(window).scroll(function(e) {
  if ($("#js-parallax-window").length) {
    parallax();
  }
});


