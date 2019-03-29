import React, { Component } from 'react';
import './Progress.scss'
import Stepper from 'react-stepper-horizontal';
import PointButton from '../PointButton'

class Progress extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <div className = "progress_div">
		<div className = "buttons">

		<PointButton
		name ="Cancel"
		direction="left"
		clicked={this.props.cancel}/>

		<Stepper steps={ [{title: 'Select Classes'}, {title: 'View Selection'}, {title: 'Confirm'}] }
		activeStep={this.props.step}
		activeColor = "#bb1a35"
		completeColor = "#242424"
		circleTop = {30}
		size = {32}
		circleFontSize = {15}
		/>
		<PointButton
		name ="Next"
		direction="right"
		clicked={this.props.next}/>


		</div>
		</div>;
	}
}

export default Progress;
