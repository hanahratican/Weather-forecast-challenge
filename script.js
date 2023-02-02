const apiKey = "249693f73f27f9589246013eae5de6eb";
//the api key gives you access to the weather api

const srchBtn = document.getElementById('searchbtn');
//variable for the search button

const inputBox = document.getElementById('citysearch');
//variable for the input box

srchBtn.addEventListener('click', function() {
    const cityname = inputBox.value;
    console.log(cityname)
    getWeatherData() 
});
//when the search button is clicked, the city name is logged to the console and the getWeatherData function is called.

function getWeatherData(city) {
    const geocodingURL = `http://api.openweathermap.org/geo/1.0/direct?q=${inputBox.value}&appid=${apiKey}`;
    fetch(geocodingURL)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        const long = data[0].lon
        console.log(long)
        const lat = data[0].lat
        console.log(lat)
        console.log(data)
        oneDayForecast(lat, long)
    })
    .catch(function(error) {
        console.log(error)
    })
}
//This function calls the geocoding API
//fetch(geocodingURL) fetches the URL stored in the variable geocodingURL
//.then is used to console.log the data from the array, specifically the latitude and the longitude

function oneDayForecast(latitude, longitude) {
    const oneDayURL =  `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
    fetch(oneDayURL)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data)
    })
    .catch(function(error) {
        console.log(error)
    })
} 
//This function calls the 5 day forecast API
//fetch(onDayURL) calls the API and returns a response from JSON 

function tempDisplay() {
    const geocodingURL = `http://api.openweathermap.org/geo/1.0/direct?q=${inputBox.value}&appid=${apiKey}`;
    fetch(geocodingURL)
    .then(function(response) {
        return response.json()
    })
    document.getElementById('temp-display').innerHTML = data;
}
//trying to get this function to display the current temperature on the webpage