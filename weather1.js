$(document).ready(function () {

    // create/listen to click event for city search
    $("#submitCity").on("click", function () {
        return getWeather();

    });

    $(".history").on("li", function () {
        return getWeather();

    });


    // function makeRow() {
    //     console.log(makeRow)
    //     var li = $("<li>").addClass("list-group-item list-group-item-action").text(text);
    //     $(".history").append("li");

    // }

    function getWeather(data) {
        // get the value of input field
        var city = $("#city").val();
        var li = $("<li>").addClass("list-group-item list-group-item-action").text();
        $(".history").append("li");

        // we want to make sure our input filed is not empty, then we can request the data
        if (city != '') {
            $.ajax({
                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric=imperial" + "&appid=8dd0ab36dd50a97450eb53bfcb6ca7dd",
                method: "GET",
                dataType: "json",

            })
                // After the data from AJAX comes back, we show the weather
                .then(function (data) {
                    //console.log(data)
                    var weatherResults = showResults(data)
                    // pass the result into showWeather id
                    $("#showWeather").html(weatherResults);
                   


                    // empty the input field
                    $("#city").val('');



                });

        }
       

    }
    // show the weather resutls based on its parameter
    function showResults(data) {
        // console.log(data)

        // display results and add weather icon
        return "<h3>" + data.name + " <img src='http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png'></h3>" +
            "<p>Temperature: " + data.main.temp + " &deg;C</p>" +
            "<p>Humidity: " + data.main.humidity + "</p>" +
            "<p>Wind Speed: " + data.wind.speed + "</p>";
        //"<p>UV Index: have to pay some fees

    }

    // get current histor if any
    var history = JSON.parse(window.localStorage.getItem("history")) || [];
    // console.log(history)
    if (history.length > 0) {
        getWeather(history[0]);
        
    }

    for (var i = 0; i < history.length; i++) {
        makeRow(history[i]);
    }



});




// var queryURL = "api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}"

// // importing JS file

// // call local storage if we save anything 

// // create on click event for search
//     // grab information from the input from query URL
//     // store information from input into local storage
//     // make query URL
//     // we can make ajax call

// // after we get info back from API
//     // update current city information
//     // look at API call (might be another call)