// src/components/About/index.js
import React, { Component } from 'react';
import classnames from 'classnames';
import Header from './../../header.jsx';
import { Row, Col  } from 'react-bootstrap';
import './style.css';

const AboutMe = (
  <Row className="show-grid">
    <Col sm={12} md={12}>
        About
    </Col>
  </Row>
);
class About extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render() {
    const { className, ...props } = this.props;
    return (
       <div className={classnames('About', className)} {...props}>
        <Header />
        <div className="container">
          {AboutMe}
        </div>
      </div>

    );
  }
}

export default About;
