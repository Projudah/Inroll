import React, { Component } from 'react';
import './App.scss';

import NavBar from './components/NavBar'
import Sidebar from './components/Sidebar'
import Modal from './components/Modal'

class App extends Component {
  //state to change the vierw change as requred
  state = {
    view: false
  }

  //function to react to button click, change this as required
  toggle = () =>{
    console.log(this.state.view)
    this.setState(
      {
        view: !this.state.view
      });
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
        <NavBar />
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
        <Modal />
      </div>
    )
  }
}

export default App;
