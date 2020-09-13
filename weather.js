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
        var li = $("<li>").addClass("list-group-item list-group-item-action").text(text);
        $(".history").append("li");

    };

    function getWeather(searchValue) {
        var searchValue = $("#city").val();
        // make a request to API openweahtermap
        // console.log(searchValue)
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + searchValue + "&units=imperial" + "&appid=8dd0ab36dd50a97450eb53bfcb6ca7dd",
            method: "GET",
            dataType: "json",

        })
            // After the data from AJAX comes back, we show the weather
            .then(function (data) {
            
                //create history link for this search
                if (history.indexOf(searchValue) === -1) {
                    history.push(searchValue);
                    window.localStorage.setItem("history", JSON.stringify(history));

                    createRow(searchValue);
                }




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

