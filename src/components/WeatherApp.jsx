import React, { useEffect, useState } from 'react';
import { Searchbar } from './Searchbar';
import { BottomBar } from './BottomBar';
import { Infobar } from './Infobar';
import './style/WeatherApp.scss';

export const WeatherApp = () => {
  const [city, setCity] = useState('');
  const handleCityChange = (newCity) => {
    setCity(newCity);
  };
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=odesa&appid=41f68e3c835e2516f4e4e44a2aa530b2',
  );
  return (
    <div className="App">
      <div className="divbox">
        <Searchbar onFindClick={handleCityChange} />
        <BottomBar city={city} />
        <Infobar />
      </div>
    </div>
  );
};
