// src/components/App/index.js
import React, { Component, ListItem  } from 'react';
import classnames from 'classnames';
import Request from 'react-http-request';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

import './style.css';

class GetData extends Component {
  render() {
    return (
    <Request
        // url='https://api.github.com/users/udamuri'
        url='https://jsonplaceholder.typicode.com/posts'
        method='get'
        accept='application/json'
        verbose={true}
      >
        {
          ({error, result, loading}) => {
            if (loading) {
              return <div>loading...</div>;
            } else if(result) {
                const textResults = JSON.parse(result.text);
                const sidebar = (
                  <ul>
                    {textResults.map((post) =>
                      <li key={post.id}>
                        {post.title}
                      </li>
                    )}
                  </ul>
                );
                const content = textResults.map((post) =>
                  <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                  </div>
                );
                const panelInstance = textResults.map((post) =>
                  <Panel collapsible defaultExpanded key={post.id} header={post.title}>
                    <ListGroup fill >
                      <ListGroupItem >
                        <p>{post.body}</p>
                      </ListGroupItem>
                    </ListGroup>
                  </Panel>
                );
                return <div>
                  {panelInstance}
                </div>;
              } else {
              return <div>{JSON.stringify(result.text)}</div>;
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
