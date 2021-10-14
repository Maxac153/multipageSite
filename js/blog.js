$(document).ready(function(){
    $(".work").slice(0, 4).show();
    $("#loadMore").on("click", function(e){
      e.preventDefault();
      $(".work:hidden").slice(0, 4).slideDown();
      if($(".work:hidden").length == 0) {
        $("#loadMore").text("No Content").addClass("noContent");
      }
    });
    
  })