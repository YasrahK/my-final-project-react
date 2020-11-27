import React, {useState} from 'react';
import axios from "axios";
import WeatherInfo from './WeatherInfo';
import WeatherForecast from './WeatherForecast';


import './Weather.css';


export default function Weather(props) {
  const[city, setCity] = useState(props.defaultCity);
  const[WeatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response){
  
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt*1000),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      feels_like: 14,
      icon:response.data.weather[0].icon,
    });
  

  }
  function handleSubmit(event){
    event.preventDefault();
    search(city);
  }
  function handleCityChange(event){
    setCity(event.target.value);
  }
  function search(){
    const apiKey="5fc324aaf951a7a1b818994b70c47e36";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if(WeatherData.ready){
    return (
      <div className="Weather">
        <form className="search-engine" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
          <input 
          type="search"
          placeholder="Enter a city..."
          className="form-control"
          autoFocus="on"
          onChange={handleCityChange}
          />
          </div>
          <div className="col-3">
           <input type="button" value="search" className="btn btn-primary w-100" /></div>
           <div className="col-3">
           <input type="button" value="📍" className="btn btn-primary w-100" /></div>
           </div>
        </form>
    <WeatherInfo data={WeatherData} />
    <WeatherForecast city={WeatherData.city} />
         </div>
       );
  } else {
    search();
    return "Loading..."
  }
 
}
   
    