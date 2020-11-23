import React from "react";
import FormattedDate from './FormattedDate';

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
               <img src={props.data.icon} alt={props.data.description}
               className="float-left" />
             </div>
               <div className="float-left">
               <span className="TempToday"> {Math.round(props.data.temperature)} </span>
               <span className="unit"> °C|°F
               </span>
               </div>
               </div>
             <div className="col-6">
               <ul>
                <li> Humidity: {props.data.humidity}% </li> <li> Wind: {Math.round(props.data.wind)} km/hr </li> <li> Feels like: {props.data.feels_like}</li> 
                 </ul>
             </div>
           </div>
           </div>
          
        </div>
    );
}