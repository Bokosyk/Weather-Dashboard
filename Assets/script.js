$(document).ready(function () {

    //This is our API key
    const APIkey = "f23a679e1f1c0c137cb62393cae527e6";

    //Here we are building the URL we need to query the database
    var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=" + APIkey;

    //Returns search button
    $("#search-button").on("click", function() {
        var searchValue = $("#search-value").val()
        console.log(searchValue);

        // Clears out field after the button is clicked.
        $("#search-value").val("")

       //Pass in searchValue to searchWeather
       searchWeather(searchValue);
    });

    
    function searchWeather(searchValue) {

        //Here we run our AJAX call to the OpenWeatherMap API
        $.ajax({
            type: "GET",
            url: queryURL,
            dataType: "json", //Converts to JSON format
        })

        //We store all of the retrieved data inside of an object called "response"
        .then(function(response) {

            //Logs queryURL
            console.log(queryURL);
            
            //Logs resulting object
            console.log(response);

            //Transfers content to HTML
            $("#city").html("<h1>" + response.name + " Weather Details</h1>");
            $("#wind").text("Humidity: " + response.wind.speed);
            $("#humid").text("Humidity: " + response.main.humidity);
            
        });
    }





});