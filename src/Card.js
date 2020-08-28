import React from "react";
import "./Card.css";

const Card = ({ weather }) => {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();

  return (
    <div className="card">
      <div className="card__header">
        <h3>Current weather </h3>
        <p>
          {hours < 10 ? `0${hours}` : hours}:
          {minutes < 10 ? `0${minutes}` : minutes}
          {hours < 13 ? " AM " : " PM"}
        </p>
      </div>

      <div className="card__city">
        <h2>{weather.name}</h2>
        <div className="card__city-temp">
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
          <h1>
            {Math.round(weather.main.temp)}
            <sup>&deg;</sup>
            <span>C</span>
          </h1>
        </div>
      </div>

      <h4>
        Real feel {Math.round(weather.main.feels_like)} <sup>&deg;</sup>
        <span>C</span>
      </h4>

      <div className="card__details">
        <div className="card__details-1">
          <p>
            Min. temperature
            <span>
              {Math.round(weather.main.temp_min)}
              <sup>&deg;</sup>
              <span>C</span>
            </span>
          </p>

          <p>
            Wind <span>{weather.wind.speed} mph</span>
          </p>

          <p>
            Cloud Cover <span>{weather.clouds.all}%</span>
          </p>
          <p>
            Sunrise
            <span>
              {new Date((weather.sys.sunrise + weather.timezone) * 1000)
                .toISOString()
                .substr(11, 5)}
            </span>
          </p>
        </div>
        <div className="card__details-2">
          <p>
            Max. temperature
            <span>
              {Math.round(weather.main.temp_max)}
              <sup>&deg;</sup>
              <span>C</span>
            </span>
          </p>

          <p>
            Pressure <span>{weather.main.pressure}.0 mbar</span>
          </p>

          <p>
            Visibility
            <span>
              {weather.visibility / 1000}
              {weather.visibility / 1000 < 10 ? " mile" : " miles"}
            </span>
          </p>
          <p>
            Sunset
            <span>
              {new Date((weather.sys.sunset + weather.timezone) * 1000)
                .toISOString()
                .substr(11, 5)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
