// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router'

import Routes from './routes';

import './index.css';
import './bootstrap/css/bootstrap.min.css';
// import './bootstrap/css/bootstrap-theme.min.css';
import './navbar.css';

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);
