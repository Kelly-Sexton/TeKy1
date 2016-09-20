// function addListItem() {
//     var b = $("new-text").val();
//     $("#todolist").append('<li> '+b+' <button>Delete</button</li>');
//     $("#new-text").val();
// }

// $(function() {
//     $("#add").on('click', addListItem);
// });

// // $)document).ready(function(){

// // })

$(function() {
    $("button#add").click(function(ev){
        var newcar = $("newcar").val();
        $("#list").append("<li>" + newCar + "</li>")
        (newCar).val("");

  

  });

});