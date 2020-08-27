import React from "react";
import "./App.css";
import fetchData from "./api/fetchData";
import { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchData(inputValue);
      setWeather(data);
      setInputValue("");
      console.log(data);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={search}
      />
      {weather.main && (
        <div>
          <h2>{weather.name}</h2>
          <p>Temp. {weather.main.temp}</p>
          <p>Real feel {weather.main.feels_like}</p>
          <p>Min. temp {weather.main.temp_min}</p>
          <p>Max. temp {weather.main.temp_max}</p>
        </div>
      )}
    </div>
  );
};

export default App;
