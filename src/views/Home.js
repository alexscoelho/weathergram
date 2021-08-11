import React, { useState } from 'react';
import { useGlobalContext } from '../context';

import { NavBar } from '../components/NavBar';
import { WeatherCard } from '../components/WeatherCard';
import { FavoriteList } from '../components/FavoriteList';

export const Home = () => {
  const { data, loading } = useGlobalContext().state;

  return (
    <>
      <NavBar />
      {loading && (
        <div class='alert alert-primary' role='alert'>
          Loading...
        </div>
      )}
      <div className='container'>
        <div className='row'>
          <div className='col-sm'>{!!data && <WeatherCard {...data} />}</div>
          <div className='col-sm'>
            <FavoriteList />
          </div>
        </div>
      </div>
    </>
  );
};
