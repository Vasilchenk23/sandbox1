"use strict"

const weatherBlock = document.querySelector('#weather');
const searchBtn = document.querySelector('#search-btn');
const cityInput = document.querySelector('#city-input');

async function loadWeather(city) {
    weatherBlock.innerHTML = `
    <div class="center-body">
<div class="loader-circle-8">
	<svg class="circular" viewbox="25 25 50 50">
	<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"/>
	</svg>
</div>
</div>`;

    const server = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city},ua&appid=404094ce53e5052bd738194bb1647d95`;
    const response = await fetch(server);
    const responseResult = await response.json();

    if (response.ok){
        getWeather(responseResult);
    } else {
        weatherBlock.innerHTML = responseResult.message;
    }
}

function getWeather(data){
    const location = data.name;
    const temp = Math.round(data.main.temp);
    const feelLike = Math.round(data.main.feels_like);
    const weatherStatus = data.weather[0].main;
    const weatherIcon = data.weather[0].icon;

    const template = `
    <div class="weather_header">
        <div class="wether_main">
            <div class="weather_city">${location}</div>
            <div class="weather_status">${weatherStatus}</div>
        </div>
        <div class="weather_icon">
            <img src="http://openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherStatus}">
        </div>
    </div>
    <div class="weather_temp">${temp}</div>
    <div class="weather_feels-like">Feels like: ${feelLike}</div>
    `;
    weatherBlock.innerHTML = template;
}

if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        const city = cityInput.value.trim();
        if (city) {
            loadWeather(city);
        }
    });
}
