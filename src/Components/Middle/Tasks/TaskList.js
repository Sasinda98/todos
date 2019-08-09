import React, { Component } from 'react';
import Task from './Task';
import {tasks} from './SampleTasks';

class TaskList extends Component {

	taskCards = tasks.map((task)=>{
		return <Task title={task.name} time="12:20pm" date="13/12/19" isNew={true}/>
	});

	render() {
		console.log(tasks);
		return (
			<div>
				{this.taskCards}
			</div>
		);
	}
}

export default TaskList;