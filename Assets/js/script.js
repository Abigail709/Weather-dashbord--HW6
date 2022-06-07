var searchFormEl = document.querySelector(".searchForm");
var citySearchEl = document.querySelector(".cityName");
var currentWeatherEl = document.querySelector("#currentWeather");
var currentResult = document.querySelector("#currentResult");
var DayCard = document.querySelector("#forecastedWeather");
var historyEl = document.querySelector("history");
var weatherApiKey = "c7216d2bb13b8839bf16abaa19d60156"

function formSubmitHandler (event) {
    event.preventDefault();


    var city = citySearchEl.value.trim();

        if (city) {
        getWeather(city);
        
         citySearchEl.value = "";
        } else {
         alert("Please enter a City name in the search bar");
        }
    };

function getWeather(city) {
    var weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city+ "&appid=" + weatherApiKey + "&units=imperial";
    
    
    
    fetch(weatherUrl)
    .then(function(response) {
            
        response.json().then(function(data) {
            displayWeather(data, city);
                
           });
    });
    
    
};

searchFormEl.addEventListener("submit", formSubmitHandler);
