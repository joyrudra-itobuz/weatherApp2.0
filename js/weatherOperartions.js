console.log("Weather Operations Working!");
const userInputLocation = document.querySelector(".user-location-input");
let currentWeatherIcon = document.querySelector(".current-weather-icon");

const weatherApi = async () => {
  const location =
    "http://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=" +
    userInputLocation.value +
    "&aqi=no";

  const response = await fetch(location).then(
    (response) => {
      return response.json();
    },
    (err) => {
      return err;
    }
  );
  return response;
};

//Weather Operations

const mainTemp = document.querySelector(".temp-here");
const dateArea = document.querySelector(".date-here");
const weatherCondition = document.querySelector(".weather-condition");
const windSpeed = document.querySelector(".wind-here");
const feeslLike = document.querySelector(".feels-like-here");
const humidity = document.querySelector(".humidity-here");
let date = new Date();
date = date.toString();
// console.log("Date Now : ", date.substring(0, 24)); //till23

const getWeatherData = () => {
  weatherApi()
    .then((response) => {
      console.log(response);
      mainTemp.innerHTML = response.current.temp_c;
      weatherCondition.innerHTML = response.current.condition.text;
      getWeatherIcon(weatherCondition.innerHTML);
      let date = new Date();
      date = date.toString();
      dateArea.innerHTML = date.substring(0, 24);
      windSpeed.innerHTML = response.current.wind_kph + " km/h";
      feeslLike.innerHTML = response.current.feelslike_c;
      humidity.innerHTML = response.current.humidity + "%";
    })
    .catch((err) => {
      userInputLocation.value = "Please Enter a Valid Location";
      setTimeout(() => {
        userInputLocation.value = "Kolkata";
        getWeatherData();
      }, 5000);
      console.log(err);
    });
};

const getWeatherIcon = (condition) => {
  condition = condition.toString();
  const conditionLowerCase = condition.toLowerCase();

  if (condition === "Overcast") {
    let weatherIcon = document.querySelector(".overcast-icon");
    weatherIcon.classList.toggle("hidden");
    weatherIcon.classList.toggle("current-weather-icon");
    currentWeatherIcon.classList.toggle("hidden");
    currentWeatherIcon.classList.toggle("current-weather-icon");
    currentWeatherIcon = weatherIcon;
  } else if (condition === "Clear") {
    let weatherIcon = document.querySelector(".sunny-icon");
    weatherIcon.classList.toggle("hidden");
    weatherIcon.classList.toggle("current-weather-icon");
    currentWeatherIcon.classList.toggle("hidden");
    currentWeatherIcon.classList.toggle("current-weather-icon");
    currentWeatherIcon = weatherIcon;
  } else if (condition === "Mist") {
    console.log("Mist Called");
    let weatherIcon = document.querySelector(".sun-cloud-icon");
    weatherIcon.classList.toggle("hidden");
    weatherIcon.classList.toggle("current-weather-icon");
    currentWeatherIcon.classList.toggle("hidden");
    currentWeatherIcon.classList.toggle("current-weather-icon");
    currentWeatherIcon = weatherIcon;
  } else if (condition === "Sunny") {
    let weatherIcon = document.querySelector(".sunny-icon");
    weatherIcon.classList.toggle("hidden");
    weatherIcon.classList.toggle("current-weather-icon");
    currentWeatherIcon.classList.toggle("hidden");
    currentWeatherIcon.classList.toggle("current-weather-icon");
    currentWeatherIcon = weatherIcon;
  }

  if (conditionLowerCase.includes("rain")) {
    let weatherIcon = document.querySelector(".rain-icon");
    weatherIcon.classList.toggle("hidden");
    weatherIcon.classList.toggle("current-weather-icon");
    currentWeatherIcon.classList.toggle("hidden");
    currentWeatherIcon.classList.toggle("current-weather-icon");
    currentWeatherIcon = weatherIcon;
  } else if (conditionLowerCase.includes("cloud")) {
    let weatherIcon = document.querySelector(".cloudy-icon");
    weatherIcon.classList.toggle("hidden");
    weatherIcon.classList.toggle("current-weather-icon");
    currentWeatherIcon.classList.toggle("hidden");
    currentWeatherIcon.classList.toggle("current-weather-icon");
    currentWeatherIcon = weatherIcon;
  } else if (conditionLowerCase.includes("thunder")) {
    let weatherIcon = document.querySelector(".thunderstorm-icon");
    weatherIcon.classList.toggle("hidden");
    weatherIcon.classList.toggle("current-weather-icon");
    currentWeatherIcon.classList.toggle("hidden");
    currentWeatherIcon.classList.toggle("current-weather-icon");
    currentWeatherIcon = weatherIcon;
  }
};

const userInputBox = document.querySelector(".user-location-input");

userInputBox.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    getWeatherData();
  }
});

setInterval(() => {
  let date = new Date();
  date = date.toString();
  dateArea.innerHTML = date.substring(0, 24);
}, 1000);

(async () => {
  getWeatherData();
})();
