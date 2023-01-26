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
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date (response.data.time) * 1000,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      city: response.data.city,
    });
  }

function search() {
  const apiKey= "bd79ao40tde3dec118ca46bc3e6dd55f";
  let apiUrl= `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
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
          <WeatherForecast data={weatherData}/>
        </div>
      );
    } else {
      search();
      return "Loading...";
  }
}