import React, { useState, useEffect } from 'react';
import rainIcon from './img/rain.png';
import mapIcon from './img/map.png';
import cloudyIcon from './img/cloudy.png';
import snowIcon from './img/snow.png';
import sunnyIcon from './img/sunny.png';
import stormIcon from './img/storm.png';
import waterIcon from './img/water.png';
import windIcon from './img/wind.png';

function App() {
  const [location, setLocation] = useState("dholakpur");
  const [data, setData] = useState({});
  const [weatherIcon, setIcon] = useState(sunnyIcon);
  const API_KEY = '';

  const handleSearch = async () => {
    const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
    let weather_data = await fetch(BASE_URL);
    let data = await weather_data.json();
    setData(data);
    const weatherCondition = data.weather ? data.weather[0].main.toLowerCase() : '';
    setIcon(getIcon(weatherCondition));
  };

  const handleInputChange = (event) => {
    setLocation(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const temperature = data.main?.temp ? Math.round(data.main.temp - 273.15) : '...';
  const wind_speed = data.wind?.speed ? `${data.wind.speed} km/h` : '...';
  const humidity = data.main?.humidity ? `${data.main.humidity}%` : '...';
  const weather_condition = data.weather ? data.weather[0].main : '...';
  const cityName = data.name || '...';

  function getIcon(condition) {
    switch (condition) {
      case 'rain':
        return rainIcon;
      case 'clouds':
        return cloudyIcon;
      case 'snow':
        return snowIcon;
      case 'clear':
        return sunnyIcon;
      case 'haze':
        return cloudyIcon;
      case 'mist':
        return cloudyIcon;
      case 'drizzle':
        return rainIcon;
      case 'thunderstorm':
        return stormIcon;
      default:
        return sunnyIcon;
    }
  }

  return (
    <div className="bg-eggplant h-screen flex items-center justify-center">
      <div className="bg-lightpurple_thing w-1/2 h-3/4 rounded-xl p-8 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-freeman text-mint_cream text-center mb-6">
          Weather App
        </h1>
        <div className="flex items-center w-full max-w-md mb-4">
          <input
            type="text"
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="rounded-l-xl p-3 w-full italic"
            placeholder="Enter city name..."
          />
          <button type="button" onClick={handleSearch}>
            <img
              src={mapIcon}
              alt="Map Icon"
              className="w-12 h-12 bg-grey_thing rounded-r-xl ml-1"
            />
          </button>
        </div>
        <div className="text-2xl text-mint_cream font-freeman mb-2">
          {cityName}
        </div>
        <div className="text-lg text-mint_cream font-freeman mb-1">
          {weather_condition}
        </div>
        <div className="text-lg text-mint_cream font-freeman mb-4">
          {temperature}°C
        </div>
        <div className="text-center">
          <img
            src={weatherIcon}
            alt="Weather Icon"
            className="mx-auto w-20 h-20 mb-4"
          />
        </div>
        <div className="text-lg text-mint_cream font-freeman mb-3">
          Wind: {wind_speed}
        </div>
        <div className="text-lg text-mint_cream font-freeman mb-1">
          Humidity: {humidity}
        </div>
      </div>
    </div>
  );
}

export default App;
