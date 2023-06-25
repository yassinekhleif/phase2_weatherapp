import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherInfo = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get('https://api.weatherbit.io/v2.0/current?city=Lac1&key=3ce68198f49d441a8532c9a22f175680');
        const { data } = response.data;
        const temperature = data[0].temp;
        const condition = data[0].weather.description;
        setWeatherData({ temperature, condition }); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="weather-info">
      {loading ? (
        <p>Loading weather data...</p>
        ) : error ? (
            <p>{error}</p>
          ) : (
        <div>
          <h2>Weather Information</h2>
          <p>Temperature: {weatherData?.temperature}</p>
          <p>Condition: {weatherData?.condition}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherInfo;
