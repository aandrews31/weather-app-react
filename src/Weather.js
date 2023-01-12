import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
  <div className="Weather">
    <form id="whole-searchbar">
        <div className="row">
          <div className="col-10">
            <input
              id="city-input"
              className="searchbar"
              type="search"
              placeholder="Change City..."
            />
          </div>
          <div className="col-2">
            <input type="submit" value="Search" className="btn btn-primary w-100" />
          </div>
        </div>
      </form>
      <div className="col-12">
        <button className="btn btn-success w-25" id="current-location-button">
          Current
        </button>
      </div>
      <div className="row">
        <div className="cityBox col">
          <h1 id="city-name">City Name<br /></h1>
          <div>
            <a id="temp"> </a><a href="#" id="celsius" className="active">Temp °C</a>
            <img alt="icon" src="" id="icon" />
          </div>
          <h1 id="time">Formatted Time</h1>
          <ul>
            <li>• <span id="description">Weather Description</span></li>
            <li>• Humidity: <span id="humidity"></span>%</li>
            <li>• Wind: <span id="wind"></span>km/hr</li>
          </ul>
        </div>
      </div>
      <div className="weather-forecast" id="forecast">Five-Day Forecast</div>
  </div>
  );
}