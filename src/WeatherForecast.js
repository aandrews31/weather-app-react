import { Axios } from "axios";
import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
    function handleResponse(response) {
        console.log(response.data);
    }
    let apiKey = "83bda23c40od4det4576797c7cafbd4d";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${London}&key=${apiKey}`;
    Axios.get(apiUrl).then(handleResponse);
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
