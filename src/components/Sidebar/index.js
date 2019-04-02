import React from 'react'
import SearchBar from '../SearchBar'
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
      swap1: false,
      swap2: false,
      swap3: false,
    }

    this.addClicked = this.addClicked.bind(this)
    this.deleteClicked = this.deleteClicked.bind(this)
    this.swapClicked = this.swapClicked.bind(this)
    this.searchClicked1 = this.searchClicked1.bind(this)
    this.searchClicked2 = this.searchClicked2.bind(this)
    this.searchClicked3 = this.searchClicked3.bind(this)
    this.swapClicked1 = this.swapClicked1.bind(this)
    this.swapClicked2 = this.swapClicked2.bind(this)
    this.swapClicked3 = this.swapClicked3.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
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

  toggleModal(e) {
    this.props.toggleSearchDepartmentModal()
    e.preventDefault()
  }

  close = (next) =>{
    if([1,7,12,4,10,16].includes(this.props.view)){
      this.props.toggle(0)
    }else{
      this.props.toggleAreyousure(next)
    }
  }

  addClicked() {
    console.log(this.props.view)
    if([7,12,0,5,11,17,4,10,16].includes(this.props.view)){
      this.setState(prevState => ({
      add: true,
      delete: false,
      swap: false,
    }))
      this.props.toggle(1)
    }else{
      var next = ([1,2,3,4,6].includes(this.props.view))? 0 : 1

      this.close(next)
    }
    
    // if(!this.state.add){
    //   this.props.toggle(1)
    // }else{
    //   if(this.props.view !== 1){
    //     this.props.toggleAreyousure()
    //   }else{
    //     this.props.toggle(0)  
    //   }
      
    // }
  }

  deleteClicked(closeSidebar) {
    if([1,12,0,5,11,17,4,10,16].includes(this.props.view)){
      this.setState(prevState => ({
      add: false,
      delete: true,
      swap: false,
    }))
      this.props.toggle(7)
    }else{
      var next = ([7,8,9,10].includes(this.props.view))? 0 : 7
      this.close(next)
    }
    // this.setState(prevState => ({
    //   add: false,
    //   delete: !prevState.delete,
    //   swap: false,
    // }))
    // if(!this.state.delete){
    //   this.props.toggle(7)
    // }else{
    //   this.props.toggle(0)
    // }
  }

  swapClicked() {
    if([1,7,0,5,11,17,4,10,16].includes(this.props.view)){
      this.setState(prevState => ({
      add: false,
      delete: false,
      swap: true,
    }))
      this.props.toggle(12)
    }else{
      var next = ([12,13,14,15,16].includes(this.props.view))? 0 : 12
      this.close(next)
    }
    // this.setState(prevState => ({
    //   add: false,
    //   delete: false,
    //   swap: !prevState.swap,
    // }))
    // if(!this.state.swap){
    //   this.props.toggle(12)
    // }else{
    //   this.props.toggle(0)
    // }
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

  swapClicked1() {
    this.setState(prevState => ({
      swap1: !prevState.swap1,
      swap2: false,
      swap3: false,
    }))
  }

  swapClicked2() {
    this.setState(prevState => ({
      swap1: false,
      swap2: !prevState.swap2,
      swap3: false,
    }))
  }

  swapClicked3() {
    this.setState(prevState => ({
      swap1: false,
      swap2: false,
      swap3: !prevState.swap3,
    }))
  }

  updateState = () =>{
    if([5].includes(this.props.view)){
      this.state.add = false;
    }
    else if([11].includes(this.props.view)){
      this.state.delete = false;
    }
    else if([17].includes(this.props.view)){
      this.state.swap = false;
    }

    if(this.props.view === 0){
      if(this.state.add || this.state.delete || this.state.swap){
        this.setState({
          add: false,
          delete: false,
          swap: false
        })
      }
    }else if(this.props.view === 1){
      if(!this.state.add){
        this.setState({
          add: true,
          delete: false,
          swap: false
        })
      }
    }
    else if(this.props.view === 2){
      if(!this.state.add){
        this.setState({
          add: true,
          delete: false,
          swap: false
        })
      }
    }else if(this.props.view === 6){
      if(!this.state.add){
        this.setState({
          add: true,
          delete: false,
          swap: false
        })
      }
    }else if(this.props.view === 7){
      if(!this.state.delete){
        this.setState({
          add: false,
          delete: true,
          swap: false
        })
      }
    }else if(this.props.view === 12){
      if(!this.state.swap){
        this.setState({
          add: false,
          delete: false,
          swap: true
        })
      }
    }
  }

  render() {

    this.updateState()
    
    // console.log("SIDE", this.state.add, this.props.view)

    return (
      <div className="side-container">
        <div className="close-sidebar">
          <i class="fas fa-times" onClick={this.props.toggleSidebarMenu}></i>
        </div>
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
          <div className="search-bar">
            <h2>Search for classes</h2>
            <SearchBar toggleSearchClassModal={this.props.toggleSearchClassModal}/>
          </div>
          <div className="mobile-title">
            <h2>Edit your schedule</h2>
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
                <div className="text">
                  Fill in 1 of the following sections to search
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
                    <form onSubmit={this.toggleModal}>
                      <label>Enter the Course Code *</label>
                      <input
                        type="text"
                        placeholder="Course Code"
                        id="courseCode"
                        required
                      />
                      <button>Search for classes</button>
                    </form>
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
                    <form onSubmit={this.toggleModal}>
                      <label>Enter the Course Name * </label>
                      <input
                        type="text"
                        placeholder="Course Name"
                        id="courseName"
                        required
                      />
                      <button>Search for classes</button>
                    </form>
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
                    <form onSubmit={this.toggleModal}>
                      <p>
                        <label>Department *</label>
                        <select required>
                          <option value="" />
                          <option value="Engineering">Engineering</option>
                          <option value="Telfer">Telfer</option>
                          <option value="Arts">Arts</option>
                          <option value="Law">Law</option>
                        </select>
                      </p>

                      <p>
                        <label>Subject *</label>
                        <select required>
                          <option value="" />
                          <option value="AIR">AIR</option>
                          <option value="SEG">SEG</option>
                          <option value="HOM">HOM</option>
                          <option value="FOO">FOO</option>
                        </select>
                      </p>

                      <p>
                        <label>Level *</label>
                        <select required>
                          <option value="" />
                          <option value="Undergraduate">Undergraduate</option>
                          <option value="Graduate">Graduate</option>
                          <option value="PHD">PHD</option>
                        </select>
                      </p>
                      <button>Search for classes</button>
                    </form>
                  </div>
                </div>
                {(this.props.view !== 4) ? <button className="cancel-button" onClick={this.addClicked}>Cancel</button> : null}
                
              </div>
            </div>
            <div className="delete-class">
              <button
                id="drop"
                className={this.state.delete ? 'active' : ''}
                onClick={this.deleteClicked}
              >
                <i className="fas fa-trash-alt" /> Drop Class
              </button>
              <div
                className={this.state.delete ? 'content-active' : 'content-hide'}
              >
              {(this.props.view !== 10) ? <button className="cancel-button" onClick={this.deleteClicked}>Cancel</button> : null}
              </div>
            </div>
            <div className="swap-class">
              <button
                id="swap"
                className={this.state.swap ? 'active' : ''}
                onClick={this.swapClicked}
              >
                <i className="fas fa-exchange-alt" /> Swap Class
              </button>
              <div
                className={this.state.swap ? 'content-active' : 'content-hide'}
              >
                <div className="text">
                  Fill in 1 of the following sections to search
                </div>
                <div className="search-container">
                  <button
                    className={
                      this.state.swap1
                        ? 'search-function active-search'
                        : 'search-function'
                    }
                    onClick={this.swapClicked1}
                  >
                    <i
                      className={
                        this.state.swap1
                          ? 'fas fa-chevron-right active-icon'
                          : 'fas fa-chevron-right'
                      }
                    />
                    Course Code
                  </button>
                  <div
                    className={
                      this.state.swap1
                        ? 'content-show-inner'
                        : 'content-hide-inner'
                    }
                  >
                    <form onSubmit={this.toggleModal}>
                      <label>Enter the Course Code *</label>
                      <input
                        type="text"
                        placeholder="Course Code"
                        id="courseCode"
                        required
                      />
                      <button>Search for classes</button>
                    </form>
                  </div>
                </div>

                <div className="search-container">
                  <button
                    className={
                      this.state.swap2
                        ? 'search-function active-search'
                        : 'search-function'
                    }
                    onClick={this.swapClicked2}
                  >
                    <i
                      className={
                        this.state.swap2
                          ? 'fas fa-chevron-right active-icon'
                          : 'fas fa-chevron-right'
                      }
                    />
                    Course Name
                  </button>
                  <div
                    className={
                      this.state.swap2
                        ? 'content-show-inner'
                        : 'content-hide-inner'
                    }
                  >
                    <form onSubmit={this.toggleModal}>
                      <label>Enter the Course Name * </label>
                      <input
                        type="text"
                        placeholder="Course Name"
                        id="courseName"
                        required
                      />
                      <button>Search for classes</button>
                    </form>
                  </div>
                </div>

                <div className="search-container">
                  <button
                    className={
                      this.state.swap3
                        ? 'search-function active-search'
                        : 'search-function'
                    }
                    onClick={this.swapClicked3}
                  >
                    <i
                      className={
                        this.state.swap3
                          ? 'fas fa-chevron-right active-icon'
                          : 'fas fa-chevron-right'
                      }
                    />
                    Department
                  </button>
                  <div
                    className={
                      this.state.swap3
                        ? 'content-show-inner'
                        : 'content-hide-inner'
                    }
                  >
                    <form onSubmit={this.toggleModal}>
                      <p>
                        <label>Department *</label>
                        <select required>
                          <option value="" />
                          <option value="Engineering">Engineering</option>
                          <option value="Telfer">Telfer</option>
                          <option value="Arts">Arts</option>
                          <option value="Law">Law</option>
                        </select>
                      </p>

                      <p>
                        <label>Subject *</label>
                        <select required>
                          <option value="" />
                          <option value="AIR">AIR</option>
                          <option value="SEG">SEG</option>
                          <option value="HOM">HOM</option>
                          <option value="FOO">FOO</option>
                        </select>
                      </p>

                      <p>
                        <label>Level *</label>
                        <select required>
                          <option value="" />
                          <option value="Undergraduate">Undergraduate</option>
                          <option value="Graduate">Graduate</option>
                          <option value="PHD">PHD</option>
                        </select>
                      </p>
                      <button>Search for classes</button>
                    </form>
                  </div>
                </div>
                  {(this.props.view !== 16) ? <button className="cancel-button" onClick={this.swapClicked}>Cancel</button> : null}
              </div>
            </div>
          </div>
        </div>
        <div className="user-info">
          <div className="user-photo">
            <i class="fas fa-user-circle" />
          </div>
          <div className="content">
            John Smith (123456789)
            <br />
            <br />
            john@uottawa.ca
          </div>
          <div class="sign-out">
            <button onClick={this.props.toggleLoginPage}>Sign Out</button>
          </div>
        </div>
      </div>
    )
  }
}
export default Sidebar
