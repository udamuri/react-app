import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem, NavItem  } from 'react-bootstrap';
import logo from './ra_logo_sm.png';

class Header extends Component {
  render() {
    return (
    	<nav className="navbar navbar-default">
	      <div className="container-fluid">
	        <div className="navbar-header">
	          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
	            <span className="sr-only">Toggle navigation</span>
	            <span className="icon-bar"></span>
	            <span className="icon-bar"></span>
	            <span className="icon-bar"></span>
	          </button>
	          <a className="navbar-brand" href="/">
	            	<img src={logo} />
	          </a>
	        </div>
	        <div id="navbar" className="navbar-collapse collapse">
	          <ul className="nav navbar-nav">
	            <li><a href="/">Home</a></li>
	            <li><a href="/About">About</a></li>
	          </ul>
	        </div>
	      </div>
	    </nav>
   	);
  }
}

export default Header;