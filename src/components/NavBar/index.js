import React from 'react'
import SearchBar from '../SearchBar'

import './navbar.scss'

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="title"><i class="fas fa-graduation-cap"></i>InRoll</div>
        <div className="search">
          <SearchBar
            toggleSearchClassModal={this.props.toggleSearchClassModal}
          />
        </div>
        <div className="help-page">
          <i class="far fa-question-circle"></i>
        </div>
      </div>
    )
  }
}
export default NavBar
