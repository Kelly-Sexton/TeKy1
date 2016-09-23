$(function() {

var zip = "41824";//add text input here

var googleUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + zip + "&key=AIzaSyD_GFnLVIgSuZ1ajEX4BvU3fTERUCC1qbA";

var  darkSkyKey = "b7bc09fbf528eaf0b0cb02eeb7fbf8a4";




  
  $.ajax(googleUrl)
    .done(function (data) {
    $().append(data.results[0].geometry.bounds.northeast.lat);

$.ajax(googleUrl)
    .done(function (data) {
    $().append(data.results[0].geometry.bounds.northeast.lng);


$.ajax("https://api.darksky.net/forecast/" + darkSkyKey + "/37.8267,-122.4233", { dataType: "jsonp"})
    .done(function (data) {
        $("#card1")
        .append("Temp" + Math.round(data.currently.temperature) + " ")
        .append("PrecipitationChance" + Math.round(data.currently.precipProbability) + " ")
        .append("MinTemp" + Math.round(data.daily.data[0].temperatureMin) + " ")
        .append("MaxTemp" + Math.round(data.daily.data[0].temperatureMax) + " ");

  


console.log(data);
});

});

});

});
