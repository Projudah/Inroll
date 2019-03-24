import React from 'react'

import './sidebar.scss'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      add: false,
      delete: false,
      swap: false,
    }

    this.addClicked = this.addClicked.bind(this)
    this.deleteClicked = this.deleteClicked.bind(this)
    this.swapClicked = this.swapClicked.bind(this)
  }
  searchCourse() {
    //need to check all the inputs and make sure at least 1 is not empty
  }

  resetCourseName() {
    document.getElementById('courseName').value = ''
  }

  resetCourseCode() {
    document.getElementById('courseCode').value = ''
  }

  myFunction() {
    document.getElementById('semester').innerHTML = 'Fall 2019'
  }

  myFunction1() {
    document.getElementById('semester').innerHTML = 'Winter 2019'
  }

  myFunction2() {
    document.getElementById('semester').innerHTML = 'Summer 2019'
  }
  myFunction3() {
    document.getElementById('semester').innerHTML = 'Fall 2020'
  }

  addClicked() {
    this.setState({
      add: true,
      delete: false,
      swap: false,
    })
  }

  deleteClicked() {
    this.setState({
      add: false,
      delete: true,
      swap: false,
    })
  }

  swapClicked() {
    this.setState({
      add: false,
      delete: false,
      swap: true,
    })
  }

  render() {
    return (
      <div className="side-container">
        <div className="sidebar">
          <div className="semester-section">
            <h1>
              <label id="semester" value="Fall 2019">
                Fall 2019
              </label>
            </h1>
            <div className="dropdown">
              <span className="change-semester">Change Semester</span>
              <div className="dropdown-content">
                <p id="fall2019" onClick={this.myFunction}>
                  Fall 2019
                </p>
                <p id="winter2019" onClick={this.myFunction1}>
                  Winter 2019
                </p>
                <p id="summer2019" onClick={this.myFunction2}>
                  Summer 2019
                </p>
                <p id="fall2020" onClick={this.myFunction3}>
                  Fall 2020
                </p>
              </div>
            </div>
          </div>
          <div className="menu">
            <div className="add-class">
              <button
                id="add"
                className={this.state.add ? 'active' : ''}
                onClick={this.addClicked}
              >
                <i className="fas fa-plus" /> Add Class
              </button>
            </div>
            <button
              id="drop"
              className={this.state.delete ? 'active' : ''}
              onClick={this.deleteClicked}
            >
              <i className="fas fa-trash-alt" /> Drop Class
            </button>
            <button
              id="swap"
              className={this.state.swap ? 'active' : ''}
              onClick={this.swapClicked}
            >
              <i className="fas fa-exchange-alt" /> Swap Class
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Sidebar
