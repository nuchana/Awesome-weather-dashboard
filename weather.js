$(document).ready(function () {

    // create/listen to click event for city search
    $("#submitCity").on("click", function () {
        return getWeather();

    });

    $(".history").on("li", function () {
        return makeRow();

    });

    // get current histor if any
    var history = JSON.parse(window.localStorage.getItem("history")) || [];
    // console.log(history)
    if (history.length > 0) {
        getWeather(history[0]);

    }

    for (var i = 0; i < history.length; i++) {
        makeRow(history[i]);
    }



    function makeRow() {
        console.log(makeRow)
        var li = $("<li>").addClass("list-group-item list-group-item-action").text(text);
        $(".history").append("li");

    });
