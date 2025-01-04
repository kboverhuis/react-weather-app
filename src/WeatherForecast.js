import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
function handleResponse(response) {
console.log(response.data);
}

  let apiKey = "8908d7b1834oa44093b7b64af0t393f3";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;    
  let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
  
  axios.get(apiUrl).then(handleResponse);

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