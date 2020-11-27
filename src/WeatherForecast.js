
import React, { useState } from "react";
import axios from "axios";

import ForecastPreview from "./ForecastPreview";
import  "./WeatherForecast.css";

export default function WeatherForecast(props) {
const[loaded, setLoaded] = useState(false);
const[forecast, setForecast] = useState(null);

    function handleForecastResponse(response) {
        setForecast(response.data);
        setLoaded(true);
       
    }
    if(loaded && props.city===forecast.city.name) {
    return(
        <div className="WeatherForecast row">
            <ForecastPreview data={forecast.list[0]} />
            <ForecastPreview data={forecast.list[1]} />
            <ForecastPreview data={forecast.list[2]} />
            <ForecastPreview data={forecast.list[3]} />
            <ForecastPreview data={forecast.list[4]} />
            <ForecastPreview data={forecast.list[5]} />
           </div>
    );
} else {
    let apiKey = "5fc324aaf951a7a1b818994b70c47e36";
    let url= `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);
    return "Newyork";
}
}