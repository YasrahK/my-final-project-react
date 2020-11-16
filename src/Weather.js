import React from 'react';

export default function Weather() {
    return (
   <div className="Weather">
     <h1> Chicago </h1>
     <div className="CurrentWeather">
        <div className="row">
          <div className="col-4">
            <i className="fas fa-sun"></i>
          </div>
          <div className="col-4">
            <span className="TempToday"> 55 </span>
            <span className="cel-fahren">
              <button className="TempC">°C</button ><button className="TempF">°F</button >
            </span>
          </div>
          <div className="col-4">
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