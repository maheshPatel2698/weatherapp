import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import {
  WiCloudy,
  WiSmoke,
  WiSunrise,
  WiRain,
  WiDayHaze,
} from "react-icons/wi";
import axios from "axios";
import "../CSS/WeatherSearch.css";
import MyContext from "../Data/Context";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
toast.configure();
const WeatherSearch = (props) => {
  const [WeatherData, setWeatherData] = useState({});
  const [country, setCountry] = useState("mumbai");
  const getData = async () => {
    const MyApi = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${process.env.REACT_APP_API_KEY}`;
    try {
      const myData = await axios.get(MyApi);
      console.log(myData)
      const { temp } = myData["data"]["main"];
      const { country } = myData["data"]["sys"];
      const name = myData["data"]["name"];
      const mood = myData["data"]["weather"][0].main;
      const { humidity } = myData["data"]["main"];
      const { pressure } = myData["data"]["main"];
      const wind = myData["data"]["wind"].speed;
      var Weather = {
        temp,
        country,
        name,
        mood,
        humidity,
        pressure,
        wind,
      };
      setWeatherData(Weather);
      setCountry("");
    } catch (error) {
      return toast.error(
        "Please Enter valid Country Name or Check Internet Connection ",
        {
          position: "top-center",
          autoClose: 2000,
        }
      );
    }
  };

  const CheckMood = () => {
    if (WeatherData.mood) {
      switch (WeatherData.mood) {
        case "Smoke":
          return <WiSmoke className="icons" />;

        case "Clouds":
          return <WiCloudy className="icons" />;
        case "Clear":
          return <WiSunrise className="icons" />;
        case "Rainy":
          return <WiRain className="icons" />;
        case "Haze":
          return <WiDayHaze className="icons" />;
        default:
          <WiSunrise className="icons" />;
          break;
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="searchbar">
      <input
        className="s"
        type="text"
        placeholder="Search Your City Here"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <button onClick={() => getData()} className="btn btn-primary" id="b">
        {" "}
        <FaSearch /> Search
      </button>
      <MyContext.Provider
        value={{
          data: WeatherData,
          checkmood: CheckMood,
        }}
      >
        {props.children}
      </MyContext.Provider>
    </div>
  );
};

export default WeatherSearch;
