$(document).ready(function(){
  $('#load-screen').fadeOut(1000);
  var hd_width;
  hd_width = $('#header-container').width();
  $('#header-container').css('width', hd_width);
  var waypoints = $('#content-container').waypoint(function(direction) {
      $('#header-container').width(hd_width);
      if (direction=='down') {
        $('#header-container').animate({
          width: '153px'
        },10);
      }
      if (direction=='up') {
        $('#header-container').animate({
          width: hd_width
        },10);
      }
      $('#header-container').removeClass();
      $('#header-container').addClass('hd-' + direction);
      $('#side-menu').removeClass();
      $('#side-menu').addClass('sm-' + direction);
      $('#content-container').removeClass();
      $('#content-container').addClass('cc-' + direction);
      // console.log(direction);
    }, { offset: '140px'}
  )
});
