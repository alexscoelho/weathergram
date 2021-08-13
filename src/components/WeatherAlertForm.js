import React, { useState } from 'react';
import { useGlobalContext } from '../context';
import { WeatherAlertBadge } from './WeatherAlertBadge';

export const WeatherAlertForm = () => {
  const { alertOptions, handleAlert, loopAlert, favorites } =
    useGlobalContext();
  const [selected, setSelected] = useState('');
  const alert = alertOptions.find((option) => option.isActive);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (favorites.length == 0) return;
    handleAlert(selected);
    loopAlert();
  };

  return (
    <>
      <h2>Weather Alert</h2>
      <form onSubmit={handleSubmit}>
        <div className='d-flex mb-2'>
          <select
            className='form-control'
            id='exampleFormControlSelect1'
            onChange={(e) => setSelected(e.target.value)}
          >
            {alertOptions.map((option, index) => (
              <option key={index}>{option.value}</option>
            ))}
          </select>
          <button className='btn btn-primary my-2 my-sm-0 ml-2' type='submit'>
            Create
          </button>
        </div>
      </form>
      <WeatherAlertBadge alert={alert} />
    </>
  );
};
