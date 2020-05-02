import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Home from './pages/Home'
import MyFavorite from './pages/MyFavorite'

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route  path="/my-favorite">
              <MyFavorite />
          </Route>

        </Switch>
      </Router>
  );
}

export default App;
