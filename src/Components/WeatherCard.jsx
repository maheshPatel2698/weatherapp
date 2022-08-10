import React, { Fragment } from "react";
import "../CSS/WeatherCard.css";
import { FaLightbulb, FaWater, FaCloud, FaWind } from "react-icons/fa";
import MyContext from "../Data/Context";

const WeatherCard = () => {
  return (
    <MyContext.Consumer>
      {(context) => {
        const {
          temp,
          country,
          name,
          mood,
          humidity,
          pressure,
          wind} = context.data
          
        return(

        <Fragment>
          <div className="main-body">
            <div className="icon">{context.checkmood()}</div>
            <div className="main-content">
              <div className="left-content">
                <div className="deg">{temp}&deg;</div>
                <div className="city">
                  {name} {country}
                </div>
              </div>
              <div className="right-content">
                <div className="date">{new Date().toLocaleString()}</div>
              </div>
            </div>
            <div className="bottom-data">
              <div className="mood">
                <FaLightbulb />
                {mood}
              </div>
              <div className="humidity">
                {" "}
                <FaWater /> {humidity}
              </div>
              <div className="pressure">
                <FaCloud /> {pressure}
              </div>
              <div className="wind">
                {" "}
                <FaWind /> {wind}
              </div>
            </div>
          </div>
        </Fragment>
        )
      }}
    </MyContext.Consumer>
  );
};

export default WeatherCard;
