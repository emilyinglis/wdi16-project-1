ORIGINAL ATTEMPT:

$(function(){
  $("#startButton").on("click", function(){       
      var $lis = $("li");
      $.each($lis, function(index, element){
        $(element).hide(5000 * index+1);
      });
    });
});


ONE BY ONE:

$(function(){
  var $lis = $("li");
  $.each($lis, function(index, element){
    $(element).hide(5000 * index+1);
  });
});