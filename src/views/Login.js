import React from 'react';
import { useGlobalContext } from '../context';

export const Login = () => {
  const { state, changeState } = useGlobalContext();
  return (
    <div>
      <h1>hey!</h1>
      {/* <button
        onClick={() => changeState('Hola Mundo')}
        className='btn btn-primary'
      >
        Change Message
      </button> */}
    </div>
  );
};
