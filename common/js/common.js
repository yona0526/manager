$(document).ready(function(){
  
  $('.room_list_wrap').hide();
  $(".book_calendar td").click(function(){
    $(".room_list_wrap").toggle();
  });
  

  $(".menu").hide();

  $(".btn_menu").click(function(){
    $(".menu").fadeToggle(200);
  });

  $(".btn_close").click(function(){
    $(this).parent().hide();
  });

});