$(document).ready(function () {

    // create/listen to click event for city search and history
    $("#submitCity").on("click", function () {
        return getWeather();

    });

    $(".history").on("li", function () {
        return createRow();

    });

    // when history list click, function makeRow is called
    function createRow(searchValue) {

        console.log(searchValue)
        var li = $("<li>").addClass("list-group-item list-group-item-action").text(searchValue);
        $(".history").append(li);

    };

    function getWeather(searchValue) {
        var searchValue = $("#city").val();
        // make a request to API openweahtermap
        // console.log(searchValue)
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + searchValue + "&units=imperial" + "&appid=8dd0ab36dd50a97450eb53bfcb6ca7dd",
            method: "GET",

        })
            // After the data from AJAX comes back, we show the weather
            .then(function (data) {
            
                //create history link for this search
                if (history.indexOf(searchValue) === -1) {
                    history.push(searchValue);
                    window.localStorage.setItem("history", JSON.stringify(history));

                    createRow(searchValue);
                }

                // clear any old content
                $("#today").empty();

                // create html content for today weather
                var card = $("<div>").addClass("card");
                var body = $("<div>").addClass("card-body");
                var title = $("<h3>").addClass("card-title").text(data.name);
                var image = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png");
                var temp = $("<p>").addClass("card-text").text("Temperature: " + data.main.temp + "F");
                var humidity = $("<p>").addClass("card-text").text("Humidity: " + data.main.humidity +"%");
                var wind = $("<p>").addClass("card-text").text("Wind Speed: " + data.wind.speed + "MPH");

                // merge and add to the page
                card.append(body);
                title.append(image);
                body.append(title, temp, humidity, wind);
                $("#today").append(card);
               

            });

    }


    // get current histor if any
    var history = JSON.parse(window.localStorage.getItem("history")) || [];
    // console.log(history)
    if (history.length > 0) {
        getWeather(history[0]);
    }

    for (var i = 0; i < history.length; i++) {
        createRow(history[i]);
    }

});

