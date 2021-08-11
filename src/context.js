import React, { useState, useContext } from 'react';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const [favorites, setFavorites] = useState([
    {
      description: 'cloud sky',
      city: 'Caracas',
      humidity: '70',
      temperature: '70',
    },
  ]);

  const fetchWeatherData = (query) => {
    setState({ ...state, loading: true });
    const qs =
      query !== undefined
        ? Object.keys(query)
            .map((key) => `${key}=${query[key]}`)
            .join('&')
        : '';
    fetch(
      `${process.env.REACT_APP_API_URL}/weather${query ? '?' + qs : ''}&appid=${
        process.env.REACT_APP_API_KEY
      }`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setState({
          loading: false,
          error: null,
          data,
        });
      });
  };

  return (
    <AppContext.Provider value={{ state, fetchWeatherData, favorites }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
