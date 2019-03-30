import React, { Component } from 'react';
import './Progress.scss'
import Stepper from 'react-stepper-horizontal';
import PointButton from '../PointButton'

class Progress extends Component {
	constructor(props) {
		super(props)
	}


	render() {

		var left = ' '

		if(this.props.left !== undefined){
			left = <PointButton
				name ={this.props.left}
				direction="left hover"
				clicked={this.props.prev}/>
		}
		return <div className = "progress_div">
			<div className = "buttons">
			<div className = "leftContain">
				{left}
			</div>
			<div className="progress-bar">
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
			</div>
			<div className = "rightContain">
				<PointButton
				name ={this.props.right}
				direction = {(this.props.disabled === undefined) ? "right hover" :"disabled"}
				clicked={this.props.next}/>
			</div>
			</div>
		</div>;
	}
}

export default Progress;
