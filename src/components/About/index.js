// src/components/About/index.js
import React, { Component } from 'react';
import classnames from 'classnames';
import Header from './../../header.jsx';
import './style.css';

class About extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render() {
    const { className, ...props } = this.props;
    return (
       <div className={classnames('About', className)} {...props}>
        <Header />
        <p className="App-intro">
         About
        </p>
      </div>

    );
  }
}

export default About;
