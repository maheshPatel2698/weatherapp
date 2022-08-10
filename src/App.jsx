import React from "react";
import WeatherCard from "./Components/WeatherCard";
import WeatherSearch from "./Components/WeatherSearch";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/App.css"


const App = () => {
  return (
    <div>
      <WeatherSearch>
      <WeatherCard />
      </WeatherSearch>
    </div>
  );
};

export default App;
