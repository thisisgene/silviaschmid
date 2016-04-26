var preload = function(src, callback) {
  // Create a temporary image.
  var img = new Image();

  // Invoke the callback as soon as the image is loaded
  // Has to be set **before** the .src attribute. Otherwise
  // `onload` could fire before the handler is set.
  $(img).load(callback);

  img.src = src;
};

$(document).ready(function(){
  $('#load-screen').fadeOut(1000);
  var hd_width;
  hd_width = $('#header-container').width();
  $('#header-container').css('width', hd_width);
  var waypoints = $('#content-container').waypoint(function(direction) {
    console.log($('#header-container').css('width'));

    // $('#header-container').width(hd_width);
    if (direction=='down') {
      console.log($('#header-container').css('width'));
      $('#header-container').width(hd_width).delay(10).animate({
        width: '153px'
      },100);
      console.log($('#header-container').width());
    }
    if (direction=='up') {
      console.log($('#header-container').width());
      $('#header-container').width(hd_width);
    }
    $('#header-container').removeClass();
    $('#header-container').addClass('hd-' + direction);
    $('#side-menu').removeClass();
    $('#side-menu').addClass('sm-' + direction);
    $('#content-container').removeClass();
    $('#content-container').addClass('cc-' + direction);
    // console.log(direction);
    // $('#header-container').css('width', 'auto');
  }, { offset: '140px'})

  // Example usage:

  $("body").addClass("loading-background");
  var bImage = 'img/background1.jpg';

  preload(bImage, function() {
    $("body").addClass("background-loaded");
    $("body").css('backgroundImage','url('+bImage+')');
    console.log($("body").css('backgroundImage'));
  });


});
