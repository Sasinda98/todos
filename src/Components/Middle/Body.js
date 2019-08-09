import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import './Body.css';
import 'tachyons';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import TaskList from './Tasks/TaskList';
import Dropdown from 'react-bootstrap/Dropdown';

import {tasks} from './Tasks/SampleTasks';

class Body extends Component {

	render() {
		return (
			<div className="container-card">
				<div className="top bg-light-purple br--top br2 pa2">
					<DropdownButton id="dropdown-item-button" title="Sort By">
					  <Dropdown.Item as="button">Date Time</Dropdown.Item>
					  <Dropdown.Item as="button">Alphabetical</Dropdown.Item>
					  <Dropdown.Item as="button">Last updated</Dropdown.Item>
					</DropdownButton>
					<Button variant="light">New Task</Button>	

				</div>
				<div className="body">
					<TaskList/>
				</div>
			</div>
		);
	}
}

export default Body;