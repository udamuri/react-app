// src/components/About/index.js
import React, { Component } from 'react';
import classnames from 'classnames';
import { Row, Col  } from 'react-bootstrap';

const NewsMe = (
  <Row className="show-grid">
    <Col sm={12} md={12}>
        News 
    </Col>
  </Row>
);
class News extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render() {
    const { className, ...props } = this.props;
    return (
       <div className={classnames('News', className)} {...props}>
        <div className="container-fluid">
          {NewsMe}
        </div>
      </div>

    );
  }
}

export default News;
