import React from 'react';

import { useGlobalContext } from '../context';
import { AiOutlineDelete } from 'react-icons/ai';
import { kelvinToFarenheit } from './WeatherCard';

export const FavoriteList = () => {
  const { favorites, handleFavorite } = useGlobalContext();
  return (
    <>
      <h2>Favorites</h2>
      <ul className='list-group list-group-numbered'>
        {favorites.length == 0 && (
          <div className='alert alert-secondary' role='alert'>
            Favorite List is empty!!
          </div>
        )}
        {favorites.map((favorite) => {
          const { description, city, temperature, id } = favorite;
          return (
            <li
              key={id}
              className='list-group-item d-flex justify-content-between align-items-start'
            >
              <div className='ms-2 me-auto'>
                <div className='fw-bold'>{city}</div>
                {description} - {kelvinToFarenheit(temperature)}
              </div>
              <button
                className='btn btn-light'
                onClick={() => handleFavorite(favorite)}
              >
                <AiOutlineDelete />
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
