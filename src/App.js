import React from "react";
import './App.css';
import Weather from './Weather';
import "./Fontawesome";

function App() {
  return (
    <div className="App">
      <div className="container">
   <div className="WeatherApp row">
     <div className="col">
     <Weather defaultCity="New York" />
     </div>
    </div>
    <footer>
      Project coded by 
      <a href="https://www.linkedin.com/in/yasrah-kapadia-12841196/" target="_blank" rel="noopener noreferrer"> Yasrah Kapadia </a>and is open-sourced on
      <a href="https://github.com/YasrahK/my-final-project-react" target="_blank" rel="noopener noreferrer"> Git-hub</a>
    </footer>
    </div>
    </div>
   
  );
}

export default App;
