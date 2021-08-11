import React, { useState } from 'react';
import { useGlobalContext } from '../context';

import { NavBar } from '../components/NavBar';
import { WeatherCard } from '../components/WeatherCard';

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
      {!!data && <WeatherCard {...data} />}
    </>
  );
};
