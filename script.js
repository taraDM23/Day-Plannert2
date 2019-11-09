var Today = document.getElementById("currentDay");
var TableAll = document.getElementById("dayplanner");
var weather = document.getElementById("weather");

// change colour based on time
var hour = new Date().getHours();
console.log(hour)

if (hour < 17 && hour > 9) {
    // future
    for (i = hour + 1; i <= 17; i++) {
        document.getElementById("AddText" + i).classList.add("future");
    }
    //past
    for (i = 9; i < hour; i++) {
        document.getElementById("AddText" + i).classList.add("past");
        // $("h1, h2, p").addClass("blue")  
    }
    //current
    document.getElementById("AddText" + hour).classList.add("present");
}

//Local Storage get

//var SaveData = []
function GetItem() {
    var StoredData = JSON.parse(localStorage.getItem("items"));
    if (StoredData !== null) {
        //SaveData = StoredData;
    } else console.log("Booya!")
    return StoredData;
}

//Local Storage set

for (i = 9; i <= 17; i++) {
    let SaveBtn = document.getElementById("save" + i);
    let AddText = document.getElementById("AddText" + i);

    SaveBtn.addEventListener("click", function SaveEvent() {
        console.log(this);
        // Loop through all of the input (for loop)
        // create an object 
        // { 9:'' ,10: '', 11: ''}
        // save ito localstorage
        StoredData = AddText.value;
        console.log(AddText.value)
        console.log("clicked")
        localStorage.setItem("items", JSON.stringify(StoredData));
    });
}


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

// show time for testing
//document.getElementById("test").innerHTML = d