import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ready: false});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: "Wednesday 07:00",
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      iconUrl: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-night.png",
      city: response.data.name
    });
  }

  if (weatherData.ready) {
    return (
        <div className="Weather">
          <form>
            <div className="row">
                <div className="col-9">
                  <input
                  className="form-control"
                  type="search"
                  placeholder="Change City..."
                  />
                </div>
                <div className="col-3">
                  <input type="submit" value="Search" className="btn btn-primary w-100" />
                </div>
            </div>
          </form>
          <div className="col">
            <button className="btn btn-success" id="current-location-button">
              Current
            </button>
          </div>
            <div className="cityBox">
              <h1 id="city-name">{weatherData.city}<br /></h1>
              <div className="currentTemp">
                  <span id="temp">{weatherData.temperature}</span>
                  <span id="celsius">°C</span>
                  <img alt={weatherData.description} src={weatherData.iconUrl} id="icon" />
              </div>
              <h1 id="time">Formatted Time</h1>
              <ul>
                <li>• <span id="description">{weatherData.description}</span></li>
                <li>• humidity: <span id="humidity">{weatherData.humidity}</span>%</li>
                <li>• wind: <span id="wind">{weatherData.wind}</span>km/hr</li>
              </ul>
            </div>
            <copyright>
              <a 
              href="https://github.com/aandrews31/weather-app-react"
              alt="weather-app"
              >Open-source Code
              </a>
              <span className="matt-name">by Matt Delac</span>
            </copyright>
        </div>
      );
    } else {
    const apiKey= "83bda23c40od4det4576797c7cafbd4d";
    let city= "London";
    let apiUrl= `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "loading...";
  }
}