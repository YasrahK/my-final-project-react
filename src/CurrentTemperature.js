import React, {useState} from "react";

export default function CurrentTemperature(props){
    const[unit, setUnit]= useState("celcius");

    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function showCelcius(event){
        event.preventDefault();
        setUnit("celcius");
    }
    function fahrenheit(){
        return(props.celcius *9)/5+32;
    }
    if (unit === "celcius") {
    return(
        <div className="CurrentTemperature">
        <div className="float-left">
        <span className="TempToday"> {Math.round(props.celcius)} </span>
        <span className="unit"> °C| <a href="/" onClick={showFahrenheit}>°F
        </a>
        </span>
        </div>
        </div>
        )
    } else {
        return(
        <div className="CurrentTemperature">
        <div className="float-left">
        <span className="TempToday"> {Math.round(fahrenheit())} </span>
        <span className="unit"><a href="/" onClick={showCelcius} > °C </a>| °F 
        </span>
        </div>
        </div>
        )
        }
    }