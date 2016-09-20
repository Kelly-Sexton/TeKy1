// $(document).ready(

// or

//   $function(){

// //   });
    $(function(){
      
      $("#para").click(function() {
        //  $("#para")
        $(this).fadeOut('slow','linear'); 
      });

 

  $("h3").css("text-decoration","underline");
//   ("h3").find(".list)")
//     .css("font-weight", "normal");

// $("ul li:first-child")
$("ul").find("li:first-child")
  .css("color", "red");


  });

//   $(function(){

//    $("#para").click(function() {
//        //$("#para")
//        $(this).fadeOut('slow','linear');
//    });

// });


$(function() {
    
$("#add").click(function(ev) {
    $("ul").append("<li>Item2")
})


    $("ul").click(function(ev) {
        $(ev.target).parent
    $("ul").append("li")

$("#name").blur(function() {
    var nam = ;
    alert("Hello, " + name);

});


})

