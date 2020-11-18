import React from 'react';

export default function Weather() {
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
     <div className="CurrentWeather">
        <div className="row">
          <div className="col-6">
            <div className="clear-fix">
            <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="Cloudy"
            className="float-left" />
          </div>
          </div>
            <div className="float-left">
            <span className="TempToday"> 55 </span>
            <span className="unit">°C|°F
            </span>
            </div>
        
          <div className="col-6">
            <p>
              {" "}
              Humidity: 9% <br /> Wind: 9km/hr <br /> Feels like: 45{" "}
            </p>
          </div>
        </div>
        <h3 className="description">Clear Skies</h3>
      </div>
   </div>
    )
}