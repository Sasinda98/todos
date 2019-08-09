import React, { Component } from 'react';
import './Body.css';
import 'tachyons';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import TaskList from './Tasks/TaskList';
import Dropdown from 'react-bootstrap/Dropdown';

class Body extends Component {

	render() {
		return (
			<div className="container-card br2">
				<div className="top bg-light-purple br2 br--top pa2">
					<DropdownButton id="dropdown-item-button" title="Sort By">
					  <Dropdown.Item as="button">Date Time</Dropdown.Item>
					  <Dropdown.Item as="button">Alphabetical</Dropdown.Item>
					  <Dropdown.Item as="button">Last updated</Dropdown.Item>
					</DropdownButton>
					<Button variant="light">New Task</Button>	

				</div>
				<div className="body br2 br--bottom">
					<TaskList/>
				</div>
			</div>
		);
	}
}

export default Body;