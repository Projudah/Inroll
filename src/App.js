import React, {Component} from 'react'
import './App.scss'

import NavBar from './components/NavBar'
import Sidebar from './components/Sidebar'
import ScheduleView from './components/ScheduleView'

import SearchClassModal from './components/Modal/SearchClass'
import HelpPage from './components/Modal/HelpPage'
import SearchDepartment from './components/Modal/SearchDepartment'
import SearchClassModal2 from './components/Modal/SearchClass2'
import LoginPage from './components/LoginPage'

import Progress from './components/Progress'

const ModalConductor = props => {
  var handleModalUnmount = props.handleModalUnmount
  var toggleSearchClassModal2 = props.toggleSearchClassModal2
  var toggleSearchDepartmentModal = props.toggleSearchDepartmentModal
  switch (props.currentModal) {
    case 'SEARCH_CLASS':
      return <div><SearchClassModal handleModalUnmount={handleModalUnmount} /></div>
    case 'HELP_PAGE':
      return <HelpPage handleModalUnmount={handleModalUnmount} />
    case 'SEARCH_RESULTS':
      return (
        <SearchDepartment
          handleModalUnmount={handleModalUnmount}
          toggleSearchClassModal2={toggleSearchClassModal2}
        />
      )
    case 'SEARCH_CLASS2':
      return (
        <SearchClassModal2
          handleModalUnmount={handleModalUnmount}
          toggleSearchDepartmentModal={toggleSearchDepartmentModal}
        />
      )
    default:
      return null
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: true,
      currentModal: null,
      loginPage: false
    }
    this.toggleSearchClassModal = this.toggleSearchClassModal.bind(this)
    this.handleModalUnmount = this.handleModalUnmount.bind(this)
    this.toggleHelpPage = this.toggleHelpPage.bind(this)
    this.toggleSearchDepartmentModal = this.toggleSearchDepartmentModal.bind(this)
    this.toggleSearchClassModal2 = this.toggleSearchClassModal2.bind(this)
    this.toggleLoginPage = this.toggleLoginPage.bind(this)
  }

  handleModalUnmount() {
    this.setState({currentModal: null})
  }

  toggle = () => {
    this.setState({
      view: !this.state.view,
    })
  }

  toggleSearchClassModal = () => {
    this.setState({currentModal: 'SEARCH_CLASS'})
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

  toggleLoginPage(e){
    this.setState(prevState => ({ loginPage: !prevState.loginPage }))
    e.preventDefault()
  }

  render() {
    //this variable should contatin the component
     var view = ""
     //change component depending on state
    if(this.state.view){
      view = <ScheduleView
      toggleSearchClassModal={this.toggleSearchClassModal}
      />
    }
    if (this.state.loginPage)
      return <LoginPage toggleLoginPage={this.toggleLoginPage} />
    else{
      return (
        <div>
          <ModalConductor
            currentModal={this.state.currentModal}
            handleModalUnmount={this.handleModalUnmount}
            toggleSearchClassModal2={this.toggleSearchClassModal2}
            toggleSearchDepartmentModal={this.toggleSearchDepartmentModal}
          />
          <NavBar
            toggleSearchClassModal={this.toggleSearchClassModal}
            untoggleModal={this.handleModalUnmount}
            toggleHelpPage={this.toggleHelpPage}
          />
          <div className="app">
            <div>>
              <Sidebar
                toggle={this.toggle}
                toggleSearchClassModal={this.toggleSearchClassModal}
                toggleSearchDepartmentModal={this.toggleSearchDepartmentModal}
                toggleLoginPage={this.toggleLoginPage}
              />
            </div>
            <div className="content">
              {view}
              <Progress/>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default App
