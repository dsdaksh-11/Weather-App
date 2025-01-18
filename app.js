const url="https://api.openweathermap.org/data/2.5/weather?q=germany&appid=0c4db3ae7498b5d31c7c4e589810bb05&units=metric";

const city = document.querySelector(".searchbar input");
const search = document.querySelector(".searchbar svg");
const cityName = document.querySelector("#city");
const temp = document.getElementById("temp");
const windSpeed = document.querySelector(".wind");
const speed = windSpeed.querySelector("#d");
const Humid = document.querySelector(".humidity");
const temper = document.querySelector(".temperature");
const humidity = Humid.querySelector("#d");
const aqi = document.querySelector(".aqi");
const feelsLike = aqi.querySelector("#d");
const weatherIcon = document.querySelector(".weather-icon");

search.addEventListener("click", async(evt)=>{
    evt.preventDefault();
    console.log(city.value);


    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=0c4db3ae7498b5d31c7c4e589810bb05&units=metric`;
    let response = await fetch(url);
    var data = await response.json();
    console.log(data);

    temper.style.display = "flex";
    windSpeed.style.display = "flex";
    aqi.style.display = "flex";
    Humid.style.display = "flex";

    temp.innerText = data.main.temp + "°C";
    speed.innerText = data.wind.speed + " km/h";
    humidity.innerText = data.main.humidity + " %";
    cityName.innerText = city.value.toUpperCase() ;
    feelsLike.innerText = data.main.feels_like + "°C";

    let d = new Date();
    let n = d.getHours();

    if(data.weather[0].main == "Clear"){
        if (n>=20){
            weatherIcon.src = "clear-night.svg";
        } else {
            weatherIcon.src = "68747470733a2f2f626d63646e2e6e6c2f6173736574732f776561746865722d69636f6e732f76332e302f66696c6c2f7376672f636c6561722d6461792e737667.svg";
        }
    } else if (data.weather[0].main == "Clouds"){
        weatherIcon.src = "cloudy.svg";
    } else if (data.weather[0].main == "Snow"){
        weatherIcon.src = "snow.svg";
    } else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "rain.svg";
    } else if (data.weather[0].main == "Thunderstorm"){
        weatherIcon.src = "thunderstorms-extreme.svg";
    } else if (data.weather[0].main == "Haze"){
        weatherIcon.src = "haze.svg";
    } else if (data.weather[0].main == "Smoke"){
        weatherIcon.src = "smoke.svg";
    } else {
        weatherIcon.src = "overcast-day-fog.svg";
    }


})
