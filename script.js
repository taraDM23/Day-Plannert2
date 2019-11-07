var Today = document.getElementById("currentDay");
var TableAll = document.getElementById("dayplanner");
var Savebtn = document.getElementById("save");
var weather = document.getElementById("weather");

// change colour based on time



// Add item to-do

function myFunction() {
    var x = JSON.parse(localStorage.getItem("mytask"));
    document.getElementById("td").innerText = x;
    //console.log("mytask", x);
}
for (i = 0; i < AddText.length; i++)

    $("#save").on("click", function(event) {
    event.preventDefault();
    var x = document.getElementById("AddText").value;
    localStorage.setItem("mytask", JSON.stringify(x))
    console.log("mytask", x);
    myFunction()

});

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
    })


//date
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

var d = new Date();
var dayName = days[d.getDay()];
var month = month[d.getMonth()];
var dayNum = d.getDate();
var year = d.getFullYear();
var date = (dayName + ", " + month + " " + dayNum + "th " + year);
document.getElementById("currentDay").innerHTML = date;