import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './Task.css';

//This class represents one task as a card in the view.
class Task extends Component {
	render() {
		var label;
		if(this.props.isNew == true){
			label = <Badge variant="secondary">New</Badge>;
		}
		return (
			<div className="pa2">	
				<Accordion defaultActiveKey="0">
					<Card className="">
					   <OverlayTrigger
					      key="right"
					      placement="right"
					      overlay={
					        <Tooltip id="tooltip-right">
					          Click to <strong>expand</strong>!
					        </Tooltip>
					      }
					    >
						    <Accordion.Toggle as={Card.Header} eventKey="1" className="accordion-layout">
						      <p className="f3 b ma0 pa0 self-center">{this.props.title} </p>
						      <span className="custom f5 self-center">{label}</span>
						      <p className="f5 ma0 pa0 self-center">{this.props.date} {this.props.time}</p>
						    </Accordion.Toggle>
				        </OverlayTrigger>
				    <Accordion.Collapse eventKey="1">
				      <Card.Body>Hello! I'm another body</Card.Body>
				    </Accordion.Collapse>
				  </Card>
				</Accordion>
		
			</div>
		);
	}
}

export default Task;