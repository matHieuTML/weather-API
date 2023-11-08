"use strict";

const key = "3cff5c5329fafec53f16e1cc163bc643";
let ville = document.getElementById("ville"),
    temperature = document.getElementById("temperature"),
    weather = document.getElementById("weather"),
    iconWeather = document.getElementById("iconWeather")
;

navigator.geolocation.getCurrentPosition(success, error);
  
function success(position) {
    console.dir(position);
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric&lang=fr`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        ville.innerHTML = data.name;
        temperature.innerHTML = `${data.main.temp}°C`;

        iconWeather.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    }
    );

}

function error(err) {
console.error(`ERREUR (${err.code}): ${err.message}`);
}
