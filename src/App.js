import React, { Component } from 'react';
import './App.scss';

import NavBar from './components/NavBar'
import Sidebar from './components/Sidebar'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="app">
          <Sidebar />
        </div>
      </div>
    )
  }
}

export default App;
