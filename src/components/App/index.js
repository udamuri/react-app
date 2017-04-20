// src/components/App/index.js
import React, { Component } from 'react';
import classnames from 'classnames';

import logo from './logo.svg';
import Header from './../../header.jsx';
import './style.css';

class App extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <Header />
        <div className="container">
          To get started, edit <code>src/App.js</code> and save to reload.
        </div>
      </div>
    );
  }
}

export default App;
