import React from "react";
import "./App.css";
import fetchData from "./api/fetchData";
import { useState } from "react";
import Card from "./Card";
import Spinner from "./Spinner";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const search = async (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setLoading(true);
      const data = await fetchData(inputValue);
      setWeather(data);
      setInputValue("");
      setLoading(false);
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
      {loading ? <Spinner /> : weather.main && <Card weather={weather} />}
    </div>
  );
};

export default App;
