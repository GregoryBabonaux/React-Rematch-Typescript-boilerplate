import React from 'react';
import { Route, Switch } from 'react-router-dom';

// local
import logo from './logo.svg';
import './App.css';

// scenes
import Home from './screens/Home';
import About from './screens/About';

const App = () => (
  <Switch>
    <Route path="/about" component={About} />
    <Route path="/" component={Home} />
  </Switch>
);

export default App;
