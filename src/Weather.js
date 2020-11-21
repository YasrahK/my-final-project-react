import React, {useState} from 'react';
import axios from "axios";
import FormattedDate from './FormattedDate';
import './Weather.css';


export default function Weather(props) {
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
      icon:"https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
    });
  

  }

  if(WeatherData.ready){
    return (
      <div className="Weather">
        <form className="search-engine">
          <div className="row">
            <div className="col-6">
          <input 
          type="search"
          placeholder="Enter a city..."
          className="form-control"
          autoFocus="on"
          />
          </div>
          <div className="col-3">
           <input type="button" value="search" className="btn btn-primary w-100" /></div>
           <div className="col-3">
           <input type="button" value="📍" className="btn btn-primary w-100" /></div>
           </div>
        </form>
        <h1> {WeatherData.city} </h1>
        <h2 className="description text-capitalize">{WeatherData.description}</h2>
        <h3> <FormattedDate date={WeatherData.date} /> </h3>
       
        <div className="CurrentWeather">
           <div className="row">
             <div className="col-6">
               <div className="clear-fix">
               <img src={WeatherData.icon} alt={WeatherData.description}
               className="float-left" />
             </div>
               <div className="float-left">
               <span className="TempToday"> {Math.round(WeatherData.temperature)} </span>
               <span className="unit"> °C|°F
               </span>
               </div>
               </div>
             <div className="col-6">
               <ul>
                <li> Humidity: {WeatherData.humidity}% </li> <li> Wind: {Math.round(WeatherData.wind)} km/hr </li> <li> Feels like: {WeatherData.feels_like}</li> 
                 </ul>
             </div>
           </div>
           </div>
          
         </div>
       );
  } else {
    const apiKey="5fc324aaf951a7a1b818994b70c47e36";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    

    return "Loading..."
  }
 
}
   
    