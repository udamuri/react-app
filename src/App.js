import React, { Component } from 'react';
import { Button, ButtonGroup, MenuItem, DropdownButton, Navbar, NavItem, NavDropdown, Nav, Grid, Row, Col } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import './bootstrap/css/bootstrap.min.css';
import './bootstrap/css/bootstrap-theme.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="">
          <Navbar>
		    <Navbar.Header>
		      <Navbar.Brand>
		        <a href="#">React-Bootstrap</a>
		      </Navbar.Brand>
		    </Navbar.Header>
		    <Nav>
		      <NavItem eventKey={1} href="#">Link</NavItem>
		      <NavItem eventKey={2} href="#">Link</NavItem>
		      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
		        <MenuItem eventKey={3.1}>Action</MenuItem>
		        <MenuItem eventKey={3.2}>Another action</MenuItem>
		        <MenuItem eventKey={3.3}>Something else here</MenuItem>
		        <MenuItem divider />
		        <MenuItem eventKey={3.4}>Separated link</MenuItem>
		      </NavDropdown>
		    </Nav>
		  </Navbar>
        </div>
        <p className="App-intro">
          <ButtonGroup vertical block>
		    <Button bsStyle="primary">Full width button</Button>
		    <Button bsStyle="primary">Full width button</Button>
		  </ButtonGroup>

		  <ButtonGroup justified>
		    <Button href="#">Left</Button>
		    <Button href="#">Middle</Button>
		    <DropdownButton title="Dropdown" id="bg-justified-dropdown">
		      <MenuItem eventKey="1">Dropdown link</MenuItem>
		      <MenuItem eventKey="2">Dropdown link</MenuItem>
		    </DropdownButton>
		  </ButtonGroup>
        </p>

        <Grid>
		    <Row className="show-grid">
		      <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
		      <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
		    </Row>

		    <Row className="show-grid">
		      <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
		      <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
		      <Col xsHidden md={4}><code>&lt;{'Col xsHidden md={4}'} /&gt;</code></Col>
		    </Row>

		    <Row className="show-grid">
		      <Col xs={6} xsOffset={6}><code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code></Col>
		    </Row>

		    <Row className="show-grid">
		      <Col md={6} mdPush={6}><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></Col>
		      <Col md={6} mdPull={6}><code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code></Col>
		    </Row>
		  </Grid>

      </div>
    );
  }
}

export default App;
