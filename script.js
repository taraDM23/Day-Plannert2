var Today = document.getElementById("currentDay");
var TableAll = document.getElementById("dayplanner");
var Savebtn = document.getElementById("save");
var AddText = document.getElementsByName("AddText");
var weather = document.getElementById("weather");











// Melb temp section
var APIKey = "166a433c57516f51dfab1f7edaed8413";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + "q=Melbourne,AU&units=imperial&appid=" + APIKey;

$.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        console.log(queryURL);
        console.log(response);
        // Converts the temp to celcius 
        var tempC = Math.round((response.main.temp - 32) * 5 / 9);
        $("#weather").text(response.name + " temperature: " + tempC + "°(C)");
    });