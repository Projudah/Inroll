import React, { Component } from 'react';
import './Progress.scss'
import Stepper from 'react-stepper-horizontal';
import PointButton from '../PointButton'

class Progress extends Component {

  render() {
    return <div className = "progress_div">
    <Stepper steps={ [{title: 'Select Classes'}, {title: 'View Selection'}, {title: 'Confirm'}] }
    activeStep={1}
    activeColor = "#bb1a35"
    completeColor = "#242424"
    circleTop = {10}
    size = {32}
    circleFontSize = {15}
    lineMarginOffset = {24}
    />
    <div className = "buttons">
    
    <button className = "left"onClick={this.Cancel}>Cancel</button>
    <button className = "right" onClick={this.NextStep}>Next</button>
    <PointButton/>
    </div>
    </div>;
  }
}

export default Progress;
