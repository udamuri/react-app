// src/components/About/index.js
import React, { Component } from 'react';
import classnames from 'classnames';
import axios from 'axios';
import { Table, Col  } from 'react-bootstrap';
import './style.css';



class About extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get('http://ladoapi.dev:1984/moken/index?access-token=bH6TzAW14WCsApOrNJa9xCXMURJD-tYO')
      .then(res => {
        const posts = res.data.data;
        this.setState({ posts });
      });
  }

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('About', className)} {...props}>
        <div className="container-fluid">
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Blog</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map(post =>
                 <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.name}</td>
                  <td>{post.email}</td>
                  <td>{post.blog}</td>
                  <td>{post.company}</td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default About;
