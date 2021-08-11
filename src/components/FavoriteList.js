import React from 'react';

import { useGlobalContext } from '../context';
import { AiOutlineDelete } from 'react-icons/ai';

export const FavoriteList = () => {
  const { favorites } = useGlobalContext();
  return (
    <ul className='list-group list-group-numbered'>
      {favorites.map((favorite) => {
        const { description, city, temperature } = favorite;
        return (
          <li className='list-group-item d-flex justify-content-between align-items-start'>
            <div className='ms-2 me-auto'>
              <div className='fw-bold'>{city}</div>
              {description} - {temperature}
            </div>
            <button className='btn btn-outline-dark'>
              <AiOutlineDelete />
            </button>
          </li>
        );
      })}
    </ul>
  );
};
