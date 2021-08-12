import React, { useState, useContext } from 'react';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const [favorites, setFavorites] = useState([
    // {
    //   description: 'cloud sky',
    //   city: 'Caracas',
    //   humidity: '70',
    //   temperature: '70',
    // },
  ]);

  const [alertOptions, setAlertOptions] = useState([
    {
      value: 'select a weather alert',
      isActive: true,
      field: '',
    },
    {
      value: 'Weather Condition Changes',
      isActive: false,
      field: 'description',
    },
    {
      value: 'Temperature Chages',
      isActive: false,
      field: 'temperature',
    },
    {
      value: 'Humidity Changes',
      isActive: false,
      field: 'humidity',
    },
  ]);

  const handleAlert = (alert) => {
    const newOptions = alertOptions.map((option) => {
      if (option.value === alert) {
        option.isActive = true;
        return option;
      } else {
        option.isActive = false;
        return option;
      }
    });
    setAlertOptions(newOptions);
  };

  const compareData = (newData, favorite) => {
    const field = alertOptions.find((option) => option.isActive).field;

    console.log('newdata', newData[field]);
    console.log('favorite', favorite[field]);
  };

  const findAlertMatch = () => {
    favorites.map((favorite) => {
      const query = {
        lon: favorite.lon,
        lat: favorite.lat,
      };
      fetchWeatherData(query).then((result) => {
        const newData = {
          description: result.weather[0].description,
          temperature: result.main.temp,
          humidity: result.main.humidity,
        };
        compareData(newData, favorite);
      });
    });
  };

  const handleFavorite = (favoriteObject) => {
    const found = favorites.find(
      (favorite) => favorite.id === favoriteObject.id
    );
    if (found) {
      const newFavorites = favorites.filter(
        (favorite) => favorite.id !== favoriteObject.id
      );
      setFavorites(newFavorites);
    } else {
      setFavorites([...favorites, favoriteObject]);
    }
  };

  const fetchWeatherData = (query) => {
    setState({ ...state, loading: true });
    const qs =
      query !== undefined
        ? Object.keys(query)
            .map((key) => `${key}=${query[key]}`)
            .join('&')
        : '';
    return fetch(
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
        return data;
      });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        fetchWeatherData,
        favorites,
        handleFavorite,
        alertOptions,
        handleAlert,
        findAlertMatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
