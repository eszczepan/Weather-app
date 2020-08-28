import React from "react";
import "./App.css";
import fetchData from "./api/fetchData";
import { useState } from "react";
import Card from "./Card";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchData(inputValue);
      setWeather(data);
      setInputValue("");
    }
  };

  return (
    <div className="container">
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={search}
      />
      {weather.main && <Card weather={weather} />}
    </div>
  );
};

export default App;
