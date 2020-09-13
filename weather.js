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
            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&appid=8dd0ab36dd50a97450eb53bfcb6ca7dd",
            method: "GET"

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
    // alert that the input field can't be empty
    else {
        $("#error").html("<div>City field can't be empty!</div>");
    }

}
// show the weather resutls based on its parameter
function showResults(data){
    // console.log(data)

    // display results and add weather icon
    return"<h3>"+data.name+" <img src='http://openweathermap.org/img/wn/"+data.weather[0].icon+".png'></h3>"+
        "<p>Temperature: "+data.main.temp+" &deg;C</p>"+
        "<p>Humidity: "+data.main.humidity+"</p>"+
        "<p>Wind Speed: "+data.wind.speed+"</p>";
        //"<p>UV Index: have to pay some fees

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