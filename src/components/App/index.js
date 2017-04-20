// src/components/App/index.js
import React, { Component } from 'react';
import classnames from 'classnames';
import Request from 'react-http-request';

import './style.css';

class GetData extends Component {
  render() {
    return (
    <Request
        url='https://api.github.com/users/mbasso'
        method='get'
        accept='application/json'
        verbose={true}
      >
        {
          ({error, result, loading}) => {
            if (loading) {
              return <div>loading...</div>;
            } else if(result) {
              return <div>{JSON.stringify(result.text)}</div>;
            } else {
              return <div>{JSON.stringify(result)}</div>;
            }
          }
        }
      </Request>
    );
  }
}

class App extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <div className="container-fluid">
            <GetData />
        </div>
      </div>
    );
  }
}

export default App;
