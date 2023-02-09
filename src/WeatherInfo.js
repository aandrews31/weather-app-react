import React from "react"
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
        <div className="col">
            <button className="btn btn-success" id="current-location-button">
              Current
            </button>
          </div>
            <div className="cityBox">
              <h1 id="city-name">{props.data.city}<br /></h1>
              <div className="currentTemp">
                <WeatherTemperature celsius={props.data.temperature}/>
              </div>
              <img alt={props.data.description} src={props.data.iconUrl} id="icon" />
              <h1 id="time">
                <ul>
                  <li>
                <FormattedDate date= {props.data.date} />
                  </li>
                </ul>
              </h1>
              <ul>
                <li>• <span id="description">{props.data.description}</span></li>
                <li>• humidity: <span id="humidity">{props.data.humidity}</span>%</li>
                <li>• wind: <span id="wind">{props.data.wind}</span>km/hr</li>
              </ul>
            </div>
            <footer>
              <a 
              href="https://github.com/aandrews31/weather-app-react"
              alt="weather-app"
              >Open-source Code
              </a>
              <span className="matt-name">by Matt Delac</span>
            </footer>
            </div>
    );
}
