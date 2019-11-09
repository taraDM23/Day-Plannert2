var Today = document.getElementById("currentDay");
var TableAll = document.getElementById("dayplanner");
var weather = document.getElementById("weather");

// change colour based on time
var hour = new Date().getHours();
console.log(hour)

ReloadSavedData();

if (hour < 17 && hour > 9) {
    // future
    for (i = hour + 1; i <= 17; i++) {
        document.getElementById("AddText" + i).classList.add("future");
    }
    //past
    for (i = 9; i < hour; i++) {
        document.getElementById("AddText" + i).classList.add("past");
    }
    //current
    document.getElementById("AddText" + hour).classList.add("present");
}

//on click 

var values = {};

for (i = 9; i <= 17; i++) {
    let SaveBtn = document.getElementById("save" + i);
    let AddText = document.getElementById("AddText" + i);
    values[AddText.id] = AddText.value;

    SaveBtn.addEventListener("click", function SaveEvent() {
        console.log(this);

        // save it to local Storage

        values[AddText.id] = AddText.value;
        console.log(AddText.id);

        StoredData = AddText.value;
        console.log(AddText.value)
        console.log("clicked")
        localStorage.setItem("items", JSON.stringify(values));

    });
}

//Local Storage get

//var SaveData = []
function ReloadSavedData() {
    console.log("test")
    var getItem = JSON.parse(localStorage.getItem("items"));
    console.log(getItem);
    console.log(getItem.AddText9);
    if (typeof getItem.AddText9 !== 'undefined' && getItem.AddText9 !== null) {
        document.getElementById("AddText9").value = getItem.AddText9;
        console.log(getItem.AddText9)
    }
    if (typeof getItem.AddText10 !== 'undefined' && getItem.AddText10 !== null) {
        document.getElementById("AddText10").value = getItem.AddText10;
        console.log(getItem.AddText10)
    }
    if (typeof getItem.AddText11 !== 'undefined' && getItem.AddText11 !== null) {
        document.getElementById("AddText11").value = getItem.AddText11;
        console.log(getItem.AddText11)
    }
    if (typeof getItem.AddText12 !== 'undefined' && getItem.AddText12 !== null) {
        document.getElementById("AddText12").value = getItem.AddText12;
        console.log(getItem.AddText12)
    }
    if (typeof getItem.AddText13 !== 'undefined' && getItem.AddText13 !== null) {
        document.getElementById("AddText13").value = getItem.AddText13;
        console.log(getItem.AddText13)
    }
    if (typeof getItem.AddText14 !== 'undefined' && getItem.AddText14 !== null) {
        document.getElementById("AddText14").value = getItem.AddText14;
        console.log(getItem.AddText14)
    }
    if (typeof getItem.AddText15 !== 'undefined' && getItem.AddText15 !== null) {
        document.getElementById("AddText15").value = getItem.AddText15;
        console.log(getItem.AddText15)
    }
    if (typeof getItem.AddText17 !== 'undefined' && getItem.AddText17 !== null) {
        document.getElementById("AddText17").value = getItem.AddText17;
        console.log(getItem.AddText17)
    }
    if (typeof getItem.AddText16 !== 'undefined' && getItem.AddText16 !== null) {
        document.getElementById("AddText16").value = getItem.AddText16;
        console.log(getItem.AddText16)
    }
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