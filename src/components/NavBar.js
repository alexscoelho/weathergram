import React from 'react';

import { SearchForm } from '../components/SearchForm';

export const NavBar = () => {
  return (
    <nav className='navbar navbar-light bg-primary'>
      <a className='navbar-brand text-white logo'>WeatherGram</a>
      <SearchForm />
    </nav>
  );
};
