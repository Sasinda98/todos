import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navigation.css';
import 'tachyons';

class NavigationBar extends Component {
	render() {
		return (
			<div>
						
		      <Navbar className="NavMain" bg="" expand="lg" >
		        <Navbar.Brand className="brand text-light" href="/home"> <h4 className="pa0 ma0">To Do's</h4></Navbar.Brand>
		        <Navbar.Toggle aria-controls="basic-navbar-nav" />

		        <Navbar.Collapse id="basic-navbar-nav">
		          <Nav className="mr-auto" style={{alignContent:'center', alignItems:'center'}}>
		            <Nav.Link className="text-white" href="/today">Today's</Nav.Link>
		            <Nav.Link className="text-light" href="/link">Manage</Nav.Link>
		          </Nav>

		        <div className="ml-auto">
		          <ul className="navbar-nav">
		              <li className="nav-item dropdown">
		              <a className="nav-link dropdown-toggle" style={{padding: '0px'}} href="/sample" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		                <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="35" height="35" className="rounded-circle" alt="Logo"/>
		              </a>
		              <div className="dropdown-menu dropdown-menu-sm-right" aria-labelledby="navbarDropdownMenuLink">
		                <a className="dropdown-item" href="/edit/profile">Edit Profile</a>
		                <NavDropdown.Divider />
		                <a className="dropdown-item" href="/logout">Log Out</a>
		              </div>
		            </li>   
		          </ul>
		        </div>

		        </Navbar.Collapse>
		      </Navbar>

			</div>
		);
	}
}

	export default NavigationBar;
