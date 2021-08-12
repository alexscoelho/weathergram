import React, { useState } from 'react';
import { useGlobalContext } from '../context';

export const SearchForm = () => {
  const { fetchWeatherData } = useGlobalContext();
  const [query, setQuery] = useState('');
  const handleChange = ({ target }) => {
    const isNumeric = !isNaN(target.value);
    if (target.value.trim() === '' || target.value.length < 5) return;
    setQuery(isNumeric ? { zip: target.value } : { q: target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query === '') return;
    fetchWeatherData(query);
  };
  return (
    <form className='form-inline' onSubmit={handleSubmit}>
      <input
        className='form-control mr-sm-2'
        name='search-param'
        type='search'
        onChange={handleChange}
        placeholder='Zip Code or City'
        aria-label='Search'
      />
      <button className='btn btn-outline-light my-2 my-sm-0' type='submit'>
        Search
      </button>
    </form>
  );
};
