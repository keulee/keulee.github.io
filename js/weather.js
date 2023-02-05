const header = document.querySelector(".header-flex");
const cityDiv = document.querySelector(".city");
const spanLocation = cityDiv.querySelector("span");
const weatherDiv = document.querySelector(".weather");
const imgIcon = weatherDiv.querySelector("img");
const spanWeather = weatherDiv.querySelector("span");

const API_KEY = "557b1e725e465a995268925388fc740b";

cityDiv.hidden = true;
weatherDiv.hidden = true;

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  //   console.log("You live in", lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  //   console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const country = data.sys.country;
      const city = data.name;
      const weather = data.weather[0].main;
      //   const id = data.weather[0].id;
      const icon = data.weather[0].icon;
      const temp = data.main.temp;
      const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      //   console.log(country, city, weather, temp, icon);

      spanLocation.innerText = `${country}, ${city}`;
      imgIcon.src = iconURL;

      spanWeather.innerText = `${data.main.temp}°C, ${weather}`;
    })
    .finally(() => {
      cityDiv.hidden = false;
      weatherDiv.hidden = false;
    });
}

function onGeoError() {
  alert("Can't find you. No weather available");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
