import axios from "axios";
import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }
    let city = props.data.city;
    let apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (
        <div className="WeatherForecast">
        <div className="row">
            <div className="col">
                <div className="WeatherForecast-day">
                Thu 
                </div>
                &#9788;
                <div className="WeatherForecast-temperatures">
                <span className="WeatherForecast-temperature-max">19°</span>
                <span className="WeatherForecast-temperature-min">10°</span>
                </div>
            </div>
        </div>
    </div>
    )
}
