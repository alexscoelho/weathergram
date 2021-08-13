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
    //   cacheKey: { q: 'Doral' },
    //   city: 'Doral',
    //   description: 'sunny',
    //   temperature: 310,
    //   humidity: 79,
    // },
  ]);

  const [alertModal, setAlertModal] = useState({
    message: '',
    isOpen: false,
  });

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

  // action when user selects an alert
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

  const hasUpdated = (newData, favorite) => {
    const field = alertOptions.find((option) => option.isActive).field;
    return newData[field] !== favorite[field];
  };

  // cache, determine if any change on favorites
  const findAlertMatch = () => {
    const field = alertOptions.find((option) => option.isActive).field;
    favorites.forEach((favorite) => {
      getFetch(favorite.cacheKey).then((result) => {
        const newData = {
          description: result.weather[0].description,
          temperature: result.main.temp,
          humidity: result.main.humidity,
        };
        if (hasUpdated(newData, favorite)) {
          favorite[field] = newData[field];
          setAlertModal({
            message: `${favorite.city}'s weather ${field} has changed`,
            isOpen: true,
          });
          setFavorites(
            favorites.map((fav) => {
              if (fav.id === favorite.id) {
                favorite[field] = newData[field];
                return favorite;
              } else {
                return favorite;
              }
            })
          );
        }
      });
    });
  };

  const loopAlert = () => {
    const interval = setInterval(() => {
      findAlertMatch();
    }, 10000);

    return () => clearInterval(interval);
  };

  // add/remove favorite
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

  const getFetch = (query) => {
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
      .then((resp) => {
        if (!resp.ok) {
          throw Error('Something Went wrong');
        } else {
          return resp.json();
        }
      })
      .catch((err) => console.log(err));
  };

  const fetchWeatherData = (query) => {
    setState({ ...state, loading: true });
    getFetch(query).then((data) => {
      if (data) {
        data.cacheKey = query;
        setState({
          loading: false,
          error: null,
          data,
        });
        return data;
      } else {
        setState({
          loading: false,
          error: 'Please enter a valid City or Zip',
        });
      }
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
        setAlertModal,
        alertModal,
        loopAlert,
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
