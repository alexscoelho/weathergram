import React from 'react';

import { SearchForm } from '../components/SearchForm';

export const NavBar = () => {
  return (
    <nav className='navbar navbar-light bg-light'>
      <a className='navbar-brand'>WeatherGram</a>
      <SearchForm />
    </nav>
  );
};
