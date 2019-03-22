import React, { Component } from 'react';
import './App.scss';

import NavBar from './components/NavBar'
import Sidebar from './components/Sidebar'
import SearchClassModal from './components/Modal/SearchClass'

const ModalConductor = props => {
  var handleModalUnmount = props.handleModalUnmount
  switch (props.currentModal) {
    case 'SEARCH_CLASS':
      return <SearchClassModal handleModalUnmount={handleModalUnmount} />;
    default:
      return null;
  }
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      view: false,
      currentModal: null,
    }
    this.toggleSearchClassModal = this.toggleSearchClassModal.bind(this)
    this.handleModalUnmount = this.handleModalUnmount.bind(this)
  }

  handleModalUnmount(){
    this.setState({ currentModal: null })
  }

  toggle = () =>{
    this.setState(
      {
        view: !this.state.view
      });
  }

  toggleSearchClassModal = () => {
    this.setState({ currentModal: 'SEARCH_CLASS'})
  }

  render() {
    //this variable should contatin the component
     var view = ""
     //chan ge component depending on state
    if(this.state.view){
      view = "CHANGE VIEW!!!!!!!!!!!!!"
    }
    //change sidebar toggle, to pass the function changing state to the side bar
    return (
      <div>
        <ModalConductor currentModal={this.state.currentModal} handleModalUnmount={this.handleModalUnmount} />
        <NavBar toggleSearchClassModal={this.toggleSearchClassModal} untoggleModal={this.handleModalUnmount} />
        <div className="app">
          <Sidebar toggle={this.toggle}/>
          <div class="content">
            This is where shit goes <br />
            This is where shit goes <br />
            This is where shit goes <br />
            This is where shit goes
            {//the component change is here
              view}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
