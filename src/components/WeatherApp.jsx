import React, { useState } from 'react';
import { Searchbar } from './Searchbar';
import { BottomBar } from './BottomBar';
import { Infobar } from './Infobar';
import './style/WeatherApp.scss';

export const WeatherApp = () => {
  const [city, setCity] = useState('');
  const handleCityChange = (newCity) => {
    setCity(newCity);
  };
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
