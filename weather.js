$(document).ready(function () {

    // create/listen to click event for city search
    $("#submitCity").click(function () {
        return getWeather();

    });

});

function getWeather() {
    // get the value of input field
    var city = $("#city").val();
    // we want to make sure our input filed is not empty, then we can request the data
    if (city != '') {
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&unit=metric" + "&appid=8dd0ab36dd50a97450eb53bfcb6ca7dd",
            method: "GET"

        })
            // After the data from AJAX comes back, we show the weather
            .then(function (data) {
                console.log(data)

                $("#showWeather").html();

            });

    }
    // alert that the input field can't be empty
    else {
        $("#error").html("<div>City field can't be empty</div>");
    }

}

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