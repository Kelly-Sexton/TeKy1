$(function() {

var zip =("#textinput")

var googleUrl= "https://maps.googleapis.com/maps/api/geocode/json?address=" + zip + "&key=AIzaSyD_GFnLVIgSuZ1ajEX4BvU3fTERUCC1qbA
")

var var darkSkyKey = "<your key here>";

var LAT = "";

var LONG = "";
   
$.ajax(googleUrl)
    .done(function (data) {
    $(data.LAT, data.LONG).append(LAT, LONG);
});
   
   $.ajax("https://api.darksky.net/forecast/" + b7bc09fbf528eaf0b0cb02eeb7fbf8a4 + LAT + LONG, { dataType: "jsonp"}).done(function(data) {
       console.log(data);
   });




});




