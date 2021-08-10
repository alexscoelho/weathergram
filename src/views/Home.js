import React from 'react';
import { useGlobalContext } from '../context';

export const Home = () => {
  const { state, changeState } = useGlobalContext();
  return (
    <div>
      <h1>{state}</h1>
      <button
        onClick={() => changeState('Hola Mundo')}
        className='btn btn-primary'
      >
        Change Message
      </button>
    </div>
  );
};
