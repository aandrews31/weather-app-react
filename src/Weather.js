import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <div className="">
        <div className="cityBox">
          <h1 id="city-name">City Name<br /></h1>
          <div>
            <span href="" id="temp">29</span>
            <span href="" id="celsius">°C</span>
            <img className="weather-icon" alt="&#9788;" src="" id="icon" />
          </div>
          <h1 id="time">Formatted Time</h1>
          <ul>
            <li>• <span id="description">Weather Description</span></li>
            <li>• Humidity: <span id="humidity"></span>%</li>
            <li>• Wind: <span id="wind"></span>km/hr</li>
          </ul>
        </div>
      </div>
      <footer><copyright
      ><a
        href="https://github.com/aandrews31/weather-app-react"
        target="_blank"
        >Open-source Code </a
      >
      <a class="matt-name">by Matt Delac</a></copyright
    ></footer>
  </div>
  );
}