$(document).ready(function(){
  $(".Modal").hide();
    $(".Ghost-Blue").click(function(){
      $(".Modal").fadeToggle();
    });
    $(".Close").click(function(){
      $(".Modal").fadeOut();
    });
});
// Esc Key, hide menu.
$(document).keydown(function(e) {
if(e.keyCode == 27) {
    $(".Modal").hide(300);
}
});
