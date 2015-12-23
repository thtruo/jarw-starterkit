/**
 * Entry point
 */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';
import App from './components/App';
import './normalize.css';
import 'basscss/css/basscss.min.css';
import './style.css';

render((
  <Router>
    <Route path="/" component={App}></Route>
  </Router>
  ), document.getElementById('app')
);
