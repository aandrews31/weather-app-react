import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
  <div className="Weather">
    <form id="whole-searchbar">
        <div class="row">
          <div class="col-10">
            <input
              id="city-input"
              class="searchbar"
              type="search"
              placeholder="Change City..."
            />
          </div>
          <div class="col-2">
            <input type="submit" value="Search" class="btn btn-primary w-100" />
          </div>
        </div>
      </form>
      <div class="col-12">
        <button class="btn btn-success w-25" id="current-location-button">
          Current
        </button>
      </div>
      <div class="row">
        <div class="cityBox col">
          <h1 id="city-name">City Name<br /></h1>
          <div>
            <a id="temp"> </a><a href="#" id="celsius" class="active">Temp °C</a>
            <img src="" id="icon" />
          </div>
          <h1 id="time">Formatted Time</h1>
          <ul>
            <li>• <span id="description">Weather Description</span></li>
            <li>• Humidity: <span id="humidity"></span>%</li>
            <li>• Wind: <span id="wind"></span>km/hr</li>
          </ul>
        </div>
      </div>
      <div class="weather-forecast" id="forecast">Five-Day Forecast</div>
  </div>
  );
}