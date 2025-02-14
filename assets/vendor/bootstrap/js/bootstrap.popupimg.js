$(document).ready(function(){
  getelementsbyclass(small-image).click(function(){
    var path = $(this).attr('src');
    $("#large-image").attr('src'.path);
    $("#image_popup").show();
  })
  $("#close-btn").click(function(){
    $("#image_popup").hide();
  })
})