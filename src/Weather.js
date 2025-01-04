import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
  setWeatherData({
    ready: true,
    coordinates: response.data.coordinates,
    temperature: response.data.temperature.current,
    description: response.data.condition.description,
    wind: response.data.wind.speed,
    humidity: response.data.temperature.humidity,
    city: response.data.city,
    date: new Date(response.data.time * 1000),
    icon: response.data.condition.icon,
  });
  }

  function search() {
const apiKey = "8908d7b1834oa44093b7b64af0t393f3";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
axios.get(apiUrl).then(handleResponse);
  }

function handleSubmit(event) {
  event.preventDefault();
  search();
}

function handleCityChange(event) {
setCity(event.target.value);
}

  if (weatherData.ready) {
 return (
   <div className="Weather">
     <form onSubmit={handleSubmit}>
       <div className="row">
         <div className="col-9">
           <input
             type="search"
             placeholder="Enter a city"
             className="form-control"
             autoFocus="on"
             onChange={handleCityChange}
           />
         </div>
         <div className="col-3">
           <input type="submit" value="Search" className="btn btn-primary" />
         </div>
       </div>
     </form>
     <div>
       <WeatherInfo data={weatherData} />
       <WeatherForecast coordinates={weatherData.coordinates}/>
     </div>
   </div>
 );
  } else {
search();
return "Loading...";
  }
}