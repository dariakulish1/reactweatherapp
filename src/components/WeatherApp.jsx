import React, { useState } from 'react';
import { Searchbar } from './Searchbar';
import { BottomBar } from './BottomBar';
import { Infobar } from './Infobar';
import './style/WeatherApp.scss';

export const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [data, setData] = useState(null);
  const handleCityChange = (newCity) => {
    setCity(newCity);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=${process.env.REACT_APP_APP_ID}`,
      {
        method: 'GET',
      },
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.log('Error');
        console.log(error);
      });
  };
  return (
    <div className="App">
      <div className="divbox">
        <Searchbar onFindClick={handleCityChange} />
        <BottomBar city={city} data={data} />
        <Infobar data={data} />
      </div>
    </div>
  );
};
