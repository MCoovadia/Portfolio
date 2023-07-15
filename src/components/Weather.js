import React, { useState } from "react";

const WeatherApp = () => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (location.trim() !== "") {
      try {
        const apiKey = `${process.env.REACT_APP_WEATHER_KEY}`;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
          setWeather(data);
          setError("");
        } else {
          setError(data.message);
          setWeather(null);
        }
      } catch (error) {
        setError("An error occurred while fetching weather data.");
        setWeather(null);
      }
    }
  };

  return (
    <div>
      <h2>Weather App</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={handleLocationChange}
        />
        <button type="submit">Get Weather</button>
      </form>
      {weather && (
        <div>
          <h3>{weather.name}</h3>
          <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default WeatherApp;
