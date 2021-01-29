$(document).ready(function () {

    //This is our API key
    const APIkey = "f23a679e1f1c0c137cb62393cae527e6";

    //Returns search button
    $("#search-button").on("click", function () {

        //Define searchValue
        var searchValue = $("#search-value").val()
        console.log(searchValue);

        // Clears out field after the button is clicked.
        $("#search-value").val("")

        //Pass in searchValue to searchWeather
        searchWeather(searchValue);
    });


    function searchWeather(searchValue) {

        //Here we are building the URL we need to query the database
        var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=" + APIkey;

        //Here we run our AJAX call to the OpenWeatherMap API
        $.ajax({
            type: "GET",
            url: queryURL,
            dataType: "json", //Converts to JSON format
            success: function (response) {

            //We store all of the retrieved data inside of an object called "response"


            //Logs queryURL
            console.log(queryURL);

            //Logs resulting object
            console.log(response);

            //Shows icon
            var weatherIcon = response.weather[0];
            var iconURL = "https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";

            //Transfers content to HTML
            $("#city").html("<h1>" + response.name + " Weather Details</h1>");
            $("#wind").text("Humidity: " + response.wind.speed);
            $("#humid").text("Humidity: " + response.main.humidity);

        }});
    }





});