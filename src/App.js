import React, {Component} from 'react'
import './App.scss'

import NavBar from './components/NavBar'
import Sidebar from './components/Sidebar'
import ScheduleView from './components/ScheduleView'

import SearchClassModal from './components/Modal/SearchClass'
import HelpPage from './components/Modal/HelpPage'
import SearchDepartment from './components/Modal/SearchDepartment'
import SearchClassModal2 from './components/Modal/SearchClass2'

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
    }
    this.toggleSearchClassModal = this.toggleSearchClassModal.bind(this)
    this.handleModalUnmount = this.handleModalUnmount.bind(this)
    this.toggleHelpPage = this.toggleHelpPage.bind(this)
    this.toggleSearchDepartmentModal = this.toggleSearchDepartmentModal.bind(
      this,
    )
    this.toggleSearchClassModal2 = this.toggleSearchClassModal2.bind(this)
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

  render() {
    //this variable should contatin the component
     var view = ""
     //change component depending on state
    if(this.state.view){
      view = <ScheduleView/>
    }
    //change sidebar toggle, to pass the function changing state to the side bar
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
          <Sidebar
            toggle={this.toggle}
            toggleSearchClassModal={this.toggleSearchClassModal}
            toggleSearchDepartmentModal={this.toggleSearchDepartmentModal}
          />
          <div className="content">
            {view}
          </div>
        </div>
      </div>
    )
  }
}

export default App
