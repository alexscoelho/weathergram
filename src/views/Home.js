import React, { useState } from 'react';
import { useGlobalContext } from '../context';

import { NavBar } from '../components/NavBar';

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
    </>
  );
};
