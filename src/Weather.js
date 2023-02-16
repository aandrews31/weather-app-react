import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      iconUrl: response.data.weather[0].icon,
      city: response.data.name,
    });
  }

function search() {
  let apiKey = "9e55ce91de1e84df9f3dbe33f9c2133a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return "loading...";
}

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);

  }

  if (weatherData.ready) {
    return (
        <div className="Weather">
          <div className="cityBox">
          <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-9">
                  <input
                  className="form-control"
                  type="search"
                  placeholder="Change City..."
                  onChange={handleCityChange}
                  />
                </div>
                <div className="col-3">
                  <input type="submit" value="Search" className="btn btn-primary w-100" />
                </div>
            </div>
          </form>
          <WeatherInfo data={weatherData}/>
          <WeatherForecast coordinates={weatherData.coordinates}/>
          <footer>
              <a 
              href="https://github.com/aandrews31/weather-app-react"
              alt="weather-app"
              >Open-source Code
              </a>
              <span className="matt-name"> by Matt Delac</span>
            </footer>
            </div>
        </div>
      );
    } else {
      search();
      return "Loading...";
  }
}