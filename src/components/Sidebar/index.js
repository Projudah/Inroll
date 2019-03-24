import React from 'react'

import './sidebar.scss'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      add: false,
      delete: false,
      swap: false,
      search1: false,
      search2: false,
      search3: false,
    }

    this.addClicked = this.addClicked.bind(this)
    this.deleteClicked = this.deleteClicked.bind(this)
    this.swapClicked = this.swapClicked.bind(this)
    this.searchClicked1 = this.searchClicked1.bind(this)
    this.searchClicked2 = this.searchClicked2.bind(this)
    this.searchClicked3 = this.searchClicked3.bind(this)
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
    this.setState(prevState => ({
      add: !prevState.add,
      delete: false,
      swap: false,
    }))
  }

  deleteClicked() {
    this.setState(prevState => ({
      add: false,
      delete: !prevState.delete,
      swap: false,
    }))
  }

  swapClicked() {
    this.setState(prevState => ({
      add: false,
      delete: false,
      swap: !prevState.swap,
    }))
  }

  searchClicked1() {
    this.setState(prevState => ({
      search1: !prevState.search1,
      search2: false,
      search3: false,
    }))
  }

  searchClicked2() {
    this.setState(prevState => ({
      search1: false,
      search2: !prevState.search2,
      search3: false,
    }))
  }

  searchClicked3() {
    this.setState(prevState => ({
      search1: false,
      search2: false,
      search3: !prevState.search3,
    }))
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
              <div
                className={this.state.add ? 'content-active' : 'content-hide'}
              >
                <div class="text">
                  Fill in 1 of the follwing sections to search
                </div>
                <div className="search-container">
                  <button
                    className={
                      this.state.search1
                        ? 'search-function active-search'
                        : 'search-function'
                    }
                    onClick={this.searchClicked1}
                  >
                    <i
                      className={
                        this.state.search1
                          ? 'fas fa-chevron-right active-icon'
                          : 'fas fa-chevron-right'
                      }
                    />
                    Course Code
                  </button>
                  <div
                    className={
                      this.state.search1
                        ? 'content-show-inner'
                        : 'content-hide-inner'
                    }
                  >
                    <label>Enter the Course Code</label>
                    <input
                      type="text"
                      placeholder="Course Code"
                      id="courseCode"
                    />
                  </div>
                </div>

                <div className="search-container">
                  <button
                    className={
                      this.state.search2
                        ? 'search-function active-search'
                        : 'search-function'
                    }
                    onClick={this.searchClicked2}
                  >
                    <i
                      className={
                        this.state.search2
                          ? 'fas fa-chevron-right active-icon'
                          : 'fas fa-chevron-right'
                      }
                    />
                    Course Name
                  </button>
                  <div
                    className={
                      this.state.search2
                        ? 'content-show-inner'
                        : 'content-hide-inner'
                    }
                  >
                    <label>Enter the Course Name</label>
                    <input
                      type="text"
                      placeholder="Course Name"
                      id="courseName"
                    />
                  </div>
                </div>

                <div className="search-container">
                  <button
                    className={
                      this.state.search3
                        ? 'search-function active-search'
                        : 'search-function'
                    }
                    onClick={this.searchClicked3}
                  >
                    <i
                      className={
                        this.state.search3
                          ? 'fas fa-chevron-right active-icon'
                          : 'fas fa-chevron-right'
                      }
                    />
                    Department
                  </button>
                  <div
                    className={
                      this.state.search3
                        ? 'content-show-inner'
                        : 'content-hide-inner'
                    }
                  >
                    <p>
                      <label> Department</label>
                      <select>
                        <option value="null" />
                        <option value="Engineering">Engineering</option>
                        <option value="Telfer">Telfer</option>
                        <option value="Arts">Arts</option>
                        <option value="Law">Law</option>
                      </select>
                    </p>

                    <p>
                      <label> Subject</label>
                      <select>
                        <option value="AIR">AIR</option>
                        <option value="SEG">SEG</option>
                        <option value="HOM">HOM</option>
                        <option value="FOO">FOO</option>
                      </select>
                    </p>

                    <p>
                      <label> Level</label>
                      <select>
                        <option value="Undergraduate">Undergraduate</option>
                        <option value="Graduate">Graduate</option>
                        <option value="PHD">PHD</option>
                      </select>
                    </p>
                  </div>
                </div>
              </div>
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
