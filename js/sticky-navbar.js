// Basic sticky navbar component 
$(document).ready(function() {

  // Select DOM element with "data-toggle" set to "sticky-navbar"
  $('[data-toggle="sticky-navbar"]').each(function() {

    // When the element is no longer visible due to page scroll, 
    // move it to the top of the screen
    var stickyToggle = function(navbar, navbarWrapper, scrollElement) {
      if (scrollElement.scrollTop() >= navbarWrapper.offset().top){
        navbarWrapper.height(navbar.outerHeight());
        navbar.addClass("is-sticky");
      } else{
        navbar.removeClass("is-sticky");
        navbarWrapper.height('auto');
      }
    };

    // Wrapper to maintain offset from top of window
    var navbar = $(this),
        navbarWrapper = $('<div>').addClass('sticky-navbar-wrapper');

    navbar.before(navbarWrapper).addClass('sticky');
    
    // On page load
    stickyToggle(navbar, navbarWrapper, $(window));

    // On "scroll" event
    $(window).on('scroll.sticky-navbar resize.sticky-navbar', function() {
      stickyToggle(navbar, navbarWrapper, $(this));
    });
  });
});