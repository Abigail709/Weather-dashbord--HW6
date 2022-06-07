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

var displayWeather = function(weather, citySearch) {

    currentWeatherEl.textContent = "";
    currentResult.textContent = citySearch.toUpperCase();

    
    var currentDate = document.createElement("div")
    var weatherIcon = document.createElement("img")
    var tempEl = document.createElement("div");
    var humidityEl = document.createElement("div");
    var windSpeedEl = document.createElement("div");

    tempEl.classList = "list-group-item"
    humidityEl.classList = "list-group-item";
    windSpeedEl.classList = "list-group-item";



    currentDate.textContent=" (" + moment(weather.dt.value).format("M/D/YY") + ") ";
    tempEl.textContent = "Current Temp: " + Math.round(weather.main.temp) + " °F";
    humidityEl.textContent = "Humidity: " + Math.round(weather.main.humidity) + " %";
    windSpeedEl.textContent = "Wind Speed: " + Math.round(weather.wind.speed) + " MPH";


    weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);