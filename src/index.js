import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AppProvider } from './context';
import { Login } from '../src/views/Login';
import { Home } from '../src/views/Home';

ReactDOM.render(
  <AppProvider>
    <Router>
      <Switch>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route>
          <h1>Not found!</h1>
        </Route>
      </Switch>
    </Router>
  </AppProvider>,
  document.getElementById('root')
);
