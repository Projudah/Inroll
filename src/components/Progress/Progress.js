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
			<div className = "leftContain">
				<PointButton
				name ="Cancel"
				direction="left"
				click={this.props.cancel}/>
			</div>

				<Stepper steps={ [{title: 'Select Classes'}, {title: 'View Selection'}, {title: 'Confirm'}] }
				activeStep={this.props.step}
				activeColor = "#bb1a35"
				completeColor = "#242424"
				circleTop = {30}
				size = {32}
				circleFontSize = {15}
				lineMarginOffset = {4}
				defaultBorderWidth = {0}
				/>
			<div className = "rightContain">
				<PointButton
				name ="Next"
				direction="right"
				click={this.props.next}/>
			</div>
			</div>
		</div>;
	}
}

export default Progress;
