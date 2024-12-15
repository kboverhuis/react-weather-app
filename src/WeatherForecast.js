import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Mon</div>
          <WeatherIcon code="clear-sky-day" />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">6° </span>
            <span className="WeatherForecast-temperature-min">2°</span>
          </div>
        </div>
      </div>
    </div>
  );
}