import React from 'react';

import { FiSun } from 'react-icons/fi';
import { GrFavorite } from 'react-icons/gr';

export const WeatherCard = ({ weather, name, main }) => {
  const weatherData = () => {
    return {
      description: weather[0].description,
      city: name,
      humidity: main.humidity,
      temperature: main.temp,
    };
  };
  const { description, city, humidity, temperature } = weatherData();

  return (
    <div className='card' style={{ width: '18rem' }}>
      <div className='d-flex justify-content-between'>
        <FiSun size={70} />
        <h2 className='align-self-center'>{temperature}</h2>
      </div>
      <div className='card-body'>
        <h5 className='card-title text-center'>{description}</h5>
        <p className='card-text text-center'>{city}</p>
        <p className='card-text text-center'>Humidity {humidity}%</p>
        <button className='btn btn-outline-light'>
          <GrFavorite />
        </button>
      </div>
    </div>
  );
};
