import React, { Component } from 'react';
import Task from './Task';

class Items extends Component {
	render() {
		return (
			<div>
				<Task title="Refill the canisters" time="12:20pm" date="13/12/19"/>
			</div>
		);
	}
}

export default Items;