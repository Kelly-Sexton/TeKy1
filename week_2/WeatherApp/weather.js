$(function() {

var zip =("#textinput")

var googleUrl = ("https://maps.googleapis.com/maps/api/geocode/json?address=" + zip + "&key=AIzaSyD_GFnLVIgSuZ1ajEX4BvU3fTERUCC1qbA")

var googleUrlfortest = ("https://maps.googleapis.com/maps/api/geocode/json?address=41824&key=AIzaSyD_GFnLVIgSuZ1ajEX4BvU3fTERUCC1qbA")

var  darkSkyKey = "b7bc09fbf528eaf0b0cb02eeb7fbf8a4";

var darkSkyUrlfortest = "https://api.darksky.net/forecast/b7bc09fbf528eaf0b0cb02eeb7fbf8a4/37.8267,-122.4233"

var lat = "";

var latSeek = "results.geometry.bounds.northeast.lat";

var lng = "";

var lngSeek = "results.geometry.bounds.northeast.lng";

// var nameCity =

// var tempHigh = 

// var tempLow = 

// var chancePrecip =


$.ajax(darkSkyUrlfortest)
    .done(function (data) {
    $("#card1").append(data.currently.temperature);
});

});   
  
  
  
  
//    $.ajax("https://api.darksky.net/forecast/" + darkSkyKey + LAT + LONG, { dataType: "jsonp"}).done(function(data) {
    //    console.log(data);
//    });







// results.geometry.bounds.northeast.lat
// results.geometry.bounds.northeast.lng