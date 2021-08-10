import React, { useState, useContext } from 'react';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, setState] = useState('Hello World');
  const changeState = (value) => {
    setState(value);
  };
  return (
    <AppContext.Provider value={{ state, changeState }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
