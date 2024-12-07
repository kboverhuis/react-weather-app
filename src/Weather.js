import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
  setWeatherData({
    ready: true,
    temperature: response.data.temperature.current,
    description: response.data.condition.description,
    wind: response.data.wind.speed,
    humidity: response.data.temperature.humidity,
    city: response.data.city,
    iconUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAdVJREFUaN7tmc1thDAQRimBElwCJVBCSvAxR5fgEiiBEiiBErhyIx24A2cc2WhiAf4ZA1rJkZ4UZZPN9/AwHrON1rr5ZJoqUAWqQBWoAlWgxJf++WaAAGZAAdpD2dfM7zDS/yopAGE6YDoIHMLIdK8KQIAWGIAtQ8Bh/r59bQWQjCBILCkSJIF1XVuAA9Jivm9ROd0ukS0AQTtgA7SH+Vn31EoEBSAMA2YUUAHiJDyWcCtBuidIArZEroJewVEpjQSJjiIgMsMbpHdjf53sCcEWSxEYCQKOyZQhkshZBZYkYEtHeLVPQSGJnHIS0QI2/FIo+L+VILTXOUVA3BD+D3Q/pAqoFIEebUxFQQLJN/Ojo0TEqDG/JgBv1hdgeVNAP4CKPSvkCKiCQc1KSMRs2+x902hO/Z4cYFhgWOQHY8zo9hOKgCCGH71BEXcqHjEBKDft5gowypVH4YeLgKE9ZSO10cxz7z7TFJqxOEUgZxyYbPi+0M4uSRuZPYCnCPBA6TwrYCWWyFbJImo/FTMpM6pAG5CYvDO0LDii7x2JNAtdSGxuQyp41Q87UqkHW8NJzYsbw+8d6Y5Hi+7qbw8IyOIPd9HRVD8qUD8fqAJVoApUgSrwqfwCJ6xaZshM+xMAAAAASUVORK5CYII="
});
  }

  if (weatherData.ready) {
 return (
   <div className="Weather">
     <form>
       <div className="row">
         <div className="col-9">
           <input
             type="search"
             placeholder="Enter a city"
             className="form-control"
             autoFocus="on"
           />
         </div>
         <div className="col-3">
           <input type="submit" value="Search" className="btn btn-primary" />
         </div>
       </div>
       <h1>{weatherData.city}</h1>
     </form>
     <ul>
       <li>Tuesday 07:00PM</li>
       <li className="text-capitalize">{weatherData.description}</li>
     </ul>
     <div className="row mt-3">
       <div className="col-6">
         <img
           src={weatherData.iconUrl}
           alt={weatherData.description}
         ></img>
         <span className="temperature">{Math.round(weatherData.temperature)}</span>
         <span className="unit">°C</span>
       </div>
       <div className="col-6">
         <ul>
           <li>Precipitation: 10%</li>
           <li>Humidity: {weatherData.humidity}%</li>
           <li>{weatherData.wind} km/h</li>
         </ul>
       </div>
     </div>
   </div>
 );
  } else {
const apiKey = "8908d7b1834oa44093b7b64af0t393f3";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;
axios.get(apiUrl).then(handleResponse);

return "Loading...";
  }
}