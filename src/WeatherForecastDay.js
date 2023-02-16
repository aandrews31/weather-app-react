import React from "react";

export default function WeatherForecastDay(props) {
    console.log(props.data);
    function maxTemperature() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }
    function minTemperature() {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`;
    }
    function day() {
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon","Tue","Wed","Thu","Fri","Sat"];
        return days[day];
    }
return (
    <div>
        <div className="WeatherForecast-day">${day(props.data.time)}</div>
        <img alt={props.data.description} src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
        id="icon"/>
        <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">Hellos{maxTemperature()}°</span>
        <span className="WeatherForecast-temperature-min">{minTemperature()}°</span>
        </div>
    </div>
    );
}