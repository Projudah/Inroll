import React, {Component} from 'react'
import './App.scss'

import NavBar from './components/NavBar'
import NavBarMobile from './components/NavBarMobile'
import Sidebar from './components/Sidebar'
import ScheduleView from './components/ScheduleView'

import SearchClassModal from './components/Modal/SearchClass'
import HelpPage from './components/Modal/HelpPage'
import SearchDepartment from './components/Modal/SearchDepartment'
import SearchClassModal2 from './components/Modal/SearchClass2'
import LoginPage from './components/LoginPage'
import ClassInfo from './components/Modal/ClassInfo'
import PopupInfo from './components/Modal/PopupInfo'

import Progress from './components/Progress'
import ViewSelectedClasses from './components/ViewSelectedClasses'
import Confirmation from './components/Confirmation'

const ModalConductor = props => {
  var fail = props.fail
  var toggle = props.toggle
  var text = props.text
  var togglePopup = props.togglePopup
  var handleModalUnmount = props.handleModalUnmount
  var toggleSearchClassModal2 = props.toggleSearchClassModal2
  var toggleSearchDepartmentModal = props.toggleSearchDepartmentModal
  var turnOffSidebar = props.turnOffSidebar
  switch (props.currentModal) {
    case 'SEARCH_CLASS':
      return (
        <div>
          <SearchClassModal
            toggle = {toggle}
            handleModalUnmount={handleModalUnmount}
            turnOffSidebar={turnOffSidebar}
          />
        </div>
      )
    case 'HELP_PAGE':
      return <HelpPage handleModalUnmount={handleModalUnmount} />
    case 'SEARCH_RESULTS':
      return (
        <SearchDepartment
        fail = {fail}
          handleModalUnmount={handleModalUnmount}
          toggleSearchClassModal2={toggleSearchClassModal2}
        />
      )
    case 'SEARCH_CLASS2':
      return (
        <SearchClassModal2
          toggle={toggle}
          handleModalUnmount={handleModalUnmount}
          toggleSearchDepartmentModal={toggleSearchDepartmentModal}
          turnOffSidebar={turnOffSidebar}
        />
      )
    case 'CLASS_INFO':
      return <ClassInfo handleModalUnmount={handleModalUnmount} />

    case 'POPUP_INFO':
      return <PopupInfo
      text = {text}
      handleModalUnmount={handleModalUnmount}/>
    default:
      return null
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { //0: home, 1:add class select, 2: correctly add class 3: view selected classes, 
      //4:add class confirmation 5: new class added, 6: collision class view add
      view: 0,
      currentModal: null,
      loginPage: false,
      progressPhase:0,
      sidebarMenu: false,
      text: 'Intern Season'
    }
    this.toggleSearchClassModal = this.toggleSearchClassModal.bind(this)
    this.handleModalUnmount = this.handleModalUnmount.bind(this)
    this.toggleHelpPage = this.toggleHelpPage.bind(this)
    this.toggleSearchDepartmentModal = this.toggleSearchDepartmentModal.bind(this)
    this.toggleSearchClassModal2 = this.toggleSearchClassModal2.bind(this)
    this.toggleLoginPage = this.toggleLoginPage.bind(this)
    this.toggleClassInfoModal = this.toggleClassInfoModal.bind(this)
    this.changeProgressPhase = this.changeProgressPhase.bind(this)
    this.toggleSidebarMenu = this.toggleSidebarMenu.bind(this)
    this.turnOffSidebar = this.turnOffSidebar.bind(this)
    this.retProgressPhase = this.retProgressPhase.bind(this)
  }

  handleModalUnmount() {
    this.setState({currentModal: null})
  }

  toggle = (view) => {
    this.setState({
      view: view,
    })
  }

  toggleSearchClassModal = () => {
    this.setState({currentModal: 'SEARCH_CLASS'})
  }

  toggleClassInfoModal = () => {
    this.setState({currentModal: 'CLASS_INFO'})
  }

  toggleHelpPage = () => {
    this.setState({currentModal: 'HELP_PAGE'})
  }

  toggleSearchDepartmentModal = () => {
    this.setState({currentModal: 'SEARCH_RESULTS'})
  }

  toggleSearchClassModal2 = () => {
    this.setState({currentModal: 'SEARCH_CLASS2'})
  }

  toggleLoginPage(e) {
    this.setState(prevState => ({loginPage: !prevState.loginPage}))
    e.preventDefault()
  }

  togglePopupInfo = () =>{
    this.setState({
      currentModal: 'POPUP_INFO'
    })
  }

  changeProgressPhase(){
    if(this.state.view == 2){
      this.setState(prevState =>({progressPhase: 1}))
      this.toggle(3)
    }
    if(this.state.view == 3){
      this.setState(prevState =>({progressPhase: 2}))
      this.toggle(4)
    }
    if(this.state.view == 4){
      this.setState(prevState =>({progressPhase: 0}))
      this.toggle(5)
    }
  }

  setText = () =>{
    if(this.state.view == 6){
      this.setState({
        text: "Classes SEG3125 and HOM1234 are Conflicting on Monday"
      })
    }
    
    this.togglePopupInfo()
  }

  retProgressPhase(){
    if(this.state.view == 3){
      this.setState(prevState =>({progressPhase: 0}))
      this.toggle(2)
    }
  }

  drop = () =>{
    this.setState(prevState =>({progressPhase: 0}))
    this.toggle(1)
  }

  toggleSidebarMenu = () => {
    this.setState(prevState => ({ sidebarMenu: !prevState.sidebarMenu }))
  }

  turnOffSidebar = () => {
    this.setState({ sidebarMenu: false })
  }

  render() {
    //this variable should contatin the component
    var view = []
    //change component depending on state
    switch(this.state.view){
      case 0:
        view.push(<ScheduleView 
          viewTitle = "Class Schedule"
          toggleSearchClassModal={this.toggleClassInfoModal} />)
        break

      case 1:
        view.push(<Progress
          right = "Next"
          disabled = {true}
            step={this.state.progressPhase}
            next ={this.changeProgressPhase}
            prev={this.retProgressPhase}/>)
        view.push(<ScheduleView
          viewTitle = "Adding Classes"
          toggleSearchClassModal={this.toggleClassInfoModal} />)
        break
      case 2:
        view.push(<Progress
          right = "Next"
            step={this.state.progressPhase}
            next ={this.changeProgressPhase}
            prev={this.retProgressPhase}/>)
        view.push(<ScheduleView
          viewTitle = "Adding Classes"
          scheduleState="ADD_WORKS"
          toggleSearchClassModal={this.toggleClassInfoModal}
          drop={this.drop} />)
        break
      case 3:
        view.push(<Progress
          left = "Back"
          right = "Register"
            step={this.state.progressPhase}
            next ={this.changeProgressPhase}
            prev={this.retProgressPhase}/>)
        view.push(<ViewSelectedClasses/>)
        break
      case 4:
        view.push(<Progress
          right = "Home"
            step={this.state.progressPhase}
            next ={this.changeProgressPhase}
            prev={this.retProgressPhase}/>)
        view.push(<Confirmation/>)
        break
      case 5:
        view.push(<ScheduleView
          viewTitle = "Class Schedule"
          scheduleState="ADD_DONE"
          toggleSearchClassModal={this.toggleClassInfoModal} />)
        break

      case 6:
        view.push(<Progress
          right = "Next"
            step={this.state.progressPhase}
            next ={this.setText}
            prev={this.retProgressPhase}/>)
        view.push(<ScheduleView
          viewTitle = "Adding Classes"
          scheduleState="ADD_FAILS"
          toggleSearchClassModal={this.toggleClassInfoModal} 
          drop={this.drop}/>)
        break
    }

    if (this.state.loginPage)
      return <LoginPage toggleLoginPage={this.toggleLoginPage} />
    else {
      return (
        <div>
          {this.state.sidebarMenu ? <div className="mobile-navbar overlay" onClick={this.toggleSidebarMenu}></div> : null}
          <ModalConductor
          fail = {this.fail}
          toggle = {this.toggle}
            currentModal={this.state.currentModal}
            handleModalUnmount={this.handleModalUnmount}
            toggleSearchClassModal2={this.toggleSearchClassModal2}
            toggleSearchDepartmentModal={this.toggleSearchDepartmentModal}
            togglePopup = {this.togglePopupInfo}
            text = {this.state.text}
            turnOffSidebar = {this.turnOffSidebar}
          />
          <div className="web-navbar">
            <NavBar 
              toggleSearchClassModal={this.toggleSearchClassModal}
              untoggleModal={this.handleModalUnmount}
              toggleHelpPage={this.toggleHelpPage}
            />
          </div>
          <div className="mobile-navbar">
            <NavBarMobile
              untoggleModal={this.handleModalUnmount}
              toggleHelpPage={this.toggleHelpPage}
              toggleSidebarMenu={this.toggleSidebarMenu}
            />
          </div>
          <div className="app">
            <div className={this.state.sidebarMenu ? "mobile-show" : "mobile-hide" }>
              <Sidebar
                toggle={this.toggle}
                toggleSearchClassModal={this.toggleSearchClassModal}
                toggleSearchDepartmentModal={this.toggleSearchDepartmentModal}
                toggleLoginPage={this.toggleLoginPage}
                toggleSidebarMenu = {this.toggleSidebarMenu}
                view = {this.state.view}
              />
            </div>
            <div className="content">
              {view}
            </div>
          </div>
        </div>
      )
    }
  }
}

export default App
