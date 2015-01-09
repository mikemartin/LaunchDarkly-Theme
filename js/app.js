// StatusPages.io indicator
var sp = new StatusPage({ pageId: '9404kdk7lkn7'});

sp.getStatus({
  success: function(data) {
    // adds the text description to the dropdown
    $('.color-description').text(data.status.description);
    // appends the status indicator as a class name so we can use the right color for the status light thing
    $('.color-dot').addClass(data.status.indicator);
  }
});

// Parallax background
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

// Change navigation bg on Scroll
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


$(document).ready(function() {
  
  if ($("#js-parallax-window").length) {
    parallax();
  }
  
  $('#js-navigation-menu').removeClass("show");

  $('#js-mobile-menu').on('click', function(e) {
    e.preventDefault();
    $('#js-navigation-menu').slideToggle(function(){
      if($('#js-navigation-menu').is(':hidden')) {
        $('#js-navigation-menu').removeAttr('style');
      }
    });
  });

});


$(window).scroll(function(e) {
  if ($("#js-parallax-window").length) {
    parallax();
  }
});


