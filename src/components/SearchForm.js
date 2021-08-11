import React, { useState } from 'react';
import { useGlobalContext } from '../context';

export const SearchForm = () => {
  const { fetchWeatherData } = useGlobalContext();
  const [query, setQuery] = useState('');
  const handleChange = ({ target }) => {
    const isNumeric = !isNaN(target.value);
    setQuery(isNumeric ? { zip: target.value } : { q: target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData(query);
  };
  return (
    <form className='form-inline' onSubmit={handleSubmit}>
      <input
        className='form-control mr-sm-2'
        name='search-param'
        type='search'
        onChange={handleChange}
        placeholder='Search by Zip Code or City'
        aria-label='Search'
      />
      <button className='btn btn-outline-success my-2 my-sm-0' type='submit'>
        Search
      </button>
    </form>
  );
};
