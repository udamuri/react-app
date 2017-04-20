// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router'
import Routes from './routes';

import Header from './header.jsx';

import './bootstrap/css/bootstrap.min.css';
import './navbar.css';
import './index.css';

ReactDOM.render(
  <Header />,
  document.getElementById('header')
);

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);
