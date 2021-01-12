import React from "react";
import FormattedDate from './FormattedDate';
import WeatherIcon from "./WeatherIcon";
import CurrentTemperature from './CurrentTemperature';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Weathernfo(props){
    return(
        <div className="WeatherInfo">
                <h1> {props.data.city} </h1>
        <h2 className="description text-capitalize">{props.data.description}</h2>
        <h3> <FormattedDate date={props.data.date} /> </h3>
       
        <div className="CurrentWeather">
           <div className="row">
             <div className="col-6">
               <div className="clear-fix">
                   <div className="float-left">
                       <WeatherIcon code={props.data.icon} />
               </div>
             </div>
             <div className="temperatureDisplay">
             <CurrentTemperature celcius={props.data.temperature} />
             </div>
               </div>
             <div className="col-6">
               <ul>
                <li><FontAwesomeIcon icon="tint"/> Humidity: {props.data.humidity}%  </li> <li> <FontAwesomeIcon icon="wind"/> Wind:{Math.round(props.data.wind)} km/hr </li> <li> <FontAwesomeIcon icon="thermometer-full"/> Feels like: {Math.round(props.data.feels_like)}°</li> 
                 </ul>
             </div>
           </div>
           </div>
          
        </div>
    );
}