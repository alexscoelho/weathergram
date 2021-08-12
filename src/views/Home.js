import React, { useState } from 'react';
import { useGlobalContext } from '../context';

import { NavBar } from '../components/NavBar';
import { WeatherCard } from '../components/WeatherCard';
import { FavoriteList } from '../components/FavoriteList';
import { WeatherAlertForm } from '../components/WeatherAlertForm';
import { WeatherAlertModal } from '../components/WeatherAlertModal';

export const Home = () => {
  const { data, loading, isOpen } = useGlobalContext().state;

  return (
    <>
      <WeatherAlertModal />
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
            <WeatherAlertForm />
            <FavoriteList />
          </div>
        </div>
      </div>
    </>
  );
};
