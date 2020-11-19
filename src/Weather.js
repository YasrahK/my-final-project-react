import React, {useState} from 'react';
import axios from "axios";
import './Weather.css';


export default function Weather() {
  const[weatherData, setWeatherData] = useState(false);
  const [temperature, setTemperature]= useState(null);
  function handleResponse(response){
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setWeatherData(true);
  }

  if(weatherData){
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
        <h1> Chicago </h1>
        <h2 className="description text-capitalize">clear skies</h2>
       
        <div className="CurrentWeather">
           <div className="row">
             <div className="col-6">
               <div className="clear-fix">
               <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="Cloudy"
               className="float-left" />
             </div>
               <div className="float-left">
               <span className="TempToday"> {Math.round(temperature)} </span>
               <span className="unit"> °C|°F
               </span>
               </div>
               </div>
             <div className="col-6">
               <ul>
                <li> Humidity: 9% </li> <li> Wind: 9km/hr </li> <li> Feels like: 45</li> 
                 </ul>
             </div>
           </div>
           </div>
          
         </div>
       );
  } else {
    const apiKey="5fc324aaf951a7a1b818994b70c47e36";
    let city="London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    

    return "Loading..."
  }
 
}
   
    