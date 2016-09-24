$(function () {
    // var darkSkyKey = "b7bc09fbf528eaf0b0cb02eeb7fbf8a4";
    var googleUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=";
//    $("zipButton").click(function(ev){
        // var zip = $("#zipBox").val();
        var zip = "41824";
        $.ajax(googleUrl + zip + "&key=AIzaSyD_GFnLVIgSuZ1ajEX4BvU3fTERUCC1qbA")
        .done(function(data){
        var lat = "" ;
        var lng = "" ;
        $(lat).append(data.results[0].geometry.bounds.northeast.lat)
        $(lng).append(data.results[0].geometry.bounds.northeast.lng)
        
    $.ajax("https://api.darksky.net/forecast/b7bc09fbf528eaf0b0cb02eeb7fbf8a4/37.8267,-122.4233",
    { dataType: "jsonp"})
    .done(function(data) {
        $("#card1")
        .append("Temp" + Math.round(data.currently.temperature) + " ")
        .append("PrecipitationChance" + Math.round(data.currently.precipProbility) + " ")
        .append("MinTemp" + Math.round(data.daily.data[0].temperatureMin) + " ")
        .append("MaxTemp" + Math.round(data.daily.data[0].temperatureMax) + " ");
        })
    })
});
