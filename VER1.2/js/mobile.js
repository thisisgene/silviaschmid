$(document).click(function(event) {
  if($(event.target).closest('#menu-icon').length==0){

    $('#side-menu').hide(300);

  }
});

function toggleMenu() {
  $('#side-menu').toggle(300);
}
