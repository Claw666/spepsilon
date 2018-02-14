$(function() {
   
    var selectedClass = "";
    $(".fil-cat").click(function(){ 
    selectedClass = $(this).attr("data-rel"); 
     $("#portfolio").fadeTo(100, 0.1);
    $("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-anm');
      $(".tile").children("p").fadeIn();
      $("#portfolio").fadeTo(300, 1);
    }, 300); 
    
  });
});