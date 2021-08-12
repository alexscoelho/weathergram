import React, { useState } from 'react';
import { useGlobalContext } from '../context';

export const WeatherAlertForm = () => {
  const { alertOptions, handleAlert } = useGlobalContext();
  const [selected, setSelected] = useState('');
  const alert = alertOptions.find((option) => option.isActive);
  return (
    <>
      <form>
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
          <button
            className='btn btn-outline-success my-2 my-sm-0 ml-2'
            type='button'
            onClick={() => handleAlert(selected)}
          >
            Create
          </button>
        </div>
      </form>
      <span
        class={`btn btn-${
          alert.field === '' ? 'primary' : 'danger'
        } btn-lg btn-block mb-2`}
      >
        {alert.field === '' ? 'No Alert selected' : alert.value}
      </span>
    </>
  );
};
