import './Searchbar.scss';
import React, { useState } from 'react';

export const Searchbar = ({ onFindClick }) => {
  const [inputText, setInputText] = useState('');
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  const handleFindClick = () => {
    onFindClick(inputText);
  };
  return (
    <div className="title">
      <h1 className="weather">Weather</h1>
      <form>
        <input
          className="searching"
          type="text"
          name="City"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Write city..."
        />
      </form>
      <button className="Find" type="button" onClick={handleFindClick}>
        Find
      </button>
      <hr className="hr" />
    </div>
  );
};
